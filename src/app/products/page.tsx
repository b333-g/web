"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Download, 
  Layers, 
  ChevronRight, 
  ShieldCheck, 
  Smartphone, 
  BookOpen, 
  HelpCircle,
  Clock,
  ArrowLeft,
  Check
} from "lucide-react";

const products = [
  {
    id: "greatgoga",
    name: "GreatGoga",
    logo: "GG",
    status: "Released",
    version: "v2.4.0",
    releaseDate: "September 2024",
    tagline: "Gamified reward and interactive task monetization ecosystem.",
    overview: "GreatGoga is a consumer-facing gamified platform designed to run lightweight monetization activities, referral payouts, and dynamic advertisements. Built on a resilient local caching layout to guarantee offline progress reporting.",
    features: [
      "Dynamic Offerwall integration utilizing custom ad-attribution receivers",
      "Gamified task rewards engine with local secure storage verification",
      "Attribution verification hooks running through light gRPC synchronization",
      "Seamless Google Auth and Firebase Authentication flows",
      "Resilient offline-first synchronization using Room DB and WorkManager"
    ],
    faqs: [
      { q: "How are referrals attribution tracked?", a: "Referrals are attibuted using dynamic broadcasts tracking deep links during post-install app launches." },
      { q: "What is the network overhead?", a: "gRPC buffers payloads locally to compress calls, averaging under 12KB per sync session." }
    ],
    versionHistory: [
      { ver: "v2.4.0", date: "Sept 2024", note: "Integrated gRPC support and Room encryption." },
      { ver: "v2.2.0", date: "June 2024", note: "Redesigned UI with full Jetpack Compose canvas support." }
    ]
  },
  {
    id: "bhagavad-gita",
    name: "Bhagavad Gita App",
    logo: "BG",
    status: "Released",
    version: "v1.8.0",
    releaseDate: "March 2023",
    tagline: "Offline Sanskrit-English scripture rendering platform.",
    overview: "A lightweight, performance-tuned application rendering structured text database contents offline. Achieves sub-30ms text lookup times across all chapters using optimized index queries.",
    features: [
      "Resilient fully offline reading model with SQLite file attachments",
      "Verse search engine utilizing local index tokenizers for high speed",
      "Custom layout selectors (Sanskrit, English Translation, Commentary)",
      "Lightweight styling templates designed in strict compliance with Material 3 guidelines",
      "Low power background thread reading progress saver logs"
    ],
    faqs: [
      { q: "Does the app require active network access?", a: "No, the entire Sanskrit text database is embedded directly into the asset database." },
      { q: "Are there audio recitations included?", a: "Audio recitations require streaming, but text and notes remain 100% offline." }
    ],
    versionHistory: [
      { ver: "v1.8.0", date: "Mar 2023", note: "Optimized indexed SQL lookups and added text sharing tags." },
      { ver: "v1.5.0", date: "Nov 2022", note: "Initial offline database release with verse markers." }
    ]
  },
  {
    id: "truvideo",
    name: "TruVideo Demo App",
    logo: "TV",
    status: "Active Development",
    version: "v2.1.2",
    releaseDate: "Active R&D",
    tagline: "Enterprise mobile SDK video capture demo bed.",
    overview: "A demonstration testing sandbox configured to highlight TruVideo platform video camera configurations, local compression parameters, and workflow integrations.",
    features: [
      "Custom CameraX preview surface handling variable aspect ratios",
      "Dual screen Presentation Mode layout for enterprise product reviews",
      "Direct API video payload upload pipelines over secure SSL sockets",
      "Automatic video framing validation and local telemetry report generation",
      "Low overhead on-screen developer console logging active buffers"
    ],
    faqs: [
      { q: "What camera APIs does the demo app utilize?", a: "The app targets Google's CameraX API package to ensure stability across 95% of devices." },
      { q: "Is registration required to test video uploading?", a: "Yes, connection tokens from the TruVideo admin console are needed for upload tests." }
    ],
    versionHistory: [
      { ver: "v2.1.2", date: "Jan 2026", note: "Added presentation modes and custom preview stabilization." },
      { ver: "v2.0.0", date: "Oct 2025", note: "Initial demonstration build with camera control panels." }
    ]
  },
  {
    id: "nckit-demo",
    name: "NCKit Audio Demo",
    logo: "NC",
    status: "Active Development",
    version: "v1.0.0-beta",
    releaseDate: "Active R&D",
    tagline: "AI Noise Cancellation and Speech Enhancement client sandbox.",
    overview: "NCKit Audio Demo allows mobile developers to capture real-time microphone buffers, pass them through the NCKit AI noise cancellation library, and review the waveform comparison results.",
    features: [
      "Interactive audio record, play, and clean processing interface",
      "Live waveform visualizer plotting original vs filtered frequency bands",
      "Preset environment noise modules (Cafeteria, Traffic, Fan Humming)",
      "Exportable output files containing raw and noise-cancelled wave tracks",
      "Direct latency metrics display tracking hardware audio pathways"
    ],
    faqs: [
      { q: "Does processing run on the cloud?", a: "No, NCKit processes raw audio directly on the device using native C/C++ audio pipelines." },
      { q: "What is the processing latency?", a: "Averaging under 15ms buffer delay on mid-range Android hardware." }
    ],
    versionHistory: [
      { ver: "v1.0.0-beta3", date: "Feb 2026", note: "Optimized NDK library sizes and enhanced speech gains." },
      { ver: "v1.0.0-beta1", date: "Dec 2025", note: "Initial testing platform release with visual frequency waves." }
    ]
  }
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative">
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Products Catalog</h1>
        <p className="text-sm text-muted-foreground max-w-xl font-light">
          Review details, feature specifications, and APK builds of the mobile products and demonstrative tools developed across BG Labs.
        </p>
      </div>

      {/* Sidebar Selector layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground pl-3 mb-2">Available Products</h2>
          {products.map((prod) => {
            const isActive = selectedProduct.id === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isActive 
                    ? "border-primary/30 bg-primary/5 text-primary shadow-sm" 
                    : "border-border bg-card/25 text-foreground hover:bg-muted/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg font-black text-xs flex items-center justify-center ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {prod.logo}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{prod.name}</div>
                    <div className="text-[10px] text-muted-foreground font-mono">{prod.version}</div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "rotate-90 text-primary" : "text-muted-foreground"}`} />
              </button>
            );
          })}
        </div>

        {/* Product Details Panel */}
        <div className="lg:col-span-8 p-8 rounded-3xl border border-border bg-card/20 glass-panel space-y-8 relative">
          
          {/* Top Panel Brand */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/40">
            <div className="space-y-1">
              <span className={`text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider border ${
                selectedProduct.status === "Released" 
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  : "bg-amber-500/10 border-amber-500/20 text-amber-400"
              }`}>
                {selectedProduct.status}
              </span>
              <h2 className="text-2xl font-bold text-foreground pt-2">{selectedProduct.name}</h2>
              <p className="text-xs text-primary font-medium">{selectedProduct.tagline}</p>
            </div>
            <div className="text-right text-xs">
              <div className="text-muted-foreground font-light">LATEST BUILD</div>
              <div className="font-bold text-foreground font-mono">{selectedProduct.version}</div>
              <div className="text-[10px] text-muted-foreground font-light">{selectedProduct.releaseDate}</div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Overview</h3>
            <p className="text-sm text-foreground/80 leading-relaxed font-light">{selectedProduct.overview}</p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Key Architecture Features</h3>
            <div className="space-y-2">
              {selectedProduct.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed font-light">
                  <div className="p-0.5 mt-0.5 rounded-full bg-primary/10 text-primary">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4 pt-4 border-t border-border/40">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span>Technical FAQ</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProduct.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-border/60 bg-muted/20 space-y-1">
                  <h4 className="text-xs font-bold text-foreground">Q: {faq.q}</h4>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-border/40">
            <Link
              href="/downloads"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download APK Installer</span>
            </Link>
            <Link
              href="/documentation"
              className="px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Integration Docs</span>
            </Link>
          </div>

          {/* Version log preview */}
          <div className="pt-4 space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Change History</span>
            </h4>
            <div className="space-y-1.5">
              {selectedProduct.versionHistory.map((item, idx) => (
                <div key={idx} className="flex justify-between text-[11px] text-muted-foreground font-light pl-5 relative">
                  <div className="absolute left-1.5 top-1.5 w-1 h-1 rounded-full bg-border" />
                  <span>{item.ver} – {item.note}</span>
                  <span className="font-mono text-[10px] text-muted-foreground/60">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
