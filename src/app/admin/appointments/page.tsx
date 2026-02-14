"use client";

import { useState, useEffect, useCallback } from "react";
import { Mail, Phone, MapPin, Trash2, Clock, Calendar } from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  showroom: string;
  service: string;
  notes: string | null;
  status: string;
  created_at: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchAppointments = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/appointments${filter ? `?status=${filter}` : ""}`);
      const data = await res.json();
      setAppointments(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch("/api/admin/appointments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      fetchAppointments();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this appointment?")) return;
    try {
      await fetch(`/api/admin/appointments?id=${id}`, { method: "DELETE" });
      fetchAppointments();
    } catch (err) {
      console.error(err);
    }
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-amber-100 text-amber-700";
      case "confirmed": return "bg-blue-100 text-blue-700";
      case "completed": return "bg-green-100 text-green-700";
      case "cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0B7A75]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
          <p className="text-gray-600 text-sm mt-1">
            {appointments.length} total appointments
          </p>
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-[#0B7A75] focus:border-transparent outline-none"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-medium text-gray-600">Customer</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Date & Time</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Showroom</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Service</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {appointments.map((apt) => (
                <>
                  <tr
                    key={apt.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setExpandedId(expandedId === apt.id ? null : apt.id)}
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900">{apt.name}</p>
                      <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {apt.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {apt.phone}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-600" />
                        {formatDate(apt.preferred_date)} at {apt.preferred_time}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-600" />
                        {apt.showroom}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{apt.service}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor(apt.status)}`}>
                        {apt.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(apt.id);
                        }}
                        className="p-1.5 hover:bg-red-50 rounded text-gray-600 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  {expandedId === apt.id && (
                    <tr key={`${apt.id}-expand`}>
                      <td colSpan={6} className="bg-gray-50 px-4 py-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-medium text-gray-600 mr-1">
                            Update status:
                          </span>
                          {["pending", "confirmed", "completed", "cancelled"].map((s) => (
                            <button
                              key={s}
                              onClick={() => updateStatus(apt.id, s)}
                              className={`text-xs px-2.5 py-1 rounded-full transition-colors capitalize ${
                                apt.status === s
                                  ? statusColor(s) + " font-medium"
                                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                          {apt.notes && (
                            <span className="text-xs text-gray-600 ml-4">
                              <span className="font-medium">Notes:</span> {apt.notes}
                            </span>
                          )}
                          <span className="text-xs text-gray-600 ml-auto flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Submitted {new Date(apt.created_at).toLocaleDateString("en-IN")}
                          </span>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
        {appointments.length === 0 && (
          <p className="text-center text-gray-600 py-8 text-sm">
            No appointments found
          </p>
        )}
      </div>
    </div>
  );
}
