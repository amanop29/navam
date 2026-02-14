"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useSettings } from "@/lib/settings-context";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Manufacture", href: "/manufacture" },
    { name: "Collections", href: "/collections" },
  ],
  investors: [
    { name: "Board of Directors", href: "/investors/board" },
    { name: "Annual Reports", href: "/investors/reports" },
    { name: "AGM Notices", href: "/investors/agm" },
    { name: "IPO", href: "/investors/ipo" },
    { name: "Credit Ratings", href: "/investors/ratings" },
    { name: "Charter & Policies", href: "/investors/charters" },
    { name: "Investor Contact", href: "/investors/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal" },
    { name: "Terms & Conditions", href: "/legal" },
  ],
};

export function Footer() {
  const settings = useSettings();
  return (
    <footer className="relative overflow-hidden">
      <div className="bg-white border-t border-cream-300">
        <div className="container-luxury py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif font-bold text-primary">
                  {settings.site_name || "Navam Sunil Jewellers"}
                </span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                {settings.site_tagline || "Crafting Heritage into Gold"}
                <br />
                Premium gold jewellery crafted with exquisite craftsmanship since 1964.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {settings.instagram_url && (
                  <a
                    href={settings.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-cream-300 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {settings.facebook_url && (
                  <a
                    href={settings.facebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-cream-300 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
                {settings.twitter_url && (
                  <a
                    href={settings.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-cream-300 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Investors Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
                Investors
              </h4>
              <ul className="space-y-3">
                {footerLinks.investors.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Row */}
          <div className="mt-16 pt-8 border-t border-cream-300 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
              {settings.address && (
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {settings.address}
                </span>
              )}
              {settings.contact_phone && (
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {settings.contact_phone}
                </span>
              )}
              {settings.contact_email && (
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> {settings.contact_email}
                </span>
              )}
            </div>
            <p className="text-sm text-neutral-400">
              © 2026 {settings.site_name || "Navam Sunil Jewellers"}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
