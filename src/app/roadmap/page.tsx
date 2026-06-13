"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, CheckCircle2, Circle } from "lucide-react";

const roadmapData = [
  {
    quarter: "Q1 2026",
    title: "AI Audio Enhancements",
    status: "In Progress",
    items: [
      { name: "NCKit SDK Stable Release (AI Core)", desc: "Formalize first production-ready release for deep neural denoising filters.", done: true },
      { name: "Real-time Voice Equalization", desc: "Adapt filters dynamically based on ambient background decibel frequencies.", done: false }
    ]
  },
  {
    quarter: "Q2 2026",
    title: "Media & Camera SDK Bundles",
    status: "Planned",
    items: [
      { name: "Camera Utility SDK Launch", desc: "Launch customized CameraX controller wrappers, zoom layouts, and preview overlays.", done: false },
      { name: "Media Processing SDK (FFmpeg optimized)", desc: "Build low-overhead transcoders, video compressors, and splice tools.", done: false }
    ]
  },
  {
    quarter: "Q3 2026",
    title: "AI Video & Telemetry",
    status: "Planned",
    items: [
      { name: "AI Video Enhancement Toolkit", desc: "Integrate frame upscaling filters and on-device dynamic lighting correction configurations.", done: false },
      { name: "Offline Telemetry Buffers", desc: "Enhance PublisherSDK with offline logs database sync modules over gRPC.", done: false }
    ]
  },
  {
    quarter: "Q4 2026",
    title: "Platform Expansion",
    status: "Planned",
    items: [
      { name: "Developer Self-Service Portal", desc: "Introduce active license keys generator dashboard and telemetry analytics monitor.", done: false },
      { name: "Open Source Documentation Platform", desc: "Provide interactive API code playgrounds for Swift/Kotlin libraries.", done: false }
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative">
      {/* Background radial spotlight */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Milestones Roadmap</h1>
        <p className="text-sm text-muted-foreground font-light max-w-xl">
          Follow our 2026 developmental timelines, library releases, and architectural expansion goals.
        </p>
      </div>

      {/* Roadmap Quarters Grid */}
      <div className="space-y-8">
        {roadmapData.map((phase, idx) => (
          <div key={idx} className="p-8 rounded-3xl border border-border bg-card/10 glass-panel space-y-6">
            
            {/* Phase Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/40">
              <div className="space-y-1">
                <span className="text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary">
                  {phase.quarter}
                </span>
                <h2 className="text-lg font-bold text-foreground pt-1">{phase.title}</h2>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-semibold text-muted-foreground">{phase.status}</span>
              </div>
            </div>

            {/* Milestones list */}
            <div className="space-y-4">
              {phase.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-start gap-3 text-xs leading-relaxed font-light">
                  {item.done ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground/60 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h3 className="font-bold text-foreground">{item.name}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
