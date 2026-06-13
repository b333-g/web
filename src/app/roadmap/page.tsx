"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, CheckCircle2, Circle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const roadmapData = [
  {
    quarter: "Q1 2026",
    title: "AI Audio & Denoising Core",
    status: "In Progress",
    items: [
      { 
        name: "Stable NCKit SDK Release", 
        desc: "Publish formal v1.0.0 release of the on-device AI noise cancellation engine, featuring C++ pipelines under 15ms latency.", 
        done: true 
      },
      { 
        name: "AI Audio Improvements", 
        desc: "Refine vocal formant preservation models to extract clean voice patterns under severe cafeteria and background hum profiles.", 
        done: false 
      }
    ]
  },
  {
    quarter: "Q2 2026",
    title: "Ad-Tech & Telemetry Buffers",
    status: "Planned",
    items: [
      { 
        name: "PublisherSDK Enhancements", 
        desc: "Integrate SQLite SQL cipher libraries to secure client points balances offline and batch upload telemetry logs.", 
        done: false 
      },
      { 
        name: "Camera Utility SDK", 
        desc: "Launch CameraX wrapper packages standardizing viewfinder previews, aspect-ratio scaling, and hardware zoom gestures.", 
        done: false 
      }
    ]
  },
  {
    quarter: "Q3 2026",
    title: "Native Transcoding",
    status: "Planned",
    items: [
      { 
        name: "Video Processing SDK", 
        desc: "Build optimized native FFmpeg libraries supporting frame slicing, on-device compressing, and fast transcoding on background threads.", 
        done: false 
      }
    ]
  },
  {
    quarter: "Q4 2026",
    title: "Ecosystem Licensing",
    status: "Planned",
    items: [
      { 
        name: "Developer Portal Expansion", 
        desc: "Integrate self-service developer portal licenses, analytics monitors, and token generation dashboards.", 
        done: false 
      }
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative min-h-screen">
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
          Track our planned releases, native library compilation tracks, and developer portal milestones for the BadriTech Platform.
        </p>
      </div>

      {/* Roadmap Quarters Grid */}
      <div className="space-y-8">
        {roadmapData.map((phase, idx) => (
          <motion.div 
            key={phase.quarter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl border border-border bg-card/10 glass-panel space-y-6 relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary/30 to-violet-500/20" />
            
            {/* Phase Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/40">
              <div className="space-y-1">
                <span className="text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary">
                  {phase.quarter}
                </span>
                <h2 className="text-xl font-bold text-foreground pt-1">{phase.title}</h2>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-4 h-4 text-primary animate-pulse" />
                <span className="font-semibold">{phase.status}</span>
              </div>
            </div>

            {/* Milestones list */}
            <div className="space-y-6">
              {phase.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-start gap-4 text-xs leading-relaxed font-light">
                  {item.done ? (
                    <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="p-1 rounded bg-muted text-muted-foreground/60 border border-border mt-0.5 shrink-0">
                      <Circle className="w-4 h-4" />
                    </div>
                  )}
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-foreground">{item.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}
