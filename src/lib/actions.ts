"use server";

import { supabase } from "@/lib/supabase";

// ────────────────────────────────────
// Contact Form
// ────────────────────────────────────
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  try {
    const { error } = await supabase.from("inquiries").insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      subject: formData.subject || null,
      message: formData.message,
    });

    if (error) throw error;
    return { success: true, message: "Thank you! We'll get back to you shortly." };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

// ────────────────────────────────────
// Appointment Booking
// ────────────────────────────────────
export async function submitAppointment(formData: {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  showroom: string;
  service: string;
  notes?: string;
}) {
  try {
    const { error } = await supabase.from("appointments").insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferred_date: formData.preferredDate,
      preferred_time: formData.preferredTime,
      showroom: formData.showroom,
      service: formData.service,
      notes: formData.notes || null,
    });

    if (error) throw error;
    return { success: true, message: "Appointment request submitted. We'll confirm shortly." };
  } catch (err) {
    console.error("Appointment error:", err);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

// ────────────────────────────────────
// Community Join (Inner Circle)
// ────────────────────────────────────
export async function submitCommunityJoin(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  city?: string;
}) {
  try {
    const { error } = await supabase.from("community_members").insert({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || null,
      city: formData.city || null,
    });

    if (error) throw error;
    return { success: true, message: "Welcome to the Inner Circle!" };
  } catch (err) {
    console.error("Community join error:", err);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

// ────────────────────────────────────
// Fetch Collections (for dynamic pages)
// ────────────────────────────────────
export async function getCollections() {
  try {
    const { data, error } = await supabase
      .from("collections")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.error("Fetch collections error:", err);
    return { success: false, data: [] };
  }
}

// ────────────────────────────────────
// Fetch Products by Collection
// ────────────────────────────────────
export async function getProductsByCollection(collectionSlug: string) {
  try {
    const { data: collection, error: colErr } = await supabase
      .from("collections")
      .select("id, name, tagline, description")
      .eq("slug", collectionSlug)
      .single();

    if (colErr || !collection) throw colErr || new Error("Collection not found");

    const { data: products, error: prodErr } = await supabase
      .from("products")
      .select("*")
      .eq("collection_id", collection.id)
      .order("created_at", { ascending: false });

    if (prodErr) throw prodErr;
    return { success: true, collection, products: products || [] };
  } catch (err) {
    console.error("Fetch products error:", err);
    return { success: false, collection: null, products: [] };
  }
}

// ────────────────────────────────────
// Fetch Blog Posts
// ────────────────────────────────────
export async function getBlogPosts(limit = 10) {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error) throw error;
    return { success: true, data: data || [] };
  } catch (err) {
    console.error("Fetch blog posts error:", err);
    return { success: false, data: [] };
  }
}

// ────────────────────────────────────
// Fetch News Articles
// ────────────────────────────────────
export async function getNewsArticles(limit = 10) {
  try {
    const { data, error } = await supabase
      .from("news_articles")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error) throw error;
    return { success: true, data: data || [] };
  } catch (err) {
    console.error("Fetch news error:", err);
    return { success: false, data: [] };
  }
}
