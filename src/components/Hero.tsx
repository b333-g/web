"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, Download, Smartphone, Heart } from "lucide-react";
import TypingEffect from "./TypingEffect";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Interactive 3D tilt calculations using framer-motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate values relative to center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    // Maximum rotations degrees
    x.set(mouseX * 16); 
    y.set(mouseY * -16);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Glow Blurs */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] rounded-full glow-spot-1 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full glow-spot-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-spot-3 pointer-events-none" />

      {/* Modern Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:16px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Beacons and badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Android Products &amp; SDKs</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/40 text-muted-foreground text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <MapPin className="w-3.5 h-3.5 ml-1 inline text-primary" />
                <span>Bengaluru, India</span>
              </div>
            </div>

            {/* Main Header title */}
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] max-w-2xl">
              <span className="dark:gradient-text-metallic text-slate-900 block">
                Building Powerful
              </span>
              <span className="block min-h-[1.2em]">
                <TypingEffect
                  words={[
                    "Android Applications",
                    "SDK Telemetry Engines",
                    "Real-time Audio Filters",
                    "High-performance Media APIs"
                  ]}
                />
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent block">
                SDKs &amp; Media Tech
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl font-light leading-relaxed">
              Enterprise-grade Android applications, developer SDKs, media processing tools, camera solutions, and AI-powered audio enhancement platforms. Focus areas include noise cancellation, SDK integrations, and high-performance video workflows.
            </p>

            {/* Interactive Call to Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <Link
                href="/products"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 group cursor-pointer text-sm"
              >
                <span>Explore Products</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/downloads"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer group text-sm"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>Download Apps</span>
              </Link>
              <Link
                href="/sdks"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer text-sm"
              >
                <span>View SDKs</span>
              </Link>
            </div>

            {/* Supported tech brands / projects row */}
            <div className="pt-8 flex flex-col space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Supported Ecosystems &amp; SDK Products
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {["NCKit SDK", "PublisherSDK", "GreatGoga", "Bhagavad Gita", "TruVideo SDK"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-[10px] font-semibold tracking-wider rounded-lg border border-border/80 bg-card/60 text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium tilted mockup card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-5 flex justify-center items-center"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[340px] aspect-[9/16] cursor-crosshair group select-none"
              style={{ perspective: 1200 }}
            >
              {/* Backglow panel linking behind the phone card */}
              <div className="absolute inset-4 rounded-[40px] bg-gradient-to-r from-primary/30 to-cyan-500/20 blur-2xl group-hover:scale-110 opacity-70 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Main tilted smartphone wrap */}
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative w-full h-full rounded-[48px] border-4 border-zinc-800/80 bg-zinc-950 p-2.5 shadow-2xl flex flex-col overflow-hidden transition-all duration-100 glow-border-card"
              >
                {/* Dynamic notch bar */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full bg-black flex items-center justify-between px-3 z-30 border border-zinc-800/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
                  <div className="w-12 h-1 rounded-full bg-zinc-900" />
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                </div>
                
                {/* Mockup screen content panel */}
                <div className="relative flex-grow rounded-[38px] overflow-hidden bg-black/90 z-20 border border-zinc-900">
                  <Image
                    src="/images/project4.png"
                    alt="Android App Screenshot"
                    fill
                    sizes="340px"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  
                  {/* Glass layout indicator overlay */}
                  <div className="absolute bottom-4 left-4 right-4 glass-panel border border-white/5 p-3.5 rounded-2xl flex items-center justify-between z-30 shadow-xl shadow-black/40">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-[10px] text-foreground font-semibold">Active Build</div>
                        <div className="text-[8px] text-muted-foreground">NCKit Audio Engine v1.0.0</div>
                      </div>
                    </div>
                    <Heart className="w-3.5 h-3.5 text-primary fill-primary animate-pulse" />
                  </div>
                </div>
              </motion.div>
              
              {/* Mini floating dashboard card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-panel py-3 px-4.5 rounded-xl border border-white/10 shadow-2xl z-30 flex items-center gap-2.5"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-[10px] text-foreground font-extrabold">NCKit Engine</div>
                  <div className="text-[9px] text-emerald-400 font-bold">Active Noise Reduction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
