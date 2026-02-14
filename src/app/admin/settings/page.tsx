"use client";

import { useState, useEffect, useCallback } from "react";
import { Save, RefreshCw } from "lucide-react";
import { ImageUpload } from "@/components/admin/ImageUpload";

interface Setting {
  id: string;
  key: string;
  value: string | null;
  type: string;
  label: string | null;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/settings");
      if (!res.ok) {
        throw new Error(`Failed to fetch settings: ${res.status}`);
      }
      const data = await res.json();
      const settingsData = data.data || [];
      
      if (settingsData.length === 0) {
        setError("No settings found. Please run the admin-schema.sql file in Supabase.");
      }
      
      setSettings(settingsData);

      const values: Record<string, string> = {};
      settingsData.forEach((s: Setting) => {
        values[s.key] = s.value || "";
      });
      setFormValues(values);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Failed to load settings");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);

    try {
      const settingsArray = Object.entries(formValues).map(([key, value]) => ({
        key,
        value,
      }));

      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: settingsArray }),
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const updateValue = (key: string, value: string) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const imageSettings = settings.filter((s) => s.type === "image");
  const textSettings = settings.filter((s) => s.type === "text");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0B7A75]" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
          <p className="text-gray-600 text-sm mt-1">
            Manage your website logo, contact info, and social links
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchSettings}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-[#0B7A75] text-white px-5 py-2.5 rounded-lg hover:bg-[#065E5A] transition-colors text-sm font-medium disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : saved ? "Saved!" : "Save All"}
          </button>
        </div>
      </div>

      {saved && (
        <div className="bg-green-50 text-green-700 text-sm px-4 py-3 rounded-lg border border-green-200">
          Settings saved successfully!
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-700 text-sm px-4 py-3 rounded-lg border border-red-200">
          {error}
        </div>
      )}

      {/* Logo & Brand Images */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Brand Images</h3>
        {imageSettings.length === 0 ? (
          <p className="text-sm text-gray-500">No image settings found. Please ensure the database schema has been initialized.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {imageSettings.map((setting) => (
              <ImageUpload
                key={setting.key}
                value={formValues[setting.key] || ""}
                onChange={(url) => updateValue(setting.key, url)}
                folder="brand"
                label={setting.label || setting.key}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">General Settings</h3>
        {textSettings.length === 0 ? (
          <p className="text-sm text-gray-500">No text settings found. Please ensure the database schema has been initialized.</p>
        ) : (
          <div className="space-y-4">
            {textSettings.map((setting) => (
              <div key={setting.key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {setting.label || setting.key}
                </label>
                {setting.key === "address" || setting.key === "meta_description" ? (
                  <textarea
                    value={formValues[setting.key] || ""}
                    onChange={(e) => updateValue(setting.key, e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm text-gray-900 resize-none"
                  />
                ) : (
                  <input
                    type="text"
                    value={formValues[setting.key] || ""}
                    onChange={(e) => updateValue(setting.key, e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7A75] focus:border-[#0B7A75] outline-none text-sm text-gray-900"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
