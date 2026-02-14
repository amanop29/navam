"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Edit2, Trash2, FileText, Download, Eye, EyeOff } from "lucide-react";
import { Modal } from "@/components/admin/Modal";
import { ImageUpload } from "@/components/admin/ImageUpload";

interface InvestorDoc {
  id: string;
  title: string;
  category: string;
  fiscal_year: string | null;
  file_url: string;
  file_size: string | null;
  published_date: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

const categories = [
  { value: "annual_report", label: "Annual Report" },
  { value: "quarterly_report", label: "Quarterly Report" },
  { value: "agm_notice", label: "AGM Notice" },
  { value: "ipo", label: "IPO" },
  { value: "rating", label: "Rating" },
  { value: "charter", label: "Charter" },
  { value: "other", label: "Other" },
];

const emptyForm = {
  title: "",
  category: "annual_report",
  fiscal_year: "",
  file_url: "",
  file_size: "",
  published_date: "",
  sort_order: 0,
  is_active: true,
};

export default function InvestorsPage() {
  const [docs, setDocs] = useState<InvestorDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<InvestorDoc | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");

  const fetchDocs = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/investors${filterCategory ? `?category=${filterCategory}` : ""}`);
      const data = await res.json();
      setDocs(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filterCategory]);

  useEffect(() => {
    fetchDocs();
  }, [fetchDocs]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (doc: InvestorDoc) => {
    setEditing(doc);
    setForm({
      title: doc.title,
      category: doc.category,
      fiscal_year: doc.fiscal_year || "",
      file_url: doc.file_url,
      file_size: doc.file_size || "",
      published_date: doc.published_date || "",
      sort_order: doc.sort_order,
      is_active: doc.is_active,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const body = editing
        ? { id: editing.id, ...form }
        : form;

      const res = await fetch("/api/admin/investors", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setModalOpen(false);
        fetchDocs();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this document?")) return;
    try {
      await fetch(`/api/admin/investors?id=${id}`, { method: "DELETE" });
      fetchDocs();
    } catch (err) {
      console.error(err);
    }
  };

  const getCategoryLabel = (value: string) =>
    categories.find((c) => c.value === value)?.label || value;

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
          <h2 className="text-2xl font-bold text-gray-900">Investor Documents</h2>
          <p className="text-gray-600 text-sm mt-1">
            Upload and manage investor-facing PDFs and reports
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 bg-[#0B7A75] text-white px-4 py-2.5 rounded-lg hover:bg-[#065E5A] transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Upload Document
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-medium text-gray-600">Document</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Category</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Year</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Published</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {docs.map((doc) => (
                <tr key={doc.id} className={`hover:bg-gray-50 ${!doc.is_active ? "opacity-50" : ""}`}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{doc.title}</p>
                        {doc.file_size && (
                          <p className="text-xs text-gray-600">{doc.file_size}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded">
                      {getCategoryLabel(doc.category)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{doc.fiscal_year || "—"}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {doc.published_date
                      ? new Date(doc.published_date).toLocaleDateString("en-IN")
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    {doc.is_active ? (
                      <span className="inline-flex items-center gap-1 text-xs text-green-600">
                        <Eye className="w-3 h-3" /> Visible
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                        <EyeOff className="w-3 h-3" /> Hidden
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <a
                        href={doc.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:bg-blue-50 rounded text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => openEdit(doc)}
                        className="p-1.5 hover:bg-gray-50 rounded text-gray-500 hover:text-[#0B7A75] transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(doc.id)}
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
        {docs.length === 0 && (
          <p className="text-center text-gray-600 py-8 text-sm">
            No documents found. Upload your first one!
          </p>
        )}
      </div>

      {/* Create/Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Document" : "Upload Document"}
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm bg-gray-50 text-gray-900"
              placeholder="e.g., Annual Report FY 2024-25"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fiscal Year
              </label>
              <input
                type="text"
                value={form.fiscal_year}
                onChange={(e) => setForm({ ...form, fiscal_year: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900"
                placeholder="2024-25"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Published Date
              </label>
              <input
                type="date"
                value={form.published_date}
                onChange={(e) => setForm({ ...form, published_date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900"
              />
            </div>
          </div>

          <ImageUpload
            value={form.file_url}
            onChange={(url) => setForm({ ...form, file_url: url })}
            folder="investors"
            label="PDF / Document File"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                File Size
              </label>
              <input
                type="text"
                value={form.file_size}
                onChange={(e) => setForm({ ...form, file_size: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900"
                placeholder="2.5 MB"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sort Order
              </label>
              <input
                type="number"
                value={form.sort_order}
                onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_active}
              onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
              className="w-4 h-4 rounded border-gray-300 text-[#0B7A75] focus:ring-[#0B7A75]"
            />
            <span className="text-sm text-gray-700">Active (visible to investors)</span>
          </label>

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
              {saving ? "Saving..." : editing ? "Update Document" : "Upload Document"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
