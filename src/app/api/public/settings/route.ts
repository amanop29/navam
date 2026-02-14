import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Public endpoint — returns all site settings
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("site_settings")
      .select("key, value, type");

    if (error) throw error;

    // Convert to key-value map for easier consumption
    const settings: Record<string, string> = {};
    (data || []).forEach((s: { key: string; value: string | null }) => {
      settings[s.key] = s.value || "";
    });

    return NextResponse.json({ data: settings });
  } catch (err) {
    console.error("Fetch settings error:", err);
    return NextResponse.json({ data: {} });
  }
}
