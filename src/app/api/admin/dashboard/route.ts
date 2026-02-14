import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase-admin";

// GET dashboard stats
export async function GET(request: NextRequest) {
  const authError = await requireAdmin(request);
  if (authError) return authError;

  try {
    const [
      { count: collectionsCount },
      { count: productsCount },
      { count: newInquiries },
      { count: pendingAppointments },
      { count: communityMembers },
      { count: investorDocs },
      { count: blogPosts },
      { count: newsArticles },
    ] = await Promise.all([
      supabaseAdmin.from("collections").select("*", { count: "exact", head: true }),
      supabaseAdmin.from("products").select("*", { count: "exact", head: true }),
      supabaseAdmin.from("inquiries").select("*", { count: "exact", head: true }).eq("status", "new"),
      supabaseAdmin.from("appointments").select("*", { count: "exact", head: true }).eq("status", "pending"),
      supabaseAdmin.from("community_members").select("*", { count: "exact", head: true }),
      supabaseAdmin.from("investor_documents").select("*", { count: "exact", head: true }),
      supabaseAdmin.from("blog_posts").select("*", { count: "exact", head: true }),
      supabaseAdmin.from("news_articles").select("*", { count: "exact", head: true }),
    ]);

    // Recent inquiries
    const { data: recentInquiries } = await supabaseAdmin
      .from("inquiries")
      .select("id, name, email, subject, status, created_at")
      .order("created_at", { ascending: false })
      .limit(5);

    // Recent appointments
    const { data: recentAppointments } = await supabaseAdmin
      .from("appointments")
      .select("id, name, email, preferred_date, showroom, status, created_at")
      .order("created_at", { ascending: false })
      .limit(5);

    return NextResponse.json({
      stats: {
        collections: collectionsCount || 0,
        products: productsCount || 0,
        newInquiries: newInquiries || 0,
        pendingAppointments: pendingAppointments || 0,
        communityMembers: communityMembers || 0,
        investorDocs: investorDocs || 0,
        blogPosts: blogPosts || 0,
        newsArticles: newsArticles || 0,
      },
      recentInquiries: recentInquiries || [],
      recentAppointments: recentAppointments || [],
    });
  } catch (err) {
    console.error("Dashboard stats error:", err);
    return NextResponse.json({ error: "Failed to load stats" }, { status: 500 });
  }
}
