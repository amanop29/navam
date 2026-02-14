-- ============================================================
-- NAVAM ADMIN PANEL — Additional Schema
-- Run this AFTER the main schema.sql
-- ============================================================

-- ============================================================
-- 11. SITE SETTINGS (Key-Value store for global config)
-- ============================================================
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  type TEXT DEFAULT 'text' CHECK (type IN ('text', 'image', 'json', 'boolean')),
  label TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed default settings
INSERT INTO site_settings (key, value, type, label) VALUES
  ('site_name', 'Navam Sunil Jewellers', 'text', 'Site Name'),
  ('site_tagline', 'Crafting Heritage into Gold', 'text', 'Site Tagline'),
  ('logo_url', '', 'image', 'Logo'),
  ('logo_dark_url', '', 'image', 'Logo (Dark/Footer)'),
  ('favicon_url', '', 'image', 'Favicon'),
  ('contact_email', 'info@navamjewellers.com', 'text', 'Contact Email'),
  ('contact_phone', '+91 98765 43210', 'text', 'Contact Phone'),
  ('address', 'Heritage Lane, Jewellers Street, Mumbai 400001', 'text', 'Address'),
  ('facebook_url', '', 'text', 'Facebook URL'),
  ('instagram_url', '', 'text', 'Instagram URL'),
  ('twitter_url', '', 'text', 'Twitter/X URL'),
  ('youtube_url', '', 'text', 'YouTube URL'),
  ('whatsapp_number', '', 'text', 'WhatsApp Number'),
  ('meta_description', 'Premium gold jewellery crafted with exquisite craftsmanship since 1964.', 'text', 'Meta Description')
ON CONFLICT (key) DO NOTHING;

-- ============================================================
-- 12. HOMEPAGE BANNERS
-- ============================================================
CREATE TABLE IF NOT EXISTS homepage_banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT,
  image_url TEXT NOT NULL,
  mobile_image_url TEXT,
  link_url TEXT DEFAULT '/collections',
  link_text TEXT DEFAULT 'Explore Collections',
  overlay_opacity DECIMAL(3,2) DEFAULT 0.5,
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed default banner
INSERT INTO homepage_banners (title, subtitle, image_url, sort_order) VALUES
  ('Unleash the shining beauty within.', 'Heritage · Craftsmanship', 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=1200&fit=crop&q=80', 1)
ON CONFLICT DO NOTHING;

-- ============================================================
-- 13. BOARD MEMBERS
-- ============================================================
CREATE TABLE IF NOT EXISTS board_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed default board members
INSERT INTO board_members (name, role, bio, image_url, sort_order) VALUES
  ('Mr. Sunil Navam', 'Chairman & Managing Director', 'Visionary leader with 40+ years in the gold jewellery industry. Under his leadership, the company has grown from a single showroom to a national brand.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop&q=80', 1),
  ('Mrs. Priya Navam', 'Executive Director – Design', 'Award-winning jewellery designer with a passion for blending heritage motifs with contemporary aesthetics. Head of the Tarini collection.', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=300&fit=crop&q=80', 2),
  ('Mr. Arjun Mehta', 'Independent Director', 'Former CFO of a major banking institution. Brings 30 years of financial expertise and corporate governance experience.', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=300&fit=crop&q=80', 3),
  ('Dr. Anita Sharma', 'Independent Director', 'Renowned gemologist and professor. Advisor to the Gem & Jewellery Export Promotion Council.', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=300&fit=crop&q=80', 4),
  ('Mr. Raghav Kapoor', 'Chief Financial Officer', 'Chartered Accountant with expertise in luxury retail finance. Led the company through its successful IPO journey.', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=300&fit=crop&q=80', 5),
  ('Ms. Kavita Reddy', 'Company Secretary', 'Expert in corporate compliance and governance. Ensures adherence to SEBI regulations and listing requirements.', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=300&fit=crop&q=80', 6)
ON CONFLICT DO NOTHING;

-- ============================================================
-- RLS for new tables
-- ============================================================
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE homepage_banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE board_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read site_settings" ON site_settings FOR SELECT USING (TRUE);
CREATE POLICY "Public read homepage_banners" ON homepage_banners FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Public read board_members" ON board_members FOR SELECT USING (is_active = TRUE);

-- Triggers
CREATE TRIGGER set_updated_at_site_settings
  BEFORE UPDATE ON site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_homepage_banners
  BEFORE UPDATE ON homepage_banners FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_board_members
  BEFORE UPDATE ON board_members FOR EACH ROW EXECUTE FUNCTION update_updated_at();
