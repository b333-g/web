"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight,
  Download, 
  Layers, 
  Cpu, 
  GitBranch, 
  Clock, 
  CheckCircle2, 
  Zap, 
  Terminal, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  Smartphone,
  CheckCircle,
  Play,
  Settings,
  HelpCircle,
  MessageSquare,
  Briefcase,
  ChevronRight,
  Sparkles,
  Info,
  Globe
} from "lucide-react";
import Hero from "@/components/Hero";
import { versionRegistry, futureSDKRegistry } from "@/data/versions";

// Reusable Counter Component for Metrics Section
function MetricCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    if (isNaN(target)) return;
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, target, duration]);

  return <span>{isNaN(target) ? value : `${count}${value.replace(/[0-9]/g, "")}`}</span>;
}

// Built With Tech List
const techStack = [
  { name: "Kotlin", desc: "Primary language for native Android features." },
  { name: "Android SDK", desc: "Core OS platform API declarations." },
  { name: "Jetpack Compose", desc: "Declarative UI rendering canvases." },
  { name: "Room", desc: "Local SQLite database abstraction caches." },
  { name: "Coroutines", desc: "Asynchronous threading and stream loops." },
  { name: "Retrofit", desc: "HTTP network request clients." },
  { name: "MediaCodec", desc: "Low-overhead audio/video hardware encoding." },
  { name: "ExoPlayer", desc: "High-performance adaptive stream rendering." },
  { name: "CameraX", desc: "Standardized device viewfinder APIs." },
  { name: "MVVM Architecture", desc: "State management architecture." },
  { name: "NCKit Engine", desc: "On-device AI audio processing filter." },
  { name: "TruVideo Platform", desc: "Enterprise mobile recording workflow." }
];

export default function HomePage() {
  const [activeLabIndex, setActiveLabIndex] = useState(0);

  const products = versionRegistry.filter(v => v.type === "app");
  const sdks = versionRegistry.filter(v => v.type === "sdk");

  return (
    <div className="space-y-32 pb-32">
      {/* 1. Hero Landing Section */}
      <Hero />

      {/* 2. Product Ecosystem Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Featured Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Android Applications &amp; Demo Platforms
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Download our native APK installers or explore detailed showcases testing low-latency media streams and SQLite local caches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((prod, idx) => {
            const logo = prod.id === "greatgoga" ? "GG" : prod.id === "bhagavad-gita" ? "BG" : prod.id === "truvideo" ? "TV" : "NC";
            const gradient = prod.id === "greatgoga" ? "from-indigo-600 to-violet-600" : prod.id === "bhagavad-gita" ? "from-amber-500 to-orange-600" : prod.id === "truvideo" ? "from-rose-500 to-pink-600" : "from-cyan-500 to-blue-600";
            const detailUrl = prod.id === "truvideo" ? "/products/truvideo-demo" : prod.id === "nckit-demo" ? "/products/nckit-demo" : `/products/${prod.id}`;
            
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-border bg-card/10 hover:border-primary/30 hover:bg-card/25 transition-all flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 blur-2xl pointer-events-none group-hover:scale-110 transition-transform" />
                
                <div className="space-y-6">
                  {/* Top line metadata */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} text-white font-black text-base flex items-center justify-center shadow-md`}>
                      {logo}
                    </div>
                    <div className="flex gap-2">
                      <span className={`text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border ${
                        prod.status === "Released" 
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                          : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                      }`}>
                        {prod.status}
                      </span>
                      <span className="text-[9px] px-2.5 py-0.5 rounded-full font-bold bg-muted border border-border text-muted-foreground font-mono">
                        {prod.version}
                      </span>
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {prod.changelog.added?.[0] || "Native Android showcase application."}
                    </p>
                  </div>

                  {/* Bullet features summary */}
                  <div className="space-y-1.5 pt-2">
                    {(prod.changelog.added || []).slice(0, 2).map((item, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-foreground/80 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mini visual mockup simulation */}
                  <div className="relative h-24 rounded-xl bg-zinc-950 border border-border/80 flex items-center justify-center p-3 font-mono text-[8px] text-zinc-500">
                    <div className="absolute top-1 left-2 text-[6px] text-muted-foreground uppercase">mockup pre-check</div>
                    <span className="text-zinc-400 italic">verified file signature: SHA-256</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/40 mt-8">
                  <a
                    href={prod.downloadUrl}
                    className="flex-grow px-4 py-2.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download APK</span>
                  </a>
                  <Link
                    href={detailUrl}
                    className="px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. SDK Marketplace Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-3xl border border-border bg-card/10 relative overflow-hidden">
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Title column */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
                SDK Releases
              </span>
              <h2 className="text-3xl font-extrabold text-foreground">
                SDK Marketplace
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                Directly integrate our native Android binaries to leverage audio filters, attribution tracking, and telemetry buffers.
              </p>
              <div className="pt-4">
                <Link
                  href="/sdks"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider group"
                >
                  <span>Browse SDK Catalog</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* SDK lists and placeholders */}
            <div className="lg:col-span-8 space-y-6">
              {sdks.map((sdk) => (
                <div key={sdk.id} className="p-6 rounded-2xl border border-border bg-card/25 hover:border-cyan-400/30 transition-all space-y-4 relative group">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-400 transition-colors">{sdk.name}</h3>
                    <div className="flex gap-2 text-[9px]">
                      <span className="px-2 py-0.5 rounded font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        {sdk.status}
                      </span>
                      <span className="px-2 py-0.5 rounded font-bold bg-muted text-muted-foreground border border-border font-mono">
                        {sdk.version}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{sdk.changelog.added?.[0]}</p>
                  <div className="flex items-center gap-6 text-xs pt-2 font-semibold">
                    <Link href={`/documentation?cat=${sdk.id === "nckit-sdk" ? "nckit" : "publishersdk"}`} className="text-primary hover:underline flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Documentation</span>
                    </Link>
                    <a href={sdk.downloadUrl} className="text-cyan-400 hover:underline flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" />
                      <span>Download SDK</span>
                    </a>
                  </div>
                </div>
              ))}

              {/* Future SDK Placeholders */}
              <div className="p-6 rounded-2xl border border-dashed border-border bg-transparent space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Future SDK Placeholders (Coming Soon)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {futureSDKRegistry.map((item) => {
                    let badgeClass = "bg-muted text-muted-foreground border-border";
                    if (item.status === "Coming Soon") badgeClass = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
                    else if (item.status === "Research Phase") badgeClass = "bg-violet-500/10 border-violet-500/20 text-violet-400";
                    else if (item.status === "Planned Release") badgeClass = "bg-amber-500/10 border-amber-500/20 text-amber-400";

                    return (
                      <div key={item.id} className="p-3 rounded-xl border border-border bg-card/5 space-y-1">
                        <div className="flex justify-between items-center gap-2 text-[10px]">
                          <span className="font-bold text-foreground/80">{item.name}</span>
                          <span className={`text-[8px] px-1.5 py-0.5 rounded font-bold border uppercase ${badgeClass}`}>{item.status}</span>
                        </div>
                        <p className="text-[9px] text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Downloads Preview Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Downloads Registry Center</h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto font-light">
            Quickly grab compiled binaries, Android platform APKs, or PDF manual guides.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "APK Downloads", desc: "Direct installers for GreatGoga, Bhagavad Gita, and demonstrative test scopes.", link: "/downloads?filter=app" },
            { title: "SDK Downloads", desc: "Compiled AAR archives containing native compiled shared libraries.", link: "/downloads?filter=sdk" },
            { title: "Documentation Downloads", desc: "PDF integration manuals, JNI memory guidelines, and tracking parameters.", link: "/downloads?filter=doc" },
            { title: "Product Release Notes", desc: "Read structured version changelogs across releases.", link: "/changelog" }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-border bg-card/10 hover:border-primary/25 transition-all flex flex-col justify-between group">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
              <Link href={item.link} className="pt-4 text-xs font-bold text-primary hover:underline flex items-center gap-1 mt-4 cursor-pointer">
                <span>View Downloads</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Documentation Preview Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-3xl border border-border bg-card/20 relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center lg:text-left max-w-xl">
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 px-3.5 py-1.5 rounded-full border border-emerald-400/20">
              Developer Docs Teaser
            </span>
            <h3 className="text-2xl font-bold text-foreground">Stripe-style Documentation Center</h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
              Read comprehensive Gradle scripts, check Manifest declarations, declarations, troubleshooting logs, and JNI memory guidelines with dynamic Java/Kotlin tab switchers.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-[10px] font-mono text-zinc-400 pt-2">
              <span># Gradle Settings</span>
              <span>•</span>
              <span># Engine Init</span>
              <span>•</span>
              <span># Waveform Process</span>
              <span>•</span>
              <span># Proguard Rules</span>
            </div>
          </div>
          <Link
            href="/documentation"
            className="px-6 py-3.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer shrink-0 shadow-lg shadow-primary/20"
          >
            <span>Search Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. R&D Innovation Lab Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-3xl border border-border bg-card/25 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

          <div className="text-center space-y-4 mb-12 max-w-xl mx-auto">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              R&amp;D Innovation Lab
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Active Research &amp; Development</h2>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              We profile native Android OS changes, compile JNI wrappers, compile video compression protocols, and train audio models for real-world scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AI Audio Enhancement", desc: "Denoising algorithms prioritizing vocal clarity parameters.", level: 90 },
              { name: "Noise Cancellation", desc: "Native NDK spectral subtraction filters written in C++.", level: 95 },
              { name: "Speech Processing", desc: "Dynamic bandpass filtration emphasizes vocals under cafeteria hum.", level: 85 },
              { name: "Camera Technologies", desc: "Multi-session CameraX preview stabilizers and zooming filters.", level: 80 },
              { name: "Video Optimization", desc: "Native FFmpeg transcoders, video compressors, and splice utilities.", level: 85 },
              { name: "Media SDK Development", desc: "Telemetry tracking, install referrers, and SQL local caches.", level: 90 },
              { name: "Android Performance Engineering", desc: "Minimizing JNI garbage collections and locks to prevent micro-lags.", level: 95 }
            ].map((area, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-border/80 bg-card/40 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-foreground">{area.name}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{area.desc}</p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[9px] font-bold tracking-wider text-muted-foreground">
                    <span>CAPABILITY LEVEL</span>
                    <span>{area.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${area.level}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Developer Ecosystem Section */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Platform Map
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Ecosystem Flow Diagram</h2>
          <p className="text-xs text-muted-foreground font-light leading-relaxed">
            Discover how our products, attributions SDKs, API documentation, and downloads center link together.
          </p>
        </div>

        {/* Horizontal flow diagram */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto relative font-mono text-[10px]">
          {[
            { step: "Products", desc: "Discover apk builds", color: "from-indigo-600 to-indigo-500" },
            { step: "SDKs", desc: "Declare dependencies", color: "from-cyan-500 to-cyan-400" },
            { step: "Documentation", desc: "Stripe-style API docs", color: "from-emerald-600 to-emerald-500" },
            { step: "Downloads", desc: "Compiled AAR archives", color: "from-amber-500 to-amber-400" },
            { step: "Support", desc: "JNI error debugging", color: "from-rose-500 to-rose-400" }
          ].map((node, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-border bg-card/10 relative group hover:border-primary/20 transition-all flex flex-col justify-center items-center">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${node.color} text-white font-bold flex items-center justify-center mb-3 shadow`}>
                {idx + 1}
              </div>
              <div className="font-bold text-foreground text-xs">{node.step}</div>
              <div className="text-[8px] text-muted-foreground pt-1 leading-tight">{node.desc}</div>
              {idx < 4 && (
                <ChevronRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-border hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. Company Journey Section */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Professional Journey Timeline</h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-md mx-auto">
            History of applications, ad-attribution SDKs, and native C++ audio processing algorithms engineered.
          </p>
        </div>

        <div className="relative border-l-2 border-border pl-8 space-y-12 ml-4">
          {[
            {
              period: "October 2025 – Present",
              company: "5Exceptions Software Solutions",
              role: "SDK Architect / Android Developer",
              desc: "Engineering low-latency noise cancellation layers, video workflow integrations, and camera configurations.",
              responsibilities: [
                "TruVideo Platform Development: custom recording preview screens.",
                "NCKit SDK Development: native JNI compilation bindings.",
                "AI Noise Cancellation Research: vocoders audio enhancements.",
                "Android Media Processing: background threads caching.",
                "SDK Architecture Design: standardized Maven deployment scripts."
              ]
            },
            {
              period: "2022 – 2025",
              company: "Apogaeis Technologies",
              role: "Android Developer / SDK Integrator",
              desc: "Developed client applications, reward-based analytics SDKs, and offline translation database indexing.",
              responsibilities: [
                "Android Development: client Google Auth and Material 3 UI frameworks.",
                "Product Development: GreatGoga gamified referral campaigns.",
                "Mobile Architecture: offline-first Room DB SQLite structures.",
                "SDK Integration: PublisherSDK Google Play Install Referrer bindings."
              ]
            }
          ].map((node, idx) => (
            <div key={idx} className="relative group space-y-4">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary flex items-center justify-center group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-bold rounded-full font-mono">
                  {node.period}
                </span>
                <span className="text-muted-foreground font-semibold text-sm">at {node.company}</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-foreground">{node.role}</h3>
                <p className="text-xs text-muted-foreground font-light max-w-2xl leading-relaxed">{node.desc}</p>
              </div>

              {/* Responsibilities list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {node.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2 text-xs text-muted-foreground font-light leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Trust & Credibility Section */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-4 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Built With</h2>
          <p className="text-xs text-muted-foreground font-light">
            Ecosystem technology stack and architecture frameworks implemented across products.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech) => (
            <div 
              key={tech.name} 
              className="p-5 rounded-2xl border border-border bg-card/10 hover:border-primary/20 hover:bg-card/25 transition-all text-center space-y-1 relative group select-none"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" />
              <div className="font-bold text-foreground text-xs group-hover:text-primary transition-colors">{tech.name}</div>
              <div className="text-[9px] text-muted-foreground leading-normal font-light">{tech.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Metrics Section */}
      <section className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl border border-border bg-card/30 glass-panel">
          {[
            { value: "4", label: "Android Products", icon: Layers },
            { value: "2", label: "Core SDKs Developed", icon: Cpu },
            { value: "4+ Years", label: "Developer Experience", icon: Clock },
            { value: "10+", label: "Android Projects", icon: GitBranch },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center space-y-2 relative group">
                <div className="p-3 mx-auto w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-foreground tracking-tight">
                  <MetricCounter value={stat.value} />
                </div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. Flagship NCKit SDK Spotlight Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-3xl border border-border bg-gradient-to-br from-card/35 via-card/10 to-transparent relative overflow-hidden">
          {/* Top highlight glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Spotlight Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-semibold uppercase tracking-wider animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flagship Media SDK</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-none">
                NCKit Noise Cancellation SDK
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Clean voice buffers on-device with zero server Round Trip Time. Powered by native JNI wrappers and vocal formant preservation algorithms executing under 15ms latency.
              </p>
              
              {/* Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "AI Denoising Audio Filters",
                  "Preserves vocal formant EQ",
                  "Native C++ shared libraries",
                  "Mono & Stereo format conversion"
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-foreground/80 font-light">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Spotlight Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/documentation?cat=nckit"
                  className="px-6 py-3 rounded-xl bg-cyan-400 text-zinc-950 font-bold text-xs flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Documentation</span>
                </Link>
                <a
                  href="/downloads/nckit-sdk-v1.0.0-beta3.aar"
                  className="px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download SDK (.AAR)</span>
                </a>
                <Link
                  href="/products/nckit-demo"
                  className="px-6 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-cyan-500/20"
                >
                  <span>View Sample App</span>
                </Link>
              </div>
            </div>

            {/* Spotlight Graphical Waveform simulator */}
            <div className="lg:col-span-5 p-6 rounded-2xl border border-border bg-zinc-950/65 font-mono text-[9px] text-zinc-400 space-y-4">
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <span className="text-cyan-400 font-bold">● NCKit Engine Active</span>
                <span className="text-[8px]">sample rate: 48kHz</span>
              </div>
              <div className="h-28 w-full flex items-end gap-1.5 justify-center py-2 relative">
                {/* Wave bar animations simulated */}
                {[20, 40, 80, 50, 90, 30, 70, 40, 85, 20, 60, 45, 90, 20].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 rounded-full bg-cyan-400/80" 
                    style={{ height: `${h}%` }} 
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center text-[8px] bg-zinc-950/40 text-white font-sans font-bold">
                  Ambient noise: -34dB (Suppressed)
                </div>
              </div>
              <div className="flex justify-between items-center text-[8px] border-t border-border/40 pt-2 text-muted-foreground">
                <span>Buffer size: 512 frames</span>
                <span>Latency: 12.8ms</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. Contact & Support Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-10 rounded-3xl border border-border bg-gradient-to-br from-card/30 via-card/10 to-transparent space-y-8 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl pointer-events-none" />
          
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Need Technical Integration Support?</h2>
            <p className="text-xs text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
              Our engineering team is ready to assist with PublisherSDK event setups, NCKit custom installations, or enterprise camera configurations.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-xl border border-border bg-card/5 space-y-1">
              <Briefcase className="w-4 h-4 text-primary" />
              <h4 className="text-xs font-bold text-foreground">Business Inquiries</h4>
              <p className="text-[10px] text-muted-foreground font-light leading-relaxed">Partnerships, consulting, and enterprise product licensing deals.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/5 space-y-1">
              <Settings className="w-4 h-4 text-cyan-400" />
              <h4 className="text-xs font-bold text-foreground">Technical Support</h4>
              <p className="text-[10px] text-muted-foreground font-light leading-relaxed">JNI link bugs, attribution events configuration, or compile diagnostics.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/5 space-y-1">
              <Globe className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-bold text-foreground">General support</h4>
              <p className="text-[10px] text-muted-foreground font-light leading-relaxed">Connect on GitHub, LinkedIn, or send an email ticket.</p>
            </div>
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-all cursor-pointer shadow shadow-primary/25"
            >
              Contact Support Portal
            </Link>
            <Link
              href="/documentation"
              className="px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs font-bold transition-all cursor-pointer"
            >
              Developer Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
