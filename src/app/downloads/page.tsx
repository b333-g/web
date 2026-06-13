"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Smartphone, 
  Cpu, 
  FileText, 
  Filter, 
  CheckCircle,
  Clock,
  Layers,
  ArrowRight
} from "lucide-react";

const downloadCategories = [
  { id: "all", label: "All Packages", icon: Layers },
  { id: "apps", label: "APK Applications", icon: Smartphone },
  { id: "sdks", label: "SDK Binaries", icon: Cpu },
  { id: "resources", label: "Developer Guides", icon: FileText }
];

const packages = [
  // APK Applications
  {
    name: "GreatGoga App",
    category: "apps",
    version: "v2.4.0",
    date: "September 24, 2024",
    size: "14.2 MB",
    type: "APK Installer",
    status: "Production Build",
    desc: "Direct installer for the complete GreatGoga reward-based gamified client.",
    fileName: "greatgoga-v2.4.0.apk"
  },
  {
    name: "Bhagavad Gita Offline App",
    category: "apps",
    version: "v1.8.0",
    date: "March 12, 2023",
    size: "8.5 MB",
    type: "APK Installer",
    status: "Stable Build",
    desc: "Fully standalone reading client with SQLite databases loaded inside assets.",
    fileName: "bhagavad-gita-v1.8.0.apk"
  },
  {
    name: "TruVideo SDK Demo Bed",
    category: "apps",
    version: "v2.1.2",
    date: "January 15, 2026",
    size: "18.1 MB",
    type: "APK Installer",
    status: "Active R&D",
    desc: "Developer test-sandbox containing CameraX preview stabilizer panels.",
    fileName: "truvideo-demo-v2.1.2.apk"
  },
  {
    name: "NCKit Audio Enhancer Demo",
    category: "apps",
    version: "v1.0.0-beta",
    date: "December 08, 2025",
    size: "9.2 MB",
    type: "APK Installer",
    status: "Active R&D",
    desc: "Audio capture client displaying waveforms and noise filtering ratios.",
    fileName: "nckit-demo-v1.0.0-beta.apk"
  },
  
  // SDKs
  {
    name: "NCKit Noise Cancellation Binary",
    category: "sdks",
    version: "v1.0.0-beta3",
    date: "February 20, 2026",
    size: "1.2 MB",
    type: "AAR (Archive)",
    status: "Active R&D",
    desc: "Includes armeabi-v7a, arm64-v8a JNI shared libraries for audio filters.",
    fileName: "nckit-sdk-v1.0.0-beta3.aar"
  },
  {
    name: "PublisherSDK Ad-attribution Engine",
    category: "sdks",
    version: "v1.5.0",
    date: "September 18, 2024",
    size: "180 KB",
    type: "AAR (Archive)",
    status: "Production Build",
    desc: "Attribution receivers, local Room databases, and gRPC tracking threads.",
    fileName: "publishersdk-v1.5.0.aar"
  },

  // Developer Guides
  {
    name: "NCKit Integration Manual",
    category: "resources",
    version: "v1.0-PDF",
    date: "February 22, 2026",
    size: "2.4 MB",
    type: "PDF Document",
    status: "Updated",
    desc: "Complete architectural setup rules, Proguard configurations, and C++ memory safety guides.",
    fileName: "nckit-integration-manual.pdf"
  },
  {
    name: "PublisherSDK Event Tracking Sheets",
    category: "resources",
    version: "v1.2-PDF",
    date: "October 02, 2024",
    size: "1.1 MB",
    type: "PDF Document",
    status: "Released",
    desc: "Detailed guides for campaign attribution tracking, installation parameters, and gRPC analytics rules.",
    fileName: "publishersdk-tracking-sheets.pdf"
  }
];

export default function DownloadsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [downloadProgress, setDownloadProgress] = useState<string | null>(null);

  const handleDownload = (pkgName: string, fileName: string) => {
    setDownloadProgress(pkgName);
    setTimeout(() => {
      setDownloadProgress(null);
      // Trigger native download
      const link = document.createElement("a");
      link.href = `/downloads/${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  const filteredPackages = activeFilter === "all"
    ? packages
    : packages.filter(pkg => pkg.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative">
      {/* Background Glow blur */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Downloads Center</h1>
        <p className="text-sm text-muted-foreground max-w-xl font-light">
          Get direct APK installers, native AAR archive SDK binaries, and PDF integration manuals for our projects.
        </p>
      </div>

      {/* Filter Tabs bar */}
      <div className="flex flex-wrap gap-2.5 mb-10 justify-center md:justify-start">
        {downloadCategories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4.5 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                isActive 
                  ? "border-primary/20 bg-primary/10 text-primary shadow-sm"
                  : "border-border bg-card/20 text-foreground hover:bg-muted/40"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Downloads Table / Grid */}
      <div className="space-y-4">
        {filteredPackages.map((pkg, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-2xl border border-border bg-card/10 hover:border-primary/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Package details */}
            <div className="space-y-2 flex-grow max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border font-mono">
                  {pkg.type}
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{pkg.date}</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase bg-primary/10 text-primary">
                  {pkg.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">{pkg.desc}</p>
            </div>

            {/* Sizes & Action buttons */}
            <div className="flex items-center gap-6 justify-between md:justify-end shrink-0 border-t border-border/40 md:border-t-0 pt-4 md:pt-0">
              <div className="text-left md:text-right font-mono text-xs">
                <div className="text-[10px] text-muted-foreground font-sans">VERSION &amp; SIZE</div>
                <div className="font-bold text-foreground">{pkg.version}</div>
                <div className="text-muted-foreground font-light">{pkg.size}</div>
              </div>

              <button
                onClick={() => handleDownload(pkg.name, pkg.fileName)}
                disabled={downloadProgress === pkg.name}
                className="px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                {downloadProgress === pkg.name ? (
                  <>
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    <span>Preparing...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </>
                )}
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
