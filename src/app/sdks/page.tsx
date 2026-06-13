"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  BookOpen, 
  Terminal, 
  Activity, 
  Layers, 
  Check,
  Cpu,
  ShieldAlert,
  GitBranch,
  Copy,
  CheckCircle
} from "lucide-react";

const sdks = [
  {
    id: "nckit",
    name: "NCKit – Noise Cancellation SDK",
    status: "Active Development",
    version: "v1.0.0-beta3",
    compatibility: "Android 8.0+ (API Level 26+)",
    releaseDate: "February 2026",
    desc: "A native Android audio processing library delivering AI-powered ambient noise cancellation, speech intelligibility filters, and raw PCM buffer cleanup.",
    features: [
      "AI-trained Vocal Formant Preservation models",
      "Dynamic background hum, fan, and cafeteria chatter suppression",
      "Low overhead NDK (C/C++) core executing under 15ms latency",
      "Automatic audio channel format conversions (mono, stereo, high-sample rates)",
      "Continuous streaming and static audio track file cleaner"
    ],
    sampleCode: `// Initialize NCKit Engine in your Application file
import com.badri.nckit.NCKitEngine
import com.badri.nckit.NoiseFilterConfig

val config = NoiseFilterConfig.Builder()
    .setNoiseSuppressionLevel(NoiseFilterConfig.Level.HIGH)
    .enableVocalBoost(true)
    .build()

NCKitEngine.initialize(context, config)

// Filter audio recording stream
val audioTracker = NCKitEngine.createStreamFilter()
audioTracker.startProcessing(audioRecordBuffer) { cleanedBuffer ->
    // Clean audio PCM bytes ready for transmission
}`,
    changelog: [
      "Added native multi-thread execution controls.",
      "Fixed buffer memory leaks on low-end MediaTek processors.",
      "Updated Kotlin coroutine bindings to support Flow collectors."
    ]
  },
  {
    id: "publishersdk",
    name: "PublisherSDK – Attribution Tech",
    status: "Released",
    version: "v1.5.0",
    compatibility: "Android 5.0+ (API Level 21+)",
    releaseDate: "September 2024",
    desc: "An ad-attribution and marketing campaign telemetry SDK monitoring installs, offerwall completions, click impressions, and background receiver activity.",
    features: [
      "Robust referrer tracking via Google Play Install Referrer bindings",
      "Local event buffers preventing data loss during network dropouts",
      "Dynamic Offerwall survey tracking with verification signature checks",
      "Custom broadcast receiver triggers detecting system reboots and app updates",
      "Lightweight footprint (adds less than 180KB to final APK binaries)"
    ],
    sampleCode: `// Initialize PublisherSDK Attribution
import com.badri.publishersdk.PublisherClient
import com.badri.publishersdk.InstallListener

PublisherClient.init(
    context, 
    appId = "bg_labs_publish_9924",
    installListener = object : InstallListener {
        override fun onReferrerDetected(referrerUrl: String) {
            // Track user attribution campaign
        }
    }
)

// Log custom Offerwall events
PublisherClient.logEvent("offerwall_completion", mapOf(
    "campaign_id" to "earn_coins_2026",
    "reward_points" to 500
))`,
    changelog: [
      "Migrated sync pipeline to encrypted gRPC channels.",
      "Optimized shared preferences caching speeds.",
      "Reduced CPU cycle overhead for click impression logs."
    ]
  }
];

const futureSDKs = [
  { name: "Camera Utilities SDK", type: "Media", desc: "Standardize CameraX screen previews, presentation layouts, zoom configurations, and hardware capabilities check." },
  { name: "Media Processing SDK", type: "Processing", desc: "Native bindings for video transcoding, frame slicing, and stream compression parameters." },
  { name: "Video Enhancement SDK", type: "AI Graphics", desc: "Super-resolution image upscaling, color restoration, and frame stabilization configurations." },
  { name: "Analytics SDK", type: "Telemetry", desc: "Local buffer caching pipelines sending telemetry payloads back over low data network nodes." }
];

export default function SDKsPage() {
  const [selectedSdk, setSelectedSdk] = useState(sdks[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative">
      {/* Background aurora blur */}
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">SDK Marketplace</h1>
        <p className="text-sm text-muted-foreground max-w-xl font-light">
          Integrate high-performance systems for mobile audio noise filtering, attribution, and telemetry buffers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: SDK select list */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground pl-2 mb-1">Ecosystem SDKs</h3>
          {sdks.map((sdk) => (
            <button
              key={sdk.id}
              onClick={() => setSelectedSdk(sdk)}
              className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                selectedSdk.id === sdk.id
                  ? "border-primary/30 bg-primary/5 shadow-sm text-foreground"
                  : "border-border bg-card/20 hover:bg-card/40 text-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">{sdk.name.split(" – ")[0]}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase border ${
                  sdk.status === "Released" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                }`}>
                  {sdk.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 font-light">{sdk.desc}</p>
              <div className="flex justify-between items-center text-[10px] text-muted-foreground pt-1">
                <span className="font-mono">{sdk.version}</span>
                <span>{sdk.releaseDate}</span>
              </div>
            </button>
          ))}

          {/* Future releases teaser */}
          <div className="p-6 rounded-2xl border border-dashed border-border bg-transparent space-y-4 pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Coming Soon SDKs</h4>
            <div className="space-y-3">
              {futureSDKs.map((fut, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-foreground/80">{fut.name}</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground uppercase">{fut.type}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-light leading-relaxed">{fut.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Active SDK documentation details & code */}
        <div className="lg:col-span-8 p-8 rounded-3xl border border-border bg-card/20 glass-panel space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/40">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{selectedSdk.name}</h2>
              <p className="text-xs text-muted-foreground font-light">Compatibility: {selectedSdk.compatibility}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/documentation"
                className="px-4 py-2.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>API Docs</span>
              </Link>
              <Link
                href="/downloads"
                className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get .AAR</span>
              </Link>
            </div>
          </div>

          {/* SDK Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Capabilities</h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-light">{selectedSdk.desc}</p>
          </div>

          {/* Feature Bullets */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedSdk.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed font-light">
                  <div className="p-0.5 mt-0.5 rounded bg-primary/10 text-primary">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Integration snippet */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Integration Snippet (Kotlin)</span>
              </h3>
              <button
                onClick={() => handleCopyCode(selectedSdk.sampleCode)}
                className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer flex items-center gap-1 text-[10px]"
              >
                {copied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Code"}</span>
              </button>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-border overflow-x-auto">
              <pre className="text-[11px] font-mono text-zinc-300 leading-relaxed">
                <code>{selectedSdk.sampleCode}</code>
              </pre>
            </div>
          </div>

          {/* Recent Changelogs */}
          <div className="pt-4 border-t border-border/40 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-primary" />
              <span>Changelog ({selectedSdk.version})</span>
            </h3>
            <div className="space-y-1.5 pl-6">
              {selectedSdk.changelog.map((log, idx) => (
                <div key={idx} className="text-xs text-muted-foreground font-light list-item list-disc pl-1 leading-relaxed">
                  {log}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
