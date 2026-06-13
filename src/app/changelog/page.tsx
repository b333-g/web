"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, GitBranch, Terminal, Calendar, ArrowUpRight } from "lucide-react";

const changelogs = [
  {
    version: "NCKit SDK v1.0.0-beta3",
    date: "February 20, 2026",
    category: "SDK Updates",
    author: "Badri Prasad Gautam",
    tags: ["Audio Processing", "Speech Enhancement", "Denoising"],
    changes: [
      "Initial Public Beta Release of Noise Cancellation core library bundles.",
      "Optimized speech formant enhancement grids inside native C++ audio pathways.",
      "Added support for long-duration audio stream file cleanup pipelines.",
      "Integrated dynamic channel resolution (mono, stereo configurations) matching hardware inputs."
    ]
  },
  {
    version: "TruVideo Demo v2.1.2",
    date: "January 15, 2026",
    category: "Application Releases",
    author: "Badri Prasad Gautam",
    tags: ["CameraX", "Video Splicing", "UI Canvas"],
    changes: [
      "Integrated secure presentation overlay mode for dual-screen feedback flows.",
      "Stabilized preview captures on camera initialization sequences.",
      "Fixed background sync threads caching video frames prior to uploads.",
      "Enhanced custom on-screen telemetry log metrics consoles."
    ]
  },
  {
    version: "PublisherSDK v1.5.0",
    date: "September 18, 2024",
    category: "SDK Updates",
    author: "Badri Prasad Gautam",
    tags: ["Attribution", "Ad-tech", "gRPC"],
    changes: [
      "Migrated sync communication layers to secure gRPC transport protocols.",
      "Optimized shared preferences database caching lookups to run under 10ms.",
      "Added install referrer verification filters monitoring Google Play callback bundles."
    ]
  }
];

export default function ChangelogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative">
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
          Track versions, feature additions, performance optimizations, and native fixes across BG Mobile Labs releases.
        </p>
      </div>

      {/* Timeline Feed */}
      <div className="relative border-l-2 border-border pl-8 space-y-12 ml-4">
        {changelogs.map((item, idx) => (
          <div key={idx} className="relative group space-y-4">
            
            {/* outer visual node circle */}
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary flex items-center justify-center" />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-bold rounded-full">
                {item.category}
              </span>
              <span className="text-muted-foreground font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {item.version}
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* List changes */}
            <div className="space-y-2 pl-4">
              {item.changes.map((change, cIdx) => (
                <div key={cIdx} className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-light list-item list-disc pl-1">
                  {change}
                </div>
              ))}
            </div>

            {/* Support CTA link */}
            <div className="pt-4 flex items-center gap-4 text-xs font-semibold">
              <Link href="/downloads" className="text-primary hover:underline flex items-center gap-1">
                <span>Get This Release</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-border">|</span>
              <Link href="/documentation" className="text-muted-foreground hover:text-foreground flex items-center gap-1.5">
                <Terminal className="w-4 h-4" />
                <span>Integration Docs</span>
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
