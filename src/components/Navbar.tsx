"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/sdks", label: "SDKs" },
  { path: "/developers", label: "Developer Portal" },
  { path: "/documentation", label: "Docs" },
  { path: "/downloads", label: "Downloads" },
  { path: "/changelog", label: "Changelog" },
  { path: "/roadmap", label: "Roadmap" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-navbar py-3 shadow-sm shadow-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[95%] xl:max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-foreground flex items-center gap-1"
        >
          <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
            Badri Gautam
          </span>
          <span className="text-foreground/80 font-light text-sm px-1.5 py-0.5 rounded-md bg-primary/10 border border-primary/20">
            Labs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path} className="relative">
                  <Link
                    href={item.path}
                    className={`text-xs font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                      isActive ? "text-primary font-bold" : "text-foreground/75"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeDot"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-border" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-muted text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4.5 h-4.5 text-amber-400" />
            ) : (
              <Moon className="w-4.5 h-4.5 text-indigo-950 dark:text-indigo-400" />
            )}
          </button>
        </nav>

        {/* Mobile Navbar Controls */}
        <div className="flex items-center gap-3 xl:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-950 dark:text-indigo-400" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-muted text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden glass-navbar overflow-hidden border-t border-border mt-4"
          >
            <nav className="max-w-6xl mx-auto px-6 py-6">
              <ul className="flex flex-col gap-5">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-base font-semibold block py-2 transition-colors hover:text-primary ${
                          isActive ? "text-primary" : "text-foreground/80"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
