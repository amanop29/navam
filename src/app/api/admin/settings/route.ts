import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase-admin";

// GET all site settings
export async function GET(request: NextRequest) {
  const authError = await requireAdmin(request);
  if (authError) return authError;

  const { data, error } = await supabaseAdmin
    .from("site_settings")
    .select("*")
    .order("key", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

// UPDATE a setting (or batch update)
export async function PUT(request: NextRequest) {
  const authError = await requireAdmin(request);
  if (authError) return authError;

  try {
    const body = await request.json();

    // Support batch update: { settings: [{ key, value }, ...] }
    if (body.settings && Array.isArray(body.settings)) {
      const results = [];
      for (const setting of body.settings) {
        const { data, error } = await supabaseAdmin
          .from("site_settings")
          .update({ value: setting.value })
          .eq("key", setting.key)
          .select()
          .single();

        if (error) {
          results.push({ key: setting.key, error: error.message });
        } else {
          results.push({ key: setting.key, data });
        }
      }
      return NextResponse.json({ results });
    }

    // Single setting update: { key, value }
    const { key, value } = body;
    if (!key) return NextResponse.json({ error: "Key is required" }, { status: 400 });

    const { data, error } = await supabaseAdmin
      .from("site_settings")
      .update({ value })
      .eq("key", key)
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
