"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Gem,
  Package,
  Image,
  MessageSquare,
  CalendarCheck,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/collections", label: "Collections", icon: Gem },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/banners", label: "Banners", icon: Image },
  { href: "/admin/contacts", label: "Leads", icon: MessageSquare },
  { href: "/admin/appointments", label: "Appointments", icon: CalendarCheck },
  { href: "/admin/board-members", label: "Board Members", icon: Users },
  { href: "/admin/investors", label: "Investor Docs", icon: FileText },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  const checkAuth = useCallback(async () => {
    if (pathname === "/admin/login") {
      setAuthenticated(false);
      return;
    }
    try {
      const res = await fetch("/api/admin/auth");
      if (res.ok) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        router.push("/admin/login");
      }
    } catch {
      setAuthenticated(false);
      router.push("/admin/login");
    }
  }, [pathname, router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  // Login page renders without sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Loading state
  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0B7A75]" />
      </div>
    );
  }

  if (!authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#FAF7F2]">
          {/* Mobile overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`
              fixed inset-y-0 left-0 z-50 w-60 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-200 shadow-sm
              lg:translate-x-0 lg:static lg:z-auto
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            {/* Brand */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
              <Link href="/admin" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B7A75] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  NJ
                </div>
                <span className="font-semibold text-base text-gray-900">Admin</span>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/admin" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                      ${
                        isActive
                          ? "bg-[#0B7A75] text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }
                    `}
                  >
                    <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom */}
            <div className="px-4 py-4 border-t border-gray-100">
              <div className="mb-3 px-1">
                <p className="text-xs text-gray-500">Logged in as</p>
                <p className="text-sm text-[#0B7A75] font-medium truncate">admin</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Bar - mobile only */}
            <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900">
                {navItems.find(
                  (i) =>
                    pathname === i.href ||
                    (i.href !== "/admin" && pathname.startsWith(i.href))
                )?.label || "Admin Panel"}
              </h1>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto px-5 py-4 lg:px-8 lg:py-5">
              {children}
            </main>
          </div>
        </div>
  );
}
