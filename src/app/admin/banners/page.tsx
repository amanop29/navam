"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Edit2, Trash2, Eye, EyeOff } from "lucide-react";
import { Modal } from "@/components/admin/Modal";
import { ImageUpload } from "@/components/admin/ImageUpload";

interface Banner {
  id: string;
  title: string;
  subtitle: string | null;
  image_url: string;
  mobile_image_url: string | null;
  link_url: string;
  link_text: string;
  overlay_opacity: number;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

const emptyForm = {
  title: "",
  subtitle: "",
  image_url: "",
  mobile_image_url: "",
  link_url: "/collections",
  link_text: "Explore Collections",
  overlay_opacity: 0.5,
  sort_order: 0,
  is_active: true,
};

export default function BannersPage() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Banner | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchBanners = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/banners");
      const data = await res.json();
      setBanners(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (banner: Banner) => {
    setEditing(banner);
    setForm({
      title: banner.title,
      subtitle: banner.subtitle || "",
      image_url: banner.image_url,
      mobile_image_url: banner.mobile_image_url || "",
      link_url: banner.link_url,
      link_text: banner.link_text,
      overlay_opacity: banner.overlay_opacity,
      sort_order: banner.sort_order,
      is_active: banner.is_active,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const body = editing ? { id: editing.id, ...form } : form;
      const res = await fetch("/api/admin/banners", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setModalOpen(false);
        fetchBanners();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this banner?")) return;
    try {
      await fetch(`/api/admin/banners?id=${id}`, { method: "DELETE" });
      fetchBanners();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleActive = async (banner: Banner) => {
    try {
      await fetch("/api/admin/banners", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: banner.id, is_active: !banner.is_active }),
      });
      fetchBanners();
    } catch (err) {
      console.error(err);
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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Homepage Banners</h2>
          <p className="text-gray-600 text-sm mt-1">
            Manage hero banners shown on the homepage
          </p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-[#0B7A75] text-white px-4 py-2.5 rounded-lg hover:bg-[#065E5A] transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Banner
        </button>
      </div>

      {/* Banners List */}
      <div className="space-y-4">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow ${
              banner.is_active ? "border-gray-200" : "border-gray-200 opacity-60"
            }`}
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-80 h-48 md:h-auto bg-gray-50 relative flex-shrink-0">
                <img
                  src={banner.image_url}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-black"
                  style={{ opacity: banner.overlay_opacity }}
                />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded font-medium">
                    #{banner.sort_order}
                  </span>
                </div>
                {!banner.is_active && (
                  <span className="absolute top-3 left-3 bg-gray-800/80 text-white text-xs px-2 py-1 rounded">
                    Hidden
                  </span>
                )}
              </div>
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {banner.title}
                    </h3>
                    {banner.subtitle && (
                      <p className="text-sm text-gray-600 mt-0.5">
                        {banner.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleActive(banner)}
                      className="p-1.5 hover:bg-blue-50 rounded text-gray-600 hover:text-blue-600 transition-colors"
                      title={banner.is_active ? "Hide" : "Show"}
                    >
                      {banner.is_active ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => openEdit(banner)}
                      className="p-1.5 hover:bg-[#0B7A75]/10 rounded text-gray-600 hover:text-[#0B7A75] transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="p-1.5 hover:bg-red-50 rounded text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-600">
                  <span>Link: <span className="font-medium text-gray-700">{banner.link_url}</span></span>
                  <span>CTA: <span className="font-medium text-gray-700">{banner.link_text}</span></span>
                  <span>Overlay: <span className="font-medium text-gray-700">{Math.round(banner.overlay_opacity * 100)}%</span></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {banners.length === 0 && (
        <div className="text-center py-12 text-gray-600">
          <p>No banners yet. Add your first one!</p>
        </div>
      )}

      {/* Create/Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Banner" : "New Banner"}
        maxWidth="max-w-3xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm text-gray-900"
              placeholder="Unleash the shining beauty within."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtitle
            </label>
            <input
              type="text"
              value={form.subtitle}
              onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm text-gray-900"
              placeholder="Heritage · Craftsmanship"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ImageUpload
              value={form.image_url}
              onChange={(url) => setForm({ ...form, image_url: url })}
              folder="banners"
              label="Banner Image (Desktop) *"
            />
            <ImageUpload
              value={form.mobile_image_url}
              onChange={(url) => setForm({ ...form, mobile_image_url: url })}
              folder="banners"
              label="Banner Image (Mobile)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link URL
              </label>
              <input
                type="text"
                value={form.link_url}
                onChange={(e) => setForm({ ...form, link_url: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900"
                placeholder="/collections"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Text
              </label>
              <input
                type="text"
                value={form.link_text}
                onChange={(e) => setForm({ ...form, link_text: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900"
                placeholder="Explore Collections"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Overlay Opacity
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={form.overlay_opacity}
                onChange={(e) =>
                  setForm({ ...form, overlay_opacity: parseFloat(e.target.value) })
                }
                className="w-full mt-2"
              />
              <p className="text-xs text-gray-600 text-center mt-0.5">
                {Math.round(form.overlay_opacity * 100)}%
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sort Order
              </label>
              <input
                type="number"
                value={form.sort_order}
                onChange={(e) =>
                  setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })
                }
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900"
              />
            </div>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_active}
                  onChange={(e) =>
                    setForm({ ...form, is_active: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-gray-300 text-[#0B7A75] focus:ring-[#0B7A75]"
                />
                <span className="text-sm text-gray-700">Active</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 text-sm bg-[#0B7A75] text-white rounded-lg hover:bg-[#065E5A] transition-colors disabled:opacity-50"
            >
              {saving ? "Saving..." : editing ? "Update Banner" : "Create Banner"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
