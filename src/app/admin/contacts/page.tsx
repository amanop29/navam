"use client";

import { useState, useEffect, useCallback } from "react";
import { Mail, Phone, Trash2, Clock } from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: string;
  created_at: string;
}

export default function ContactsPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/inquiries${filter ? `?status=${filter}` : ""}`);
      const data = await res.json();
      setInquiries(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch("/api/admin/inquiries", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      fetchInquiries();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    try {
      await fetch(`/api/admin/inquiries?id=${id}`, { method: "DELETE" });
      fetchInquiries();
    } catch (err) {
      console.error(err);
    }
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-amber-100 text-amber-700";
      case "read": return "bg-blue-100 text-blue-700";
      case "replied": return "bg-green-100 text-green-700";
      case "closed": return "bg-gray-100 text-gray-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
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
          <h2 className="text-2xl font-bold text-gray-900">Contact Leads</h2>
          <p className="text-gray-600 text-sm mt-1">
            {inquiries.length} total inquiries
          </p>
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none"
        >
          <option value="">All Status</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <div className="space-y-3">
        {inquiries.map((inquiry) => (
          <div
            key={inquiry.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-sm transition-shadow"
          >
            <div
              className="px-5 py-4 cursor-pointer"
              onClick={() => setExpandedId(expandedId === inquiry.id ? null : inquiry.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {inquiry.name}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-1.5 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {inquiry.email}
                    </span>
                    {inquiry.phone && (
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {inquiry.phone}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(inquiry.created_at)}
                    </span>
                  </div>
                  {inquiry.subject && (
                    <p className="text-sm text-gray-600 mt-1">
                      Subject: {inquiry.subject}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {expandedId === inquiry.id && (
              <div className="px-5 pb-4 border-t border-gray-200 pt-3">
                <p className="text-sm text-gray-700 whitespace-pre-wrap">
                  {inquiry.message}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-200">
                  <span className="text-xs font-medium text-gray-600 mr-2">
                    Update status:
                  </span>
                  {["new", "read", "replied", "closed"].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(inquiry.id, s)}
                      className={`text-xs px-2.5 py-1 rounded-full transition-colors ${
                        inquiry.status === s
                          ? statusColor(s) + " font-medium"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                  <button
                    onClick={() => handleDelete(inquiry.id)}
                    className="ml-auto p-1.5 hover:bg-red-50 rounded text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {inquiries.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            <p>No inquiries found</p>
          </div>
        )}
      </div>
    </div>
  );
}
