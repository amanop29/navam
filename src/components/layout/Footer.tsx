import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

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
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer */}
      <div className="bg-brown-800 border-t border-white/5">
        <div className="container-luxury py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif font-bold gold-text">
                  Navam Sunil Jewellers
                </span>
              </div>
              <p className="text-brown-100/50 text-sm leading-relaxed max-w-sm">
                Let your Jewellery light up the season. Premium gold jewellery
                crafted with exquisite craftsmanship since 1964.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brown-100/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brown-100/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brown-100/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-brown-50 uppercase tracking-wider mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-brown-100/50 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Investors Links */}
            <div>
              <h4 className="text-sm font-semibold text-brown-50 uppercase tracking-wider mb-5">
                Investors
              </h4>
              <ul className="space-y-3">
                {footerLinks.investors.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-brown-100/50 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-brown-50 uppercase tracking-wider mb-5">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-brown-100/50 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Row */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-brown-100/40">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Mumbai, India
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@navamjewellers.com
              </span>
            </div>
            <p className="text-sm text-brown-100/30">
              © 2026 Navam Sunil Jewellers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
