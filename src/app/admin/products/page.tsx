"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Edit2, Trash2, Eye, EyeOff, Star, Sparkles } from "lucide-react";
import { Modal } from "@/components/admin/Modal";
import { ImageUpload } from "@/components/admin/ImageUpload";

interface Collection {
  id: string;
  name: string;
  slug: string;
}

interface Product {
  id: string;
  collection_id: string;
  name: string;
  slug: string;
  description: string | null;
  metal: string;
  purity: string;
  weight_grams: number | null;
  price_range: string | null;
  is_bestseller: boolean;
  is_new: boolean;
  is_active: boolean;
  image_url: string | null;
  gallery_urls: string[];
  created_at: string;
  collections?: { name: string; slug: string };
}

const emptyForm = {
  collection_id: "",
  name: "",
  slug: "",
  description: "",
  metal: "Gold",
  purity: "22K",
  weight_grams: "",
  price_range: "",
  is_bestseller: false,
  is_new: false,
  is_active: true,
  image_url: "",
  gallery_urls: [] as string[],
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [filterCollection, setFilterCollection] = useState("");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [prodRes, colRes] = await Promise.all([
        fetch(`/api/admin/products${filterCollection ? `?collection_id=${filterCollection}` : ""}`),
        fetch("/api/admin/collections"),
      ]);
      const prodData = await prodRes.json();
      const colData = await colRes.json();
      setProducts(prodData.data || []);
      setCollections(colData.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filterCollection]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyForm, collection_id: filterCollection || (collections[0]?.id ?? "") });
    setModalOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditing(product);
    setForm({
      collection_id: product.collection_id,
      name: product.name,
      slug: product.slug,
      description: product.description || "",
      metal: product.metal,
      purity: product.purity,
      weight_grams: product.weight_grams?.toString() || "",
      price_range: product.price_range || "",
      is_bestseller: product.is_bestseller,
      is_new: product.is_new,
      is_active: product.is_active,
      image_url: product.image_url || "",
      gallery_urls: product.gallery_urls || [],
    });
    setModalOpen(true);
  };

  const generateSlug = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const body = {
        ...(editing ? { id: editing.id } : {}),
        ...form,
        weight_grams: form.weight_grams ? parseFloat(form.weight_grams) : null,
      };

      const res = await fetch("/api/admin/products", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setModalOpen(false);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    try {
      await fetch(`/api/admin/products?id=${id}`, { method: "DELETE" });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const addGalleryImage = (url: string) => {
    if (url) setForm({ ...form, gallery_urls: [...form.gallery_urls, url] });
  };

  const removeGalleryImage = (index: number) => {
    setForm({
      ...form,
      gallery_urls: form.gallery_urls.filter((_, i) => i !== index),
    });
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Products</h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage products across your collections
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filterCollection}
            onChange={(e) => setFilterCollection(e.target.value)}
            className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none"
          >
            <option value="">All Collections</option>
            {collections.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 bg-[#0B7A75] text-white px-4 py-2.5 rounded-lg hover:bg-[#065E5A] transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-medium text-gray-600">Product</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Collection</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Metal</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Price Range</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Tags</th>
                <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className={`hover:bg-gray-50 ${!product.is_active ? "opacity-50" : ""}`}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 overflow-hidden flex-shrink-0">
                        {product.image_url ? (
                          <img src={product.image_url} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-700 text-xs">N/A</div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-600">/{product.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {product.collections?.name || "—"}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {product.metal} {product.purity}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {product.price_range || "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      {product.is_bestseller && (
                        <span className="inline-flex items-center gap-0.5 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
                          <Star className="w-3 h-3" /> Best
                        </span>
                      )}
                      {product.is_new && (
                        <span className="inline-flex items-center gap-0.5 text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                          <Sparkles className="w-3 h-3" /> New
                        </span>
                      )}
                      {!product.is_active && (
                        <span className="inline-flex items-center gap-0.5 text-xs bg-gray-50 text-gray-500 px-1.5 py-0.5 rounded">
                          <EyeOff className="w-3 h-3" /> Hidden
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => openEdit(product)}
                        className="p-1.5 hover:bg-[#0B7A75]/10 rounded text-gray-500 hover:text-[#0B7A75] transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-1.5 hover:bg-red-50 rounded text-gray-500 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {products.length === 0 && (
          <p className="text-center text-gray-600 py-8 text-sm">
            No products found. Add your first one!
          </p>
        )}
      </div>

      {/* Create/Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Product" : "New Product"}
        maxWidth="max-w-3xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Collection *
              </label>
              <select
                value={form.collection_id}
                onChange={(e) => setForm({ ...form, collection_id: e.target.value })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm"
              >
                <option value="">Select collection</option>
                {collections.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({
                  ...form,
                  name: e.target.value,
                  slug: editing ? form.slug : generateSlug(e.target.value),
                })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Metal</label>
              <select
                value={form.metal}
                onChange={(e) => setForm({ ...form, metal: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-sm"
              >
                <option>Gold</option>
                <option>Platinum</option>
                <option>Silver</option>
                <option>Diamond</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Purity</label>
              <select
                value={form.purity}
                onChange={(e) => setForm({ ...form, purity: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-sm"
              >
                <option>24K</option>
                <option>22K</option>
                <option>18K</option>
                <option>14K</option>
                <option>925</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weight (g)</label>
              <input
                type="number"
                step="0.01"
                value={form.weight_grams}
                onChange={(e) => setForm({ ...form, weight_grams: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <input
                type="text"
                value={form.price_range}
                onChange={(e) => setForm({ ...form, price_range: e.target.value })}
                placeholder="₹1,50,000 – ₹2,00,000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-sm"
              />
            </div>
          </div>

          <ImageUpload
            value={form.image_url}
            onChange={(url) => setForm({ ...form, image_url: url })}
            folder="products"
            label="Primary Image"
          />

          {/* Gallery */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {form.gallery_urls.map((url, i) => (
                <div key={i} className="relative group aspect-square rounded-lg overflow-hidden border border-gray-200">
                  <img src={url} alt="" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(i)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Eye className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <div className="aspect-square">
                <ImageUpload
                  value=""
                  onChange={addGalleryImage}
                  folder="products/gallery"
                  label=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_bestseller}
                onChange={(e) => setForm({ ...form, is_bestseller: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300 text-[#0B7A75] focus:ring-[#0B7A75]"
              />
              <span className="text-sm text-gray-700">Bestseller</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_new}
                onChange={(e) => setForm({ ...form, is_new: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300 text-[#0B7A75] focus:ring-[#0B7A75]"
              />
              <span className="text-sm text-gray-700">New Arrival</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300 text-[#0B7A75] focus:ring-[#0B7A75]"
              />
              <span className="text-sm text-gray-700">Active</span>
            </label>
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
              {saving ? "Saving..." : editing ? "Update Product" : "Create Product"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
