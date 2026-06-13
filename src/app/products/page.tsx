"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, BookOpen, ArrowRight, ArrowLeft, Layers, Cpu, ShieldCheck, Smartphone, Check } from "lucide-react";
import { versionRegistry } from "@/data/versions";

// Extract applications from registry
const products = versionRegistry.filter(v => v.type === "app");

// Features mapping for display
const featuresMap: { [key: string]: string[] } = {
  greatgoga: [
    "Gamified offerwalls with verification receivers",
    "Secure local rewards cache storage logs",
    "Attribution signals synced via lightweight gRPC"
  ],
  "bhagavad-gita": [
    "Offline Sanskrit and English scripture db",
    "Sub-30ms indexed verse SQL queries",
    "Material 3 side-by-side commentary views"
  ],
  truvideo: [
    "CameraX preview surfaces and framing rules",
    "Dual-screen Presentation Mode overlay support",
    "On-device upload telemetry socket logs"
  ],
  "nckit-demo": [
    "AI ambient noise cancellation filters",
    "Original vs cleaned audio waves visualizer",
    "Cafeteria, traffic, and fan hum preset filters"
  ]
};

// Logo and mockup configuration matching IDs
const mockupConfig: { [key: string]: { logo: string; gradient: string; previewText: string } } = {
  greatgoga: { logo: "GG", gradient: "from-indigo-600 to-violet-600", previewText: "Offerwall Active\nReward Points: 550\nUser verified ✓" },
  "bhagavad-gita": { logo: "BG", gradient: "from-amber-500 to-orange-600", previewText: "Chapter 2 - Verse 47\nAction is your duty\nOffline cache verified" },
  truvideo: { logo: "TV", gradient: "from-rose-500 to-pink-600", previewText: "Camera Ready\n1080p 60FPS\nTelemetry logging..." },
  "nckit-demo": { logo: "NC", gradient: "from-cyan-500 to-blue-600", previewText: "Audio Stream: 48kHz\nNoise Suppressed: -24dB\nWaveform clean ✓" }
};

export default function ProductsCatalog() {
  const getProductUrl = (id: string) => {
    if (id === "truvideo") return "/products/truvideo-demo";
    if (id === "nckit-demo") return "/products/nckit-demo";
    return `/products/${id}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative min-h-screen">
      {/* Background aurora glows */}
      <div className="absolute top-12 left-12 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Page Header */}
      <div className="space-y-4 mb-20 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
          Android Products Catalog
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
          Discover native Android applications and test sandbox environments showcasing our flagship media pipelines and developer tooling.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {products.map((prod, idx) => {
          const mock = mockupConfig[prod.id];
          const features = featuresMap[prod.id] || [];
          const detailUrl = getProductUrl(prod.id);

          return (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card/10 hover:border-primary/30 hover:bg-card/25 transition-all p-8 relative overflow-hidden"
            >
              {/* Radial glow background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <div className="space-y-6">
                {/* Header section with logos & version info */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mock.gradient} text-white font-black text-xl flex items-center justify-center shadow-lg`}>
                    {mock.logo}
                  </div>
                  <div className="flex gap-2">
                    <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border ${
                      prod.status === "Released"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                    }`}>
                      {prod.status}
                    </span>
                    <span className="text-[10px] px-2.5 py-1 rounded-full font-bold bg-muted border border-border text-muted-foreground font-mono">
                      {prod.version}
                    </span>
                  </div>
                </div>

                {/* Product Name & Description */}
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {prod.name}
                  </h2>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {prod.changelog.added?.[0] || "High-performance native Android application engineered for efficiency."}
                  </p>
                </div>

                {/* Premium Device Mockup Previews inside CSS frame */}
                <div className="relative h-48 rounded-2xl bg-zinc-950 border border-border/80 p-4 overflow-hidden flex flex-col justify-between font-mono text-[9px] text-zinc-400 group-hover:border-primary/20 transition-all">
                  {/* Subtle terminal-like visual decoration */}
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[8px] text-muted-foreground">DEVICE PREVIEW ({prod.id}.apk)</span>
                  </div>

                  <div className="flex-grow flex items-center justify-center whitespace-pre-line text-center py-2 leading-relaxed text-zinc-300">
                    {mock.previewText}
                  </div>

                  <div className="border-t border-border/40 pt-2 flex items-center justify-between text-[8px] text-muted-foreground">
                    <span>Target: Android API 34+</span>
                    <span>MD5: verified</span>
                  </div>
                </div>

                {/* Key Features bullet summary */}
                <div className="space-y-2">
                  <h3 className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Key Features</h3>
                  <div className="space-y-1.5">
                    {features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed font-light">
                        <div className="p-0.5 mt-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-8 border-t border-border/40 mt-8">
                <a
                  href={prod.downloadUrl}
                  className="flex-grow px-5 py-3 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK</span>
                </a>
                <Link
                  href={detailUrl}
                  className="px-5 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
