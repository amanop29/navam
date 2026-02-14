import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const revalidate = 300; // Revalidate every 5 minutes

// GET public site settings (no auth required)
export async function GET() {
  const { data, error } = await supabase
    .from("site_settings")
    .select("key, value, type");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Transform array to key-value object for easier consumption
  const settings: Record<string, string> = {};
  data?.forEach((setting) => {
    settings[setting.key] = setting.value || "";
  });

  return NextResponse.json({ settings });
}
