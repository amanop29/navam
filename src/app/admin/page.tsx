"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Gem,
  Package,
  CalendarCheck,
  Users,
  FileText,
  Newspaper,
  BookOpen,
  RefreshCw,
  ArrowRight,
  Mail,
  Star,
  TrendingUp,
} from "lucide-react";

interface DashboardStats {
  collections: number;
  products: number;
  newInquiries: number;
  pendingAppointments: number;
  communityMembers: number;
  investorDocs: number;
  blogPosts: number;
  newsArticles: number;
}

interface RecentItem {
  id: string;
  name: string;
  email: string;
  subject?: string;
  preferred_date?: string;
  showroom?: string;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentInquiries, setRecentInquiries] = useState<RecentItem[]>([]);
  const [recentAppointments, setRecentAppointments] = useState<RecentItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/dashboard");
      const data = await res.json();
      setStats(data.stats);
      setRecentInquiries(data.recentInquiries || []);
      setRecentAppointments(data.recentAppointments || []);
    } catch (err) {
      console.error("Failed to load dashboard:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const topCards = stats
    ? [
        { label: "Collections", value: stats.collections, icon: Gem },
        { label: "Total Products", value: stats.products, icon: Package },
        { label: "Investor Docs", value: stats.investorDocs, icon: FileText },
        { label: "Community Members", value: stats.communityMembers, icon: Star },
      ]
    : [];

  const timeAgo = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
  };

  const statusDot = (status: string) => {
    switch (status) {
      case "new":
      case "pending":
        return "bg-amber-400";
      case "read":
      case "confirmed":
        return "bg-blue-400";
      case "replied":
      case "completed":
        return "bg-emerald-400";
      default:
        return "bg-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0B7A75]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <button
          onClick={fetchDashboard}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topCards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-11 h-11 rounded-xl bg-[#0B7A75] flex items-center justify-center mb-4 shadow-sm">
              <card.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            <p className="text-sm text-gray-600 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Leads Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B7A75]/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#0B7A75]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Leads Overview</h3>
              <p className="text-sm text-gray-600">Recent inquiries from potential clients</p>
            </div>
          </div>
          <Link
            href="/admin/contacts"
            className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-300 rounded-full px-4 py-1.5 hover:bg-gray-50 transition-colors"
          >
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-[#0B7A75] flex items-center justify-center shadow-sm">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {stats ? stats.newInquiries + (stats.blogPosts || 0) : 0}
              </p>
              <p className="text-xs text-gray-600">Total Leads</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-[#0B7A75] flex items-center justify-center shadow-sm">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {stats?.newInquiries ?? 0}
              </p>
              <p className="text-xs text-gray-600">New Leads</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-[#0B7A75] flex items-center justify-center shadow-sm">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {stats?.pendingAppointments ?? 0}
              </p>
              <p className="text-xs text-gray-600">Pending Appointments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Stats Summary + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Stats */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-5 h-5 text-[#0B7A75]" />
            <h3 className="font-semibold text-gray-900">Content Stats</h3>
          </div>
          <div className="space-y-4">
            {stats && [
              { label: "Blog Posts", value: stats.blogPosts, icon: BookOpen },
              { label: "News Articles", value: stats.newsArticles, icon: Newspaper },
              { label: "Pending Appointments", value: stats.pendingAppointments, icon: CalendarCheck },
              { label: "Investor Documents", value: stats.investorDocs, icon: FileText },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#0B7A75]" />
                  </div>
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-5">Recent Activity</h3>
          <div className="space-y-4">
            {recentInquiries.length === 0 && recentAppointments.length === 0 ? (
              <p className="text-gray-500 text-sm py-4">No recent activity</p>
            ) : (
              <>
                {recentInquiries.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${statusDot(item.status)}`} />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900 font-medium">
                        New inquiry received
                      </p>
                      <p className="text-xs text-gray-600">
                        From {item.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{timeAgo(item.created_at)}</p>
                    </div>
                  </div>
                ))}
                {recentAppointments.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${statusDot(item.status)}`} />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900 font-medium">
                        Appointment requested
                      </p>
                      <p className="text-xs text-gray-600">
                        From {item.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{timeAgo(item.created_at)}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
