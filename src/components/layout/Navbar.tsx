"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Collections",
    href: "/collections",
    children: [
      { name: "Aradhya", href: "/collections/aradhya" },
      { name: "Devyani", href: "/collections/devyani" },
      { name: "Tarini", href: "/collections/tarini" },
    ],
  },
  { name: "Manufacture", href: "/manufacture" },
  {
    name: "Investors",
    href: "/investors",
    children: [
      { name: "Board of Directors", href: "/investors/board" },
      { name: "Annual Reports", href: "/investors/reports" },
      { name: "AGM Notices", href: "/investors/agm" },
      { name: "IPO", href: "/investors/ipo" },
      { name: "Credit Ratings", href: "/investors/ratings" },
      { name: "Charter & Policies", href: "/investors/charters" },
      { name: "Investor Contact", href: "/investors/contact" },
    ],
  },
  { name: "CSR", href: "/csr" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileItem = (itemName: string) => {
    setExpandedMobileItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      {/* Background gradient for visibility - green, black, and gold */}
      <div className="absolute inset-0 pointer-events-none" style={{ height: '220px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0B7A75]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C4A35A]/10 to-transparent" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "rounded-2xl border transition-all duration-500 relative z-10",
          scrolled
            ? "bg-black/40 backdrop-blur-2xl backdrop-saturate-150 border-[#0B7A75]/60 shadow-[0_4px_30px_rgba(11,122,117,0.3)]"
            : "bg-black/25 backdrop-blur-xl backdrop-saturate-125 border-[#0B7A75]/40 shadow-[0_4px_24px_rgba(11,122,117,0.2)]"
        )}
      >
        <div className="container-luxury">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img 
                src="/logo.png" 
                alt="Navam Sunil Jewellers" 
                className="h-20 lg:h-24 w-auto brightness-110 drop-shadow-[0_0_12px_rgba(11,122,117,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(11,122,117,0.8)] transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-white brightness-110 hover:text-white hover:drop-shadow-[0_0_8px_rgba(11,122,117,0.8)] transition-all duration-300 flex items-center gap-1"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="w-3 h-3 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-black/50 backdrop-blur-2xl backdrop-saturate-150 border border-[#0B7A75]/50 shadow-[0_8px_32px_rgba(11,122,117,0.25)] p-2 rounded-xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/appointment"
                className="bg-white text-[#0B7A75] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_40px_rgba(11,122,117,0.4)] border border-white/80 transition-all duration-300"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white brightness-110 hover:text-white hover:drop-shadow-[0_0_8px_rgba(11,122,117,0.8)] transition-all p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>

      </motion.header>

      {/* Mobile Menu — outside header so backdrop-blur works against page content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-2 mx-0 rounded-2xl border border-[#0B7A75]/50 max-h-[calc(100vh-100px)] overflow-y-auto shadow-[0_8px_40px_rgba(11,122,117,0.3)]"
            style={{
              background: "rgba(0, 0, 0, 0.45)",
              backdropFilter: "blur(40px) saturate(1.8)",
              WebkitBackdropFilter: "blur(40px) saturate(1.8)",
            }}
          >
            <div className="px-5 md:px-8 py-6 space-y-0 pb-8">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleMobileItem(item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-white brightness-110 hover:text-white hover:drop-shadow-[0_0_8px_rgba(11,122,117,0.8)] transition-all"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            expandedMobileItems.includes(item.name) &&
                              "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedMobileItems.includes(item.name) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-8 space-y-1 pb-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:drop-shadow-[0_0_6px_rgba(11,122,117,0.7)] transition-all"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-white brightness-110 hover:text-white hover:drop-shadow-[0_0_8px_rgba(11,122,117,0.8)] transition-all"
                    >
                      {item.name}
                    </Link>
                  )}
                  {index < navigation.length - 1 && (
                    <div className="mx-4 my-1 border-t border-white/15" />
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="bg-white/25 backdrop-blur-md border-2 border-white/50 text-white block text-center text-sm px-6 py-3 rounded-full w-full hover:bg-white/35 shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(0,0,0,0.2)] transition-all duration-300"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
