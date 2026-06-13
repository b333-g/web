"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, ShieldCheck, PlayCircle, Bot, Cpu } from "lucide-react";

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

const categories = ["All", "SDK Integration", "Enterprise Apps", "Media Players", "AI & Cloud", "Libraries"];

const projectsData = [
  {
    title: "TruVideo SDK Demo App",
    desc: "A client application demonstrating TruVideo SDK integrations, featuring optimized media uploads, low-latency video streaming, and robust analytics logging.",
    category: "SDK Integration",
    tags: ["Kotlin", "Android SDK", "TruVideo SDK", "Coroutines"],
    image: "/images/project1.png",
    demoLink: "https://github.com",
    githubLink: "https://github.com",
    icon: ShieldCheck,
  },
  {
    title: "Inventory Management App",
    desc: "An enterprise Android solution for scanning, tracking, and cataloging warehouse stock in real-time. Features offline-first synchronizations.",
    category: "Enterprise Apps",
    tags: ["Kotlin", "Jetpack Compose", "Room Database", "Hilt"],
    image: "/images/project2.png",
    demoLink: "https://github.com",
    githubLink: "https://github.com",
    icon: Layers,
  },
  {
    title: "Media Streaming Android App",
    desc: "A highly-optimized media player rendering adaptive HLS feeds. Supports Picture-in-Picture mode, audio track selections, and foreground service players.",
    category: "Media Players",
    tags: ["Kotlin", "ExoPlayer", "MVVM", "Compose"],
    image: "/images/project3.png",
    demoLink: "https://github.com",
    githubLink: "https://github.com",
    icon: PlayCircle,
  },
  {
    title: "AI-powered Android Assistant",
    desc: "An intelligent, context-aware mobile assistant app integrating Gemini API. Supports voice command parsing, markdown chat feeds, and scheduled triggers.",
    category: "AI & Cloud",
    tags: ["Kotlin", "Retrofit", "Firebase", "Gemini API"],
    image: "/images/project4.png",
    demoLink: "https://github.com",
    githubLink: "https://github.com",
    icon: Bot,
  },
  {
    title: "Compose UI Component Library",
    desc: "A lightweight, open-source Jetpack Compose library offering developers pre-built physics animations, glassy panels, and customized graphics shapes.",
    category: "Libraries",
    tags: ["Kotlin", "Jetpack Compose", "Canvas", "Gradle"],
    image: "/images/project5.png",
    demoLink: "https://github.com",
    githubLink: "https://github.com",
    icon: Cpu,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === "All") return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="py-12 relative bg-background">
      {/* Decorative Glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/5 border border-primary/20 px-3.5 py-1.5 rounded-full"
          >
            My Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mt-4 dark:gradient-text-metallic"
          >
            Android Projects Showcase
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-light text-xs">
            Explore 5 premium Android applications and SDK products engineered using Kotlin, Jetpack Compose, and modern architecture.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4.5 py-2.5 rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all duration-350 border cursor-pointer whitespace-nowrap ${
                activeFilter === cat
                  ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card hover:bg-muted border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const Icon = proj.icon;
              return (
                <motion.article
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 glow-border-card"
                >
                  {/* Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      sizes="(max-w-md) 100vw, (max-w-lg) 50vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle black overlay on hover */}
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    {/* Floating top project category icon */}
                    <div className="absolute top-3.5 right-3.5 p-2 rounded-xl glass-panel border border-white/10 text-primary z-20 shadow-lg shadow-black/20">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2.5">
                      <span className="text-[9px] font-bold tracking-widest text-primary/80 uppercase">
                        {proj.category}
                      </span>
                      <h3 className="font-display text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-light">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[9px] font-semibold rounded bg-muted text-muted-foreground border border-border/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 pt-3.5 border-t border-border/60">
                        <a
                          href={proj.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={proj.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
