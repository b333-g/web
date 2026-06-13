"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, BookOpen, Terminal, Cpu, GitBranch, Copy, CheckCircle, Check, HelpCircle } from "lucide-react";
import { versionRegistry, futureSDKRegistry } from "@/data/versions";

// Extract SDKs from registry
const sdks = versionRegistry.filter(v => v.type === "sdk");

export default function SDKMarketplace() {
  const [selectedSdk, setSelectedSdk] = useState(sdks[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Capabilities mapping
  const capabilitiesMap: { [key: string]: string[] } = {
    "nckit-sdk": [
      "AI Noise Cancellation",
      "Speech Enhancement",
      "Audio Processing",
      "Android Native Integration",
      "Media Pipeline Optimization"
    ],
    publishersdk: [
      "Attribution Tracking",
      "Analytics Integration",
      "Click Referral Tracking",
      "Campaign Telemetry Monitoring",
      "Offline Batch Caching"
    ]
  };

  // Integration code mapping
  const integrationCodeMap: { [key: string]: string } = {
    "nckit-sdk": `// Declare in your app-level build.gradle
dependencies {
    implementation("com.badri.nckit:audio-enhance:1.0.0-beta3")
}

// Initialize NCKit Engine in your Application file
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
    publishersdk: `// Declare in your app-level build.gradle
dependencies {
    implementation("com.badri.publishersdk:attribution:1.5.0")
}

// Initialize PublisherSDK Attribution inside Application
import com.badri.publishersdk.PublisherClient
import com.badri.publishersdk.InstallListener

PublisherClient.init(
    context, 
    appId = "badritech_publish_9924",
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
))`
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative min-h-screen">
      {/* Background aurora blur */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">SDK Marketplace</h1>
        <p className="text-sm text-muted-foreground max-w-xl font-light">
          Directly integrate our native Android binaries to leverage audio filters, attribution telemetry, and video splice tools in your production apps.
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
              className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer space-y-2 relative overflow-hidden ${
                selectedSdk.id === sdk.id
                  ? "border-primary/35 bg-primary/5 shadow-sm text-foreground"
                  : "border-border bg-card/20 hover:bg-card/30 text-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">{sdk.name.split(" SDK")[0]}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase border ${
                  sdk.status === "Released" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                }`}>
                  {sdk.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 font-light leading-relaxed">{sdk.changelog.added?.[0]}</p>
              <div className="flex justify-between items-center text-[10px] text-muted-foreground pt-1">
                <span className="font-mono">{sdk.version}</span>
                <span>{sdk.releaseDate}</span>
              </div>
            </button>
          ))}

          {/* Future releases teaser */}
          <div className="p-6 rounded-2xl border border-dashed border-border bg-transparent space-y-4 pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Future SDK Pipelines</h4>
            <div className="space-y-4">
              {futureSDKRegistry.map((fut) => {
                // Map future status to badges
                let badgeClass = "bg-muted text-muted-foreground border-border";
                if (fut.status === "Coming Soon") badgeClass = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
                else if (fut.status === "Research Phase") badgeClass = "bg-violet-500/10 border-violet-500/20 text-violet-400";
                else if (fut.status === "Planned Release") badgeClass = "bg-amber-500/10 border-amber-500/20 text-amber-400";

                return (
                  <div key={fut.id} className="space-y-1 p-3.5 rounded-xl border border-border bg-card/10 hover:border-primary/20 transition-all">
                    <div className="flex items-center justify-between text-[11px] gap-2">
                      <span className="font-bold text-foreground/80">{fut.name}</span>
                      <span className={`text-[8px] px-2 py-0.5 rounded font-bold uppercase border ${badgeClass}`}>{fut.status}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-light leading-relaxed">{fut.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Active SDK documentation details & code */}
        <div className="lg:col-span-8 p-8 rounded-3xl border border-border bg-card/25 glass-panel space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/40">
            <div>
              <span className="text-[9px] px-2 py-0.5 rounded font-bold uppercase bg-primary/10 border border-primary/20 text-primary">
                {selectedSdk.releaseChannel} track
              </span>
              <h2 className="text-2xl font-bold text-foreground pt-1">{selectedSdk.name}</h2>
              <p className="text-xs text-muted-foreground font-light">Latest stable release: {selectedSdk.version} ({selectedSdk.releaseDate})</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/documentation?cat=${selectedSdk.id === "nckit-sdk" ? "nckit" : "publishersdk"}`}
                className="px-4 py-2.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Documentation</span>
              </Link>
              <a
                href={selectedSdk.downloadUrl}
                className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download SDK</span>
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Capabilities Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(capabilitiesMap[selectedSdk.id] || []).map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80 leading-relaxed font-light">
                  <div className="p-0.5 rounded bg-primary/10 text-primary shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Integration snippet */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Gradle &amp; Kotlin Integration Snippet</span>
              </h3>
              <button
                onClick={() => handleCopyCode(integrationCodeMap[selectedSdk.id])}
                className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer flex items-center gap-1 text-[10px]"
              >
                {copied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Code"}</span>
              </button>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-border overflow-x-auto">
              <pre className="text-[11px] font-mono text-zinc-300 leading-relaxed">
                <code>{integrationCodeMap[selectedSdk.id]}</code>
              </pre>
            </div>
          </div>

          {/* Recent Changelogs */}
          <div className="pt-4 border-t border-border/40 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-primary" />
              <span>Changelog ({selectedSdk.version})</span>
            </h3>
            
            <div className="space-y-3">
              {selectedSdk.changelog.added && (
                <div className="space-y-1">
                  <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Added</div>
                  {selectedSdk.changelog.added.map((log, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground font-light pl-4 relative">
                      <span className="absolute left-0 text-emerald-400">•</span> {log}
                    </div>
                  ))}
                </div>
              )}
              {selectedSdk.changelog.changed && (
                <div className="space-y-1">
                  <div className="text-[9px] font-bold text-primary uppercase tracking-widest">Changed</div>
                  {selectedSdk.changelog.changed.map((log, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground font-light pl-4 relative">
                      <span className="absolute left-0 text-primary">•</span> {log}
                    </div>
                  ))}
                </div>
              )}
              {selectedSdk.changelog.fixed && (
                <div className="space-y-1">
                  <div className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">Fixed</div>
                  {selectedSdk.changelog.fixed.map((log, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground font-light pl-4 relative">
                      <span className="absolute left-0 text-amber-400">•</span> {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
