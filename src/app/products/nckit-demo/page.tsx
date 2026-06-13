"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Download, FileText, CheckCircle2, ShieldCheck, Database, GitBranch, ArrowRight, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { versionRegistry } from "@/data/versions";

const product = versionRegistry.find(v => v.id === "nckit-demo")!;

export default function NCKitDemoDetail() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative min-h-screen">
      {/* Background radial glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Back button */}
      <div className="mb-8">
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Products</span>
        </Link>
      </div>

      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            {product.status}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            {product.name}
          </h1>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            The flagship audio clean demonstration client. Tests raw microphone PCM buffer streaming, vocal format filters, and real-time noise cancellation indexes.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Kotlin", "Native C++", "NDK Core", "AudioRecord API", "FFmpeg Library"].map(tag => (
              <span key={tag} className="text-[10px] px-2.5 py-1 rounded bg-muted text-muted-foreground font-mono">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={product.downloadUrl}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-primary/20"
            >
              <Download className="w-4 h-4" />
              <span>Download APK ({product.fileSize})</span>
            </a>
            <Link
              href="/documentation?cat=nckit"
              className="px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Activity className="w-4 h-4" />
              <span>NCKit SDK Documentation</span>
            </Link>
          </div>
        </div>

        {/* 2. Screenshots & Mobile Mockup Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 h-[450px] rounded-[36px] border-[6px] border-zinc-800 bg-zinc-950 p-3 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between overflow-hidden">
            {/* Phone Notch/Speaker */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-12 h-1.5 bg-zinc-900 rounded-full" />
            </div>

            {/* Simulated App Screen content */}
            <div className="flex-grow flex flex-col justify-between pt-8 pb-4 font-mono text-[9px] text-zinc-400">
              <div className="flex items-center justify-between border-b border-border/40 pb-2 font-sans">
                <span className="text-[8px] text-cyan-400 font-bold">NCKit Audio Demo</span>
                <span className="text-zinc-500 font-mono">v1.0.0</span>
              </div>

              {/* Dynamic waveform simulator representation */}
              <div className="space-y-4 py-4 flex-grow flex flex-col justify-center font-sans">
                
                {/* original wave */}
                <div className="space-y-1">
                  <div className="text-[7px] text-muted-foreground flex justify-between font-mono"><span>Original Audio (Traffic)</span><span>dB: -12</span></div>
                  <div className="h-6 w-full flex items-center gap-0.5 justify-center bg-zinc-900 rounded-lg p-1 border border-border/50">
                    <div className="h-4 w-1 bg-red-400/80 rounded" />
                    <div className="h-2 w-1 bg-red-400/80 rounded" />
                    <div className="h-5 w-1 bg-red-400/80 rounded" />
                    <div className="h-1 w-1 bg-red-400/80 rounded" />
                    <div className="h-3 w-1 bg-red-400/80 rounded" />
                    <div className="h-5 w-1 bg-red-400/80 rounded" />
                    <div className="h-4 w-1 bg-red-400/80 rounded" />
                    <div className="h-2 w-1 bg-red-400/80 rounded" />
                  </div>
                </div>

                {/* cleaned wave */}
                <div className="space-y-1">
                  <div className="text-[7px] text-cyan-400 flex justify-between font-mono"><span>NCKit Cleaned Voice</span><span>dB: -18 (Noise: -34)</span></div>
                  <div className="h-6 w-full flex items-center gap-0.5 justify-center bg-zinc-900 rounded-lg p-1 border border-cyan-500/20">
                    <div className="h-1 w-1 bg-cyan-400 rounded" />
                    <div className="h-1 w-1 bg-cyan-400 rounded" />
                    <div className="h-4 w-1 bg-cyan-400 rounded" />
                    <div className="h-2 w-1 bg-cyan-400 rounded" />
                    <div className="h-1 w-1 bg-cyan-400 rounded" />
                    <div className="h-4 w-1 bg-cyan-400 rounded" />
                    <div className="h-1 w-1 bg-cyan-400 rounded" />
                    <div className="h-1 w-1 bg-cyan-400 rounded" />
                  </div>
                </div>

              </div>

              <div className="border-t border-border/40 pt-2 flex items-center justify-between text-[8px] text-muted-foreground font-sans">
                <span>Latency: 14ms (JNI)</span>
                <span className="text-cyan-400 font-bold">Denoise: ON</span>
              </div>
            </div>

            {/* Home indicator bar */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-zinc-700 rounded-full" />
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span>Interactive Feature Highlights</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Real-time PCM stream clean", desc: "Hooks directly into AudioRecord buffer callbacks and performs low-latency JNI processing.", icon: Activity },
            { title: "Vocal Formant Enhancements", desc: "Filters ambient hum frequencies while preserving and boosting vocal peaks.", icon: GitBranch },
            { title: "Visual Waveform Charts", desc: "Plots dynamic original vs noise-suppressed decibel frequencies in real-time.", icon: Database }
          ].map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-card/10 space-y-3">
                <div className="p-2.5 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">{feat.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Technical Specifications */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-xl font-bold text-foreground">Technical Overview</h2>
          <div className="space-y-4 text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
            <p>
              NCKit Audio Demo wraps our high-performance NDK C++ audio pipelines. It processes 16-bit linear PCM buffers, executing spectral subtraction on dedicated background threads.
            </p>
            <p>
              It shows that mobile audio can be cleaned locally without sending microphones raw recordings to server APIs, maintaining privacy and ensuring zero network delays.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-muted/10 space-y-3 text-xs">
            <h3 className="font-bold text-foreground">Ecosystem Requirements</h3>
            <div className="grid grid-cols-2 gap-4 text-muted-foreground font-mono">
              <div>• Min Android SDK: API 26+</div>
              <div>• Target Android SDK: API 34+</div>
              <div>• Processing Core: NDK Native C++</div>
              <div>• Native ABI: arm64-v8a, armeabi-v7a</div>
            </div>
          </div>
        </div>

        {/* 5. Architecture Diagram */}
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Audio Signal Processing Flow</h3>
          <div className="p-6 rounded-2xl border border-border bg-zinc-950 flex flex-col items-center gap-4 text-center font-mono text-[10px]">
            <div className="w-full p-2.5 rounded bg-card border border-border text-foreground">
              Android AudioRecord PCM Buffer
            </div>
            <div className="text-muted-foreground">↓ (JNI native call)</div>
            <div className="w-full p-2.5 rounded bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
              NCKit NDK C++ Core
            </div>
            <div className="text-muted-foreground">↓ (vocal formant EQ & spectral filters)</div>
            <div className="w-full p-2.5 rounded bg-indigo-950/40 border border-indigo-500/20 text-indigo-300">
              Cleaned PCM Bytes Stream
            </div>
            <div className="text-muted-foreground">↓ (callback stream)</div>
            <div className="w-full p-2.5 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300">
              AudioTrack / WebRTC transmission
            </div>
          </div>
        </div>
      </section>

      {/* 6. Changelog Version History */}
      <section className="pt-8 border-t border-border/40 space-y-6">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-primary" />
          <span>Structured Changelog Version History</span>
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-border bg-card/10 space-y-4">
            <div className="flex justify-between items-center flex-wrap gap-2 text-xs">
              <span className="text-sm font-bold text-foreground">{product.version} ({product.status})</span>
              <span className="text-muted-foreground font-mono">{product.releaseDate}</span>
            </div>

            {/* Added */}
            {product.changelog.added && (
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Added</span>
                {product.changelog.added.map((log, lIdx) => (
                  <div key={lIdx} className="text-xs text-muted-foreground font-light leading-relaxed pl-4 relative">
                    <span className="absolute left-0 text-emerald-400">•</span> {log}
                  </div>
                ))}
              </div>
            )}

            {/* Changed */}
            {product.changelog.changed && (
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Changed</span>
                {product.changelog.changed.map((log, lIdx) => (
                  <div key={lIdx} className="text-xs text-muted-foreground font-light leading-relaxed pl-4 relative">
                    <span className="absolute left-0 text-primary">•</span> {log}
                  </div>
                ))}
              </div>
            )}

            {/* Fixed */}
            {product.changelog.fixed && (
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">Fixed</span>
                {product.changelog.fixed.map((log, lIdx) => (
                  <div key={lIdx} className="text-xs text-muted-foreground font-light leading-relaxed pl-4 relative">
                    <span className="absolute left-0 text-amber-400">•</span> {log}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
