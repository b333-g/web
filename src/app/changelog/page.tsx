"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, GitBranch, Terminal, Calendar, ArrowUpRight, CheckCircle2, AlertCircle, RefreshCw, Layers } from "lucide-react";
import { versionRegistry } from "@/data/versions";

// Extract items with changelog records
const changelogs = versionRegistry.filter(item => 
  item.changelog && (
    (item.changelog.added && item.changelog.added.length > 0) ||
    (item.changelog.changed && item.changelog.changed.length > 0) ||
    (item.changelog.fixed && item.changelog.fixed.length > 0) ||
    (item.changelog.deprecated && item.changelog.deprecated.length > 0)
  )
);

export default function ChangelogPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "app" | "sdk">("all");

  const filteredChangelogs = activeFilter === "all"
    ? changelogs
    : changelogs.filter(item => item.type === activeFilter);

  const getBadgeClass = (type: string) => {
    return type === "sdk" 
      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
      : "bg-violet-500/10 border-violet-500/20 text-violet-400";
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Product Changelogs</h1>
        <p className="text-sm text-muted-foreground font-light max-w-xl">
          Track version releases, feature additions, core modifications, and JNI memory fixes across the BadriTech Platform.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2.5 mb-10 justify-center md:justify-start">
        {[
          { id: "all", label: "All Releases" },
          { id: "sdk", label: "SDK Version History" },
          { id: "app", label: "Product Releases" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              activeFilter === tab.id
                ? "border-primary/20 bg-primary/10 text-primary shadow-sm"
                : "border-border bg-card/25 text-foreground hover:bg-muted/40"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Timeline Feed */}
      <div className="relative border-l-2 border-border pl-8 space-y-12 ml-4">
        {filteredChangelogs.map((item, idx) => (
          <div key={item.id} id={item.id} className="relative group space-y-4 scroll-mt-28">
            
            {/* Outer visual node circle */}
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary flex items-center justify-center group-hover:scale-110 transition-transform" />

            {/* Category / Date info */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
              <span className={`px-3 py-1 border font-bold rounded-full text-[10px] uppercase tracking-wider ${getBadgeClass(item.type)}`}>
                {item.type === "sdk" ? "SDK Release" : "Product Release"}
              </span>
              <span className="text-muted-foreground font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span className="font-mono">{item.releaseDate}</span>
              </span>
              <span className="px-2 py-0.5 rounded font-mono text-[9px] bg-muted border border-border text-muted-foreground uppercase font-bold">
                {item.releaseChannel} track
              </span>
            </div>

            {/* Title & Version tags */}
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {item.name} – {item.version}
              </h2>
            </div>

            {/* Structured Changelog Blocks: Added, Changed, Fixed, Deprecated */}
            <div className="space-y-5 p-6 rounded-2xl border border-border bg-card/10 glass-panel">
              
              {/* Added */}
              {item.changelog.added && item.changelog.added.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Added</span>
                  </div>
                  <div className="space-y-1.5 pl-5">
                    {item.changelog.added.map((log, lIdx) => (
                      <p key={lIdx} className="text-xs text-muted-foreground font-light leading-relaxed">
                        • {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Changed */}
              {item.changelog.changed && item.changelog.changed.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[9px] font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                    <RefreshCw className="w-3.5 h-3.5 text-primary" />
                    <span>Changed</span>
                  </div>
                  <div className="space-y-1.5 pl-5">
                    {item.changelog.changed.map((log, lIdx) => (
                      <p key={lIdx} className="text-xs text-muted-foreground font-light leading-relaxed">
                        • {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Fixed */}
              {item.changelog.fixed && item.changelog.fixed.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[9px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Fixed</span>
                  </div>
                  <div className="space-y-1.5 pl-5">
                    {item.changelog.fixed.map((log, lIdx) => (
                      <p key={lIdx} className="text-xs text-muted-foreground font-light leading-relaxed">
                        • {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Deprecated */}
              {item.changelog.deprecated && item.changelog.deprecated.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[9px] font-bold text-red-400 uppercase tracking-widest flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                    <span>Deprecated</span>
                  </div>
                  <div className="space-y-1.5 pl-5">
                    {item.changelog.deprecated.map((log, lIdx) => (
                      <p key={lIdx} className="text-xs text-muted-foreground font-light leading-relaxed">
                        • {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Links and CTA */}
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
              <Link href="/downloads" className="text-primary hover:underline flex items-center gap-1 cursor-pointer">
                <span>Download Build</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-border">|</span>
              <Link href={`/documentation?cat=${item.id === "nckit" || item.id === "nckit-sdk" ? "nckit" : "publishersdk"}`} className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 cursor-pointer">
                <Terminal className="w-4 h-4" />
                <span>Integration Reference</span>
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
