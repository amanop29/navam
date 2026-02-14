import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Public endpoint — returns active banners for the homepage
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("homepage_banners")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return NextResponse.json({ data });
  } catch (err) {
    console.error("Fetch banners error:", err);
    return NextResponse.json({ data: [] });
  }
}
