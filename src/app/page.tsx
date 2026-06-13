"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Maximize2,
  Smartphone,
  CheckCircle,
  Play
} from "lucide-react";
import Hero from "@/components/Hero";

const stats = [
  { value: "4+", label: "Android Products", icon: Layers },
  { value: "2+", label: "Core SDKs Developed", icon: Cpu },
  { value: "100+", label: "Feature Releases", icon: GitBranch },
  { value: "2022", label: "Journey Started", icon: Clock },
];

const featuredProducts = [
  {
    id: "greatgoga",
    name: "GreatGoga",
    logo: "GG",
    status: "Released",
    version: "v2.4.0",
    desc: "A reward-based engagement platform and interactive game ecosystem designed to help users monetize time through gamified micro-tasks and referral workflows.",
    tech: ["Kotlin", "Firebase", "gRPC", "Room DB", "Material 3"],
    downloadLink: "/downloads",
    learnMoreLink: "/products"
  },
  {
    id: "bhagavad-gita",
    name: "Bhagavad Gita App",
    logo: "BG",
    status: "Released",
    version: "v1.8.0",
    desc: "A highly optimized, fully offline Android application delivering Sanskrit and English translations of the Gita with search functionality and multiple customizable layouts.",
    tech: ["Java", "SQLite", "XML", "Retrofit"],
    downloadLink: "/downloads",
    learnMoreLink: "/products"
  },
  {
    id: "truvideo",
    name: "TruVideo Demo App",
    logo: "TV",
    status: "Active Development",
    version: "v2.1.2",
    desc: "An enterprise showcase application displaying robust camera capture controls, presentation mode options, and native video processing pipelines.",
    tech: ["Kotlin", "CameraX", "Video Processing", "SaaS SDK"],
    downloadLink: "/downloads",
    learnMoreLink: "/products"
  },
  {
    id: "nckit-demo",
    name: "NCKit Audio Demo",
    logo: "NC",
    status: "Active Development",
    version: "v1.0.0-beta",
    desc: "Demonstration application for testing AI-powered noise reduction, speech clarity, and real-time environment audio cleaning models in real-world scenarios.",
    tech: ["Kotlin", "NCKit Core", "Audio Processing", "FFmpeg"],
    downloadLink: "/downloads",
    learnMoreLink: "/products"
  }
];

const sdkMarketplace = [
  {
    name: "NCKit – Noise Cancellation",
    version: "v1.0.0-beta3",
    status: "Active Development",
    desc: "AI-powered Speech Enhancement and Audio Cleanup SDK. Filters ambient noise, handles long-duration audio, and enhances vocal clarity with low latency.",
    docsLink: "/documentation",
    downloadLink: "/downloads",
    changelogLink: "/changelog"
  },
  {
    name: "PublisherSDK – Ad-Tech Metrics",
    version: "v1.5.0",
    status: "Released",
    desc: "Custom lightweight attribution SDK optimizing user acquisition, impression tracking, retention metrics, and offerwall campaign reward hooks.",
    docsLink: "/documentation",
    downloadLink: "/downloads",
    changelogLink: "/changelog"
  }
];

const futureSDKs = [
  "Camera Utilities SDK (CameraX wraps)",
  "Media Processing SDK (FFmpeg optimization)",
  "Video Enhancement SDK (AI upscaling)",
  "Analytics SDK (High telemetry buffering)",
  "Enterprise Workflow SDK (Local syncing)"
];

const benefits = [
  { title: "Easy Integration", desc: "Single line Gradle installation script with lightweight Kotlin dependencies.", icon: Zap },
  { title: "Production Ready", desc: "Maintains a 99.9% crash-free rate across millions of active test instances.", icon: ShieldCheck },
  { title: "Android Native", desc: "Engineered specifically in Kotlin/Java to leverage low-level OS threading.", icon: Smartphone },
  { title: "Enterprise Focused", desc: "Includes offline data sync, telemetry logging, and robust API contracts.", icon: Layers },
  { title: "Detailed Docs", desc: "Fully documentated API methods, copy-paste integrations, and samples.", icon: BookOpen },
  { title: "Active Development", desc: "Frequent updates, patch logs, and new platform capabilities.", icon: Activity },
  { title: "Long-Term Support", desc: "Consistent version support matching modern Google API guidelines.", icon: CheckCircle2 },
  { title: "Developer Friendly", desc: "Clean types, descriptive logs, and simple initialization interfaces.", icon: Terminal }
];

const researchAreas = [
  { name: "Noise Cancellation", desc: "Real-time spectral subtraction and deep AI audio denoising filters.", level: 90 },
  { name: "Speech Enhancement", desc: "Audio equalization models to emphasize vocal formats over noise.", level: 85 },
  { name: "Camera Technologies", desc: "Custom camera sessions, dynamic frame capture, and metadata payload syncing.", level: 80 },
  { name: "Media Processing", desc: "Low-overhead audio/video splicing, compression, and encoding pipelines.", level: 85 },
  { name: "Android SDK Tooling", desc: "Attribution engines, telemetry buffers, and background service optimization.", level: 95 },
  { name: "Enterprise Mobility", desc: "Device administrator configurations and secure local database caches.", level: 75 }
];

const timelineData = [
  {
    period: "2022 – 2025",
    company: "Apogaeis",
    role: "Android Developer / SDK Integrator",
    desc: "Led design and coding of client applications, reward-based analytics SDKs, and offline translation databases.",
    projects: [
      { name: "GreatGoga Platform", desc: "Monetisation ecosystem with referral engines and gRPC syncing." },
      { name: "PublisherSDK", desc: "Ad-Tech telemetry tracker monitoring impressions and retention." },
      { name: "Bhagavad Gita App", desc: "Offline Sanskrit text library with custom SQLite caching." }
    ],
    achievements: ["Complete Android Apps", "Custom SDK Development", "gRPC Communications", "Ad-tech Integrations"]
  },
  {
    period: "2025 – Present",
    company: "5Exceptions Software Solutions",
    role: "SDK Engineer / Android Developer",
    desc: "Designing low-latency noise cancellation layers, video workflow mockups, and camera configurations.",
    projects: [
      { name: "NCKit Noise Cancellation", desc: "AI-driven real-time audio clean and enhancement SDK." },
      { name: "TruVideo Platform Demo", desc: "Enterprise presentation screens and recording workflows." },
      { name: "Enterprise Android Tools", desc: "Custom administrative services and local cache buffers." }
    ],
    achievements: ["AI Audio Processing", "CameraX Integrations", "Media Splicing Pipelines", "Presentation Controls"]
  }
];

const roadmapItems = [
  { year: "Q1 2026", task: "NCKit SDK Stable Release (AI Core)", status: "In Progress" },
  { year: "Q2 2026", task: "Camera Utility SDK Launch (Modern CameraX)", status: "Planned" },
  { year: "Q2 2026", task: "Media Processing SDK (FFmpeg optimized)", status: "Planned" },
  { year: "Q3 2026", task: "AI Video Enhancement Toolkit", status: "Planned" },
  { year: "Q4 2026", task: "Developer Marketplace & Self-service Keys", status: "Planned" }
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* 1. Hero Landing Fold */}
      <Hero />

      {/* 2. Platform Statistics Section */}
      <section className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl border border-border bg-card/30 glass-panel">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center space-y-2 relative group">
                <div className="p-3 mx-auto w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-foreground tracking-tight">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Featured Ecosystems
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Android Applications &amp; Demo Platforms
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto font-light">
            Download our native APK releases or explore test beds showcasing high-performance Android solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-card/20 hover:border-primary/30 hover:bg-card/40 transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all pointer-events-none" />
              
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-violet-500 text-primary-foreground font-black text-lg flex items-center justify-center shadow-lg shadow-primary/20">
                    {prod.logo}
                  </div>
                  <div className="flex gap-2">
                    <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border ${
                      prod.status === "Released" 
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                    }`}>
                      {prod.status}
                    </span>
                    <span className="text-[10px] px-2.5 py-1 rounded-full font-bold bg-muted border border-border text-muted-foreground">
                      {prod.version}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {prod.name}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {prod.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {prod.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-muted/60 text-muted-foreground font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-border/40 mt-8">
                <Link
                  href={prod.downloadLink}
                  className="flex-grow px-5 py-3 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK</span>
                </Link>
                <Link
                  href={prod.learnMoreLink}
                  className="px-5 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SDK Marketplace Preview */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-3xl border border-border bg-card/10 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
                SDK Releases
              </span>
              <h2 className="text-3xl font-extrabold text-foreground">
                SDK Marketplace
              </h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Directly integrate our native Android binaries to leverage audio filters, telemetry, and background services in your production code.
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

            <div className="lg:col-span-8 space-y-6">
              {sdkMarketplace.map((sdk, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-border/80 bg-card/30 hover:border-cyan-400/30 transition-all space-y-4 relative group">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-400 transition-colors">{sdk.name}</h3>
                    <div className="flex gap-2 text-[10px]">
                      <span className="px-2.5 py-0.5 rounded font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        {sdk.status}
                      </span>
                      <span className="px-2.5 py-0.5 rounded font-bold bg-muted text-muted-foreground border border-border">
                        {sdk.version}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{sdk.desc}</p>
                  <div className="flex items-center gap-6 text-xs pt-2">
                    <Link href={sdk.docsLink} className="text-primary hover:underline font-semibold flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Documentation</span>
                    </Link>
                    <Link href={sdk.downloadLink} className="text-cyan-400 hover:underline font-semibold flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" />
                      <span>Download .AAR</span>
                    </Link>
                    <Link href={sdk.changelogLink} className="text-muted-foreground hover:underline font-semibold flex items-center gap-1">
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>Changelog</span>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Future SDKs panel */}
              <div className="p-6 rounded-2xl border border-dashed border-border bg-transparent space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Future SDK Releases (Coming Soon)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {futureSDKs.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-border" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Our SDKs */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Why Choose Our SDKs</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto font-light">
            Engineered with a developer-first approach, prioritizing low overhead, rich analytics, and ease of use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((ben, idx) => {
            const Icon = ben.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-card/10 flex flex-col space-y-3 hover:border-primary/20 transition-all">
                <div className="p-3 w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">{ben.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{ben.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Innovation Lab */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-3xl border border-border bg-card/25 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

          <div className="text-center space-y-4 mb-12 max-w-xl mx-auto">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              R&amp;D Innovation Lab
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Active Research &amp; Development</h2>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              We actively profile new Android API changes, train lightweight AI models for on-device processing, and construct low-overhead streaming codecs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, idx) => (
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

      {/* 7. Professional Journey Timeline */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Ecosystem Evolution Timeline</h2>
          <p className="text-sm text-muted-foreground font-light max-w-md mx-auto">
            The historical timeline of applications, Attributions, and Audio enhancement SDKs developed.
          </p>
        </div>

        <div className="relative border-l-2 border-border pl-8 space-y-12 ml-4">
          {timelineData.map((node, idx) => (
            <div key={idx} className="relative group space-y-4">
              {/* Outer Indicator node */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary flex items-center justify-center group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-bold rounded-full">
                  {node.period}
                </span>
                <span className="text-muted-foreground font-semibold text-sm">at {node.company}</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-foreground">{node.role}</h3>
                <p className="text-xs text-muted-foreground font-light max-w-2xl leading-relaxed">{node.desc}</p>
              </div>

              {/* Projects List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {node.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="p-4 rounded-xl border border-border bg-card/10 space-y-1 group/proj hover:border-primary/20 transition-all">
                    <h4 className="text-xs font-bold text-foreground group-hover/proj:text-primary transition-colors">{proj.name}</h4>
                    <p className="text-[10px] text-muted-foreground font-light leading-relaxed">{proj.desc}</p>
                  </div>
                ))}
              </div>

              {/* Achievements Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {node.achievements.map((ach) => (
                  <span key={ach} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border uppercase">
                    ✓ {ach}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Roadmap Preview Section */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="p-8 rounded-3xl border border-border bg-card/10 flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground">Milestones Roadmap (2026)</h3>
            <p className="text-xs text-muted-foreground font-light max-w-sm">
              Follow our upcoming product rollouts, telemetry enhancements, and modular SDK expansions.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-2 max-w-md flex-grow">
            {roadmapItems.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-border/60 bg-card/30 text-xs">
                <span className="font-semibold text-foreground/80">{item.task}</span>
                <span className="px-2 py-0.5 rounded font-bold uppercase text-[9px] bg-primary/10 border border-primary/20 text-primary">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/roadmap"
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>View Full Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 9. Contact / Help Callout Box */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="p-10 rounded-3xl border border-border bg-gradient-to-br from-card/30 via-card/10 to-transparent space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl pointer-events-none" />
          <h2 className="text-2xl font-bold text-foreground">Need Technical Integration Support?</h2>
          <p className="text-xs text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
            Our engineering team is ready to assist with PublisherSDK campaign setups, custom NCKit integrations, or enterprise camera configurations.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-all cursor-pointer"
            >
              Contact Support
            </Link>
            <Link
              href="/developers"
              className="px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs font-bold transition-all cursor-pointer"
            >
              Developer Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
