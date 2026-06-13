"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Smartphone, Database, Globe, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Android Developer",
    company: "5Exceptions Software Solutions Pvt Ltd",
    location: "Indore, India",
    period: "May 2023 - Present",
    desc: "Architecting native Android solutions and customizable SDK modules. Integrated complex video telemetry payloads and live streams. Optimized memory profile, frame draw speeds with Jetpack Compose custom states, and maintained a stable 99.9% crash-free build.",
    icon: Briefcase,
  },
  {
    role: "Android Developer",
    company: "Underscore Technology Private Limited",
    location: "Indore, India",
    period: "Jan 2022 - Apr 2023",
    desc: "Designed and implemented Kotlin client applications in an MVVM paradigm. Created clean REST connectivity using Retrofit, local storage caches with Room Database, and background tasks scheduling with Coroutines & WorkManager.",
    icon: Briefcase,
  },
];

const skillsData = [
  {
    category: "Languages & Core",
    icon: Smartphone,
    skills: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "Coroutines", "Flow", "Material Design 3"],
  },
  {
    category: "Architecture & Data",
    icon: Database,
    skills: ["MVVM Architecture", "Room Database", "Hilt (Dependency Injection)", "Retrofit / OkHttp", "REST API Systems", "Clean Architecture"],
  },
  {
    category: "Integrations & Tools",
    icon: Globe,
    skills: ["Firebase Services", "Gradle Bundles", "Git & GitHub CI/CD", "JUnit & MockK Testing", "SDK Implementations", "Android Profiler"],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-12 relative overflow-hidden bg-background">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/5 border border-primary/20 px-3.5 py-1.5 rounded-full"
          >
            My Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mt-4 dark:gradient-text-metallic"
          >
            About Badri Gautam
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bio & Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left: Avatar Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-[320px]">
              {/* Backing neon border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-violet-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition-all duration-300" />
              
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-border bg-card shadow-2xl glow-border-card">
                <Image
                  src="/images/avatar.png"
                  alt="Badri Gautam Portrait"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-md) 100vw, 320px"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-5 glass-panel py-3 px-5 rounded-2xl shadow-2xl border border-white/5"
              >
                <div className="text-2xl font-black bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">3+ Years</div>
                <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider">
                  Android Expertise
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Detailed bio and Experience timeline */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="font-display text-2xl font-bold text-foreground">
                Engineering clean, high-performance Android codebases.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm font-light">
                I am a passionate Android Developer specializing in building robust SDK products and highly interactive native applications. I love organizing projects around Clean Architecture guidelines, ensuring every layer is decoupleable, mockable, and performance-profiled.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm font-light">
                My everyday toolkit centers around Kotlin, Hilt dependency injection, Coroutines for smooth background syncing, and Jetpack Compose for creating modern interfaces.
              </p>
            </motion.div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span>Professional Experience</span>
              </h3>

              <div className="relative border-l-2 border-border/80 pl-6 ml-3 space-y-8">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Node Circle */}
                    <div className="absolute -left-[32px] top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background group-hover:scale-125 transition-transform" />
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <span className="inline-flex items-center gap-1 text-primary font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground font-medium">{exp.location}</span>
                    </div>

                    <h4 className="text-base font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {exp.role} <span className="font-medium text-muted-foreground">at {exp.company}</span>
                    </h4>

                    <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed font-light">
                      {exp.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Skills Board */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-xl font-bold text-center text-foreground mb-8">
            Skills &amp; Toolkit
          </h3>

          {/* Skill Selector Tabs */}
          <div className="flex justify-center border-b border-border/60 mb-8 overflow-x-auto pb-1.5 max-w-md mx-auto">
            {skillsData.map((data, idx) => {
              const Icon = data.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-5 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap tracking-wider uppercase ${
                    activeTab === idx
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{data.category}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {skillsData[activeTab].skills.map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
                className="py-3 px-4 rounded-xl border border-border/80 bg-card/40 flex items-center justify-center text-center text-xs font-semibold text-foreground/80 hover:text-primary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all select-none cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
