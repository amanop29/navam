"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Edit2, Trash2, Eye, EyeOff } from "lucide-react";
import { Modal } from "@/components/admin/Modal";
import { ImageUpload } from "@/components/admin/ImageUpload";

interface Collection {
  id: string;
  name: string;
  slug: string;
  tagline: string | null;
  description: string | null;
  image_url: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

const emptyForm = {
  name: "",
  slug: "",
  tagline: "",
  description: "",
  image_url: "",
  sort_order: 0,
  is_active: true,
};

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Collection | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchCollections = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/collections");
      const data = await res.json();
      setCollections(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (collection: Collection) => {
    setEditing(collection);
    setForm({
      name: collection.name,
      slug: collection.slug,
      tagline: collection.tagline || "",
      description: collection.description || "",
      image_url: collection.image_url || "",
      sort_order: collection.sort_order,
      is_active: collection.is_active,
    });
    setModalOpen(true);
  };

  const generateSlug = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const method = editing ? "PUT" : "POST";
      const body = editing
        ? { id: editing.id, ...form }
        : form;

      const res = await fetch("/api/admin/collections", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setModalOpen(false);
        fetchCollections();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this collection? All products in it will also be deleted.")) return;

    try {
      await fetch(`/api/admin/collections?id=${id}`, { method: "DELETE" });
      fetchCollections();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleActive = async (collection: Collection) => {
    try {
      await fetch("/api/admin/collections", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: collection.id,
          is_active: !collection.is_active,
        }),
      });
      fetchCollections();
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
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage your jewellery collections
          </p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-[#0B7A75] text-white px-4 py-2.5 rounded-lg hover:bg-[#065E5A] transition-all text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Collection
        </button>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className={`bg-white rounded-xl border overflow-hidden hover:border-gray-300 transition-all ${
              collection.is_active ? "border-gray-200" : "border-gray-200 opacity-60"
            }`}
          >
            <div className="h-40 bg-gray-50 relative">
              {collection.image_url ? (
                <img
                  src={collection.image_url}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-700">
                  No Image
                </div>
              )}
              {!collection.is_active && (
                <span className="absolute top-2 left-2 bg-gray-800/80 text-white text-xs px-2 py-1 rounded">
                  Hidden
                </span>
              )}
              <span className="absolute top-2 right-2 bg-gray-800/90 text-gray-700 text-xs px-2 py-1 rounded font-medium">
                #{collection.sort_order}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{collection.name}</h3>
              {collection.tagline && (
                <p className="text-sm text-gray-500 mt-0.5">
                  {collection.tagline}
                </p>
              )}
              <p className="text-xs text-gray-600 mt-1">/{collection.slug}</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                <button
                  onClick={() => openEdit(collection)}
                  className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#0B7A75] transition-colors px-2 py-1.5 rounded hover:bg-[#0B7A75]/10"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  Edit
                </button>
                <button
                  onClick={() => toggleActive(collection)}
                  className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-600 transition-colors px-2 py-1.5 rounded hover:bg-blue-50"
                >
                  {collection.is_active ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" /> Hide
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" /> Show
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleDelete(collection.id)}
                  className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-red-600 transition-colors px-2 py-1.5 rounded hover:bg-red-50 ml-auto"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {collections.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>No collections yet. Create your first one!</p>
        </div>
      )}

      {/* Create/Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Collection" : "New Collection"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => {
                  setForm({
                    ...form,
                    name: e.target.value,
                    slug: editing ? form.slug : generateSlug(e.target.value),
                  });
                }}
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug *
              </label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tagline
            </label>
            <input
              type="text"
              value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm text-gray-900"
              placeholder="e.g., Bridal & Festive"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm text-gray-900 resize-none"
            />
          </div>

          <ImageUpload
            value={form.image_url}
            onChange={(url) => setForm({ ...form, image_url: url })}
            folder="collections"
            label="Collection Image"
          />

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
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm text-gray-900"
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
                <span className="text-sm text-gray-700">Active (visible on site)</span>
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
              className="px-6 py-2 text-sm bg-[#0B7A75] text-white rounded-lg hover:bg-[#065E5A] transition-all disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : editing
                ? "Update Collection"
                : "Create Collection"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
