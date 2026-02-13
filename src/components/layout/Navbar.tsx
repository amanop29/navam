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
    setExpandedMobileItems(prev =>
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "rounded-[1.5rem] backdrop-blur-3xl border border-white/20 transition-all duration-500",
          scrolled
            ? "bg-brown-800/70 shadow-2xl shadow-black/40"
            : "bg-brown-800/50 shadow-xl shadow-black/20"
        )}
      >
        <div className="container-luxury">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rotate-45 bg-gradient-to-br from-gold via-yellow-600 to-gold rounded-sm shadow-lg shadow-gold/50 group-hover:shadow-gold/70 transition-all duration-300"></div>
                  <div className="absolute inset-0 w-8 h-8 rotate-45 bg-gradient-to-tl from-transparent via-white/30 to-transparent rounded-sm"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl font-serif font-bold italic gold-text tracking-tight leading-none">
                    Navam Sunil
                  </span>
                  <span className="text-[10px] lg:text-xs text-brown-100/60 tracking-[0.2em] uppercase font-light">
                    Jewellers
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium text-brown-100/80 hover:text-gold transition-colors duration-300 flex items-center gap-1"
                    )}
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
                        className="absolute top-full left-0 mt-2 w-56 backdrop-blur-xl bg-brown-800/80 border border-white/20 shadow-2xl shadow-black/50 p-2 rounded-2xl ring-1 ring-white/10"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-brown-100/80 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-200"
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
                className="gold-button text-sm px-6 py-2.5 rounded-full"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-brown-100/80 hover:text-gold transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/5 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gold/20 scrollbar-track-transparent"
            >
              <div className="container-luxury py-6 space-y-0 pb-20">
                {navigation.map((item, index) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleMobileItem(item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-brown-100/80 hover:text-gold transition-colors"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-300",
                              expandedMobileItems.includes(item.name) && "rotate-180"
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
                                    className="block px-4 py-2 text-sm text-brown-100/50 hover:text-gold transition-colors"
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
                        className="block px-4 py-3 text-lg font-medium text-brown-100/80 hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                    {index < navigation.length - 1 && (
                      <div className="mx-4 my-1 border-t border-white/5" />
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    href="/appointment"
                    onClick={() => setIsOpen(false)}
                    className="gold-button block text-center text-sm px-6 py-3 rounded-full w-full"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
