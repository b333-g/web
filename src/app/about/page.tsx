"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Target, Heart, Eye, Briefcase, Award, Building2 } from "lucide-react";
import GithubGraph from "@/components/GithubGraph";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative">
      {/* Background glow spot */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">About Labs</h1>
        <p className="text-sm text-muted-foreground font-light max-w-xl">
          Learn about our mission, core vision, professional development journey, and software focus areas.
        </p>
      </div>

      {/* Mission & Vision cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <div className="p-8 rounded-3xl border border-border bg-card/20 glass-panel space-y-4">
          <div className="p-3 w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Our Mission</h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
            Build products that solve real-world problems while providing exceptional developer and user experiences. Standardize native codebases for robust integration.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-border bg-card/20 glass-panel space-y-4">
          <div className="p-3 w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Our Vision</h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
            Create an open mobile technology platform dedicated to engineering high-performance Android applications, developer SDK modules, and AI audio processing filters.
          </p>
        </div>
      </div>

      {/* Company Experience & Timeline Summary */}
      <div className="space-y-8 mb-12">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary" />
          <span>Professional Company Journey</span>
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-border bg-card/10 space-y-3">
            <div className="flex justify-between items-center flex-wrap gap-2 text-xs">
              <span className="text-sm font-bold text-foreground">5Exceptions Software Solutions</span>
              <span className="px-3 py-1 rounded-full font-bold bg-primary/10 border border-primary/20 text-primary uppercase">
                2025 – Present
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Serving as an Android and SDK engineer. Focused on optimizing video camera capturing workflows, presentation preview features, and AI-powered noise reduction filters.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card/10 space-y-3">
            <div className="flex justify-between items-center flex-wrap gap-2 text-xs">
              <span className="text-sm font-bold text-foreground">Apogaeis</span>
              <span className="px-3 py-1 rounded-full font-bold bg-muted border border-border text-muted-foreground uppercase">
                2022 – 2025
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Developed reward ecosystems, custom attribution packages, offline-first SQL caching integrations, and gRPC client sync mechanisms.
            </p>
          </div>
        </div>
      </div>

      {/* Github Activity Graph */}
      <div className="mb-12">
        <GithubGraph />
      </div>

      {/* Current Focus Areas */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          <span>Current Technology Focus Areas</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "SDK Development",
            "Media Processing",
            "Noise Cancellation",
            "Enterprise Mobility"
          ].map((area) => (
            <div 
              key={area} 
              className="p-4 rounded-xl border border-border/80 bg-card/40 text-center text-xs font-bold text-foreground/80 hover:text-primary hover:border-primary/20 transition-all select-none"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
