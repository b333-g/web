"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Smartphone, Cpu, FileText, Clock, Layers, Sparkles } from "lucide-react";
import { versionRegistry } from "@/data/versions";

// Categories definitions matching user requirements
const downloadCategories = [
  { id: "all", label: "All Packages", icon: Layers },
  { id: "app", label: "APKs (Installers)", icon: Smartphone },
  { id: "sdk", label: "SDKs (Binaries)", icon: Cpu },
  { id: "doc", label: "Documents & Guides", icon: FileText }
];

// Document packages to display alongside applications/SDKs
const docPackages = [
  {
    id: "nckit-pdf",
    name: "NCKit Integration Manual",
    type: "doc" as const,
    version: "v1.2-PDF",
    releaseDate: "February 22, 2026",
    status: "Released" as const,
    releaseChannel: "stable" as const,
    fileSize: "2.4 MB",
    fileName: "nckit-integration-manual.pdf",
    downloadUrl: "/downloads/nckit-integration-manual.pdf",
    changelogUrl: "",
    changelog: {},
    desc: "Complete architectural setup rules, JNI compilation bindings, and Native C++ safety practices."
  },
  {
    id: "publishersdk-pdf",
    name: "PublisherSDK Campaign Setup Sheets",
    type: "doc" as const,
    version: "v1.0-PDF",
    releaseDate: "October 02, 2024",
    status: "Released" as const,
    releaseChannel: "stable" as const,
    fileSize: "1.1 MB",
    fileName: "publishersdk-tracking-sheets.pdf",
    downloadUrl: "/downloads/publishersdk-tracking-sheets.pdf",
    changelogUrl: "",
    changelog: {},
    desc: "Event tracking definitions, callback signatures audit scripts, and campaign verification parameters."
  }
];

// Combine all downloadable registry records
const allDownloadableItems = [
  ...versionRegistry,
  ...docPackages
];

export default function DownloadsCenter() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Simulated download triggers
  const handleDownload = (id: string, fileName: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      // Trigger download
      const link = document.createElement("a");
      link.href = `/downloads/${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1200);
  };

  const filteredItems = activeFilter === "all"
    ? allDownloadableItems
    : allDownloadableItems.filter(item => item.type === activeFilter);

  // Helper to get simulated counts based on item versions
  const getDownloadCount = (id: string) => {
    switch (id) {
      case "greatgoga": return "14,250+";
      case "bhagavad-gita": return "45,800+";
      case "truvideo": return "1,500+";
      case "nckit-demo": return "3,400+";
      case "nckit-sdk": return "850+ integrations";
      case "publishersdk": return "2,100+ integrations";
      default: return "980+";
    }
  };

  const getBadgeClass = (status: string) => {
    if (status === "Released") return "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
    if (status === "Active Development" || status === "Beta") return "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
    return "bg-amber-500/10 border-amber-500/20 text-amber-400";
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative min-h-screen">
      {/* Background radial spotlight */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Downloads Center</h1>
        <p className="text-sm text-muted-foreground max-w-xl font-light">
          Access our centralized registry containing native Android APK installers, compiled AAR library binaries, and PDF integration manuals.
        </p>
      </div>

      {/* Categories Tabs Selector */}
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

      {/* Central Package registry listing */}
      <div className="space-y-4">
        {filteredItems.map((pkg) => (
          <div 
            key={pkg.id} 
            className="p-6 rounded-2xl border border-border bg-card/10 hover:border-primary/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 relative group"
          >
            {/* Top Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />

            {/* Main metadata details */}
            <div className="space-y-2 flex-grow max-w-2xl relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border uppercase font-mono">
                  {pkg.type === "app" ? "APK Installer" : pkg.type === "sdk" ? "AAR Archive" : "PDF Guide"}
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>{pkg.releaseDate}</span>
                </span>
                <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase border ${getBadgeClass(pkg.status)}`}>
                  {pkg.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                {pkg.type === "doc" ? (pkg as any).desc : pkg.changelog.added?.[0] || "Native binary release bundle."}
              </p>
            </div>

            {/* Metrics column and download trigger */}
            <div className="flex items-center gap-6 justify-between md:justify-end shrink-0 border-t border-border/40 md:border-t-0 pt-4 md:pt-0 relative z-10">
              <div className="text-left md:text-right font-mono text-xs">
                <div className="text-[9px] text-muted-foreground font-sans uppercase">VERSION &amp; SIZE</div>
                <div className="font-bold text-foreground">{pkg.version}</div>
                <div className="text-muted-foreground font-light">{pkg.fileSize}</div>
              </div>

              <div className="text-left md:text-right font-mono text-xs hidden sm:block">
                <div className="text-[9px] text-muted-foreground font-sans uppercase flex items-center gap-1 justify-end">
                  <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span>DOWNLOADS</span>
                </div>
                <div className="font-bold text-cyan-400">{getDownloadCount(pkg.id)}</div>
                <div className="text-muted-foreground/60 font-light text-[9px]">verified check</div>
              </div>

              <button
                onClick={() => handleDownload(pkg.id, pkg.fileName)}
                disabled={downloadingId === pkg.id}
                className="px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-95 disabled:opacity-50 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-primary/5"
              >
                {downloadingId === pkg.id ? (
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
