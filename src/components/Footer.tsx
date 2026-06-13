"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-16 border-t border-border bg-card/20 relative mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left Column Logo / tagline */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5"
          >
            <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
              Badri Gautam
            </span>
            <span className="text-foreground/80 font-light text-xs px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              Labs
            </span>
          </Link>
          <p className="text-xs text-muted-foreground max-w-sm font-light leading-relaxed">
            Building Powerful Android Applications, SDKs & Media Technologies. Focus areas include noise cancellation, media processing, camera integration, and enterprise mobility.
          </p>
        </div>

        {/* Center/Right Quick Nav links */}
        <div className="md:col-span-5 grid grid-cols-2 gap-8 w-full">
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">Platform</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { path: "/", label: "Home" },
                { path: "/products", label: "Products" },
                { path: "/sdks", label: "SDK Marketplace" },
                { path: "/developers", label: "Developer Portal" },
                { path: "/documentation", label: "Documentation" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">Resources</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { path: "/downloads", label: "Downloads Center" },
                { path: "/changelog", label: "Changelog" },
                { path: "/roadmap", label: "Roadmap" },
                { path: "/about", label: "About Labs" },
                { path: "/contact", label: "Contact Support" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Social Links & scroll to top */}
        <div className="md:col-span-2 flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/badri-gautam/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-border/40 text-center">
        <p className="text-[10px] text-muted-foreground font-light">
          &copy; {new Date().getFullYear()} Badri Gautam Labs. All rights reserved. Built with Next.js, Tailwind CSS and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
