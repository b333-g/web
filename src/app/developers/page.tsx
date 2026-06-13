"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Terminal, 
  BookOpen, 
  Layers, 
  Cpu, 
  Workflow, 
  Activity, 
  ShieldCheck, 
  HelpCircle,
  Code,
  Copy,
  CheckCircle,
  FileCode,
  Table
} from "lucide-react";

const sidebarItems = [
  { id: "quickstart", label: "Quick Start", icon: Terminal },
  { id: "integration", label: "Android Integration", icon: Code },
  { id: "samples", label: "Sample Applications", icon: FileCode },
  { id: "compatibility", label: "SDK Compatibility Matrix", icon: Table },
  { id: "bestpractices", label: "Best Practices", icon: ShieldCheck },
  { id: "troubleshooting", label: "Troubleshooting", icon: HelpCircle }
];

const compatibilityMatrix = [
  { sdk: "NCKit Noise Cancellation", ver: "v1.0.0-beta3", android: "Android 8.0+ (API 26)", size: "1.2 MB", tech: "NDK, C++ Core" },
  { sdk: "PublisherSDK Attribution", ver: "v1.5.0", android: "Android 5.0+ (API 21)", size: "180 KB", tech: "Kotlin, SQLite" }
];

export default function DevelopersPage() {
  const [activeSection, setActiveSection] = useState("quickstart");
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative">
      {/* Glow spot */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-12 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Developer Portal</h1>
        <p className="text-sm text-muted-foreground max-w-xl font-light">
          Setup dependencies, review API references, check SDK compatibility tables, and deploy mobile products quickly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground pl-3 mb-2">Documentation Menu</h3>
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 text-xs font-semibold ${
                  isActive
                    ? "border-primary/20 bg-primary/5 text-primary"
                    : "border-border bg-card/25 text-foreground/80 hover:bg-muted/40"
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="lg:col-span-8 p-8 rounded-3xl border border-border bg-card/25 glass-panel min-h-[550px] flex flex-col justify-between">
          
          <div className="space-y-6">
            {/* 1. QUICK START */}
            {activeSection === "quickstart" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Getting Started with Badri Gautam Labs SDKs</h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  Our library bundles are hosted on Maven Central. To fetch active builds, register our repository config path inside your project level `settings.gradle` configurations, then declare dependencies.
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-muted-foreground uppercase">
                    <span>1. Register Maven Repository</span>
                    <button 
                      onClick={() => handleCopy("mavenCentral()\nmaven { url 'https://maven.bg-labs.dev/releases' }", "repo")}
                      className="text-[10px] text-primary hover:underline flex items-center gap-1"
                    >
                      {copiedText === "repo" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedText === "repo" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-border font-mono text-[11px] text-zinc-300">
                    dependencyResolutionManagement &#123;<br />
                    &nbsp;&nbsp;repositories &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;mavenCentral()<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;maven &#123; url &apos;https://maven.bg-labs.dev/releases&apos; &#125;<br />
                    &nbsp;&nbsp;&#125;<br />
                    &#125;
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center text-xs font-bold text-muted-foreground uppercase">
                    <span>2. Add SDK Dependency</span>
                    <button 
                      onClick={() => handleCopy("implementation 'com.badri.nckit:audio-enhance:1.0.0-beta3'", "dep")}
                      className="text-[10px] text-primary hover:underline flex items-center gap-1"
                    >
                      {copiedText === "dep" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedText === "dep" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-border font-mono text-[11px] text-zinc-300">
                    dependencies &#123;<br />
                    &nbsp;&nbsp;// Noise cancellation framework<br />
                    &nbsp;&nbsp;implementation &apos;com.badri.nckit:audio-enhance:1.0.0-beta3&apos;<br /><br />
                    &nbsp;&nbsp;// Attribution telemetry tracker<br />
                    &nbsp;&nbsp;implementation &apos;com.badri.publishersdk:attribution:1.5.0&apos;<br />
                    &#125;
                  </div>
                </div>
              </div>
            )}

            {/* 2. ANDROID INTEGRATION */}
            {activeSection === "integration" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Android Integration Guidelines</h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  Both NCKit and PublisherSDK require minor manifest declaration configurations to listen for network buffers and request hardware audio captures.
                </p>

                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">App Manifest Declarations (`AndroidManifest.xml`)</h3>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-border font-mono text-[11px] text-zinc-300 overflow-x-auto">
                    &lt;manifest xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;&gt;<br />
                    &nbsp;&nbsp;&lt;!-- NCKit audio permissions --&gt;<br />
                    &nbsp;&nbsp;&lt;uses-permission android:name=&quot;android.permission.RECORD_AUDIO&quot; /&gt;<br />
                    &nbsp;&nbsp;&lt;uses-permission android:name=&quot;android.permission.MODIFY_AUDIO_SETTINGS&quot; /&gt;<br /><br />
                    &nbsp;&nbsp;&lt;!-- PublisherSDK attribution permissions --&gt;<br />
                    &nbsp;&nbsp;&lt;uses-permission android:name=&quot;android.permission.INTERNET&quot; /&gt;<br />
                    &nbsp;&nbsp;&lt;uses-permission android:name=&quot;android.permission.ACCESS_NETWORK_STATE&quot; /&gt;<br />
                    &lt;/manifest&gt;
                  </div>
                </div>
              </div>
            )}

            {/* 3. SAMPLES */}
            {activeSection === "samples" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Sample Applications &amp; Projects</h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  We maintain complete target sandbox folders with ready-to-run code showing architectural patterns.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-card/20 space-y-2">
                    <h3 className="text-sm font-bold text-foreground">NCKit Audio Clean Sample</h3>
                    <p className="text-xs text-muted-foreground font-light">Complete Kotlin app with waveform plotting controls and CameraX recording streams.</p>
                    <a href="/downloads" className="text-xs text-primary font-semibold hover:underline block pt-2">Download Sample Apps &rarr;</a>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card/20 space-y-2">
                    <h3 className="text-sm font-bold text-foreground">PublisherSDK Attrib Sample</h3>
                    <p className="text-xs text-muted-foreground font-light">Attribution sandbox triggering test campaign installations and survey metrics.</p>
                    <a href="/downloads" className="text-xs text-primary font-semibold hover:underline block pt-2">Download Sample Apps &rarr;</a>
                  </div>
                </div>
              </div>
            )}

            {/* 4. COMPATIBILITY */}
            {activeSection === "compatibility" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">SDK Compatibility Matrix</h2>
                <div className="overflow-x-auto rounded-xl border border-border bg-zinc-950">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-border bg-muted/20 text-muted-foreground font-bold uppercase">
                        <th className="p-3">SDK Library</th>
                        <th className="p-3">Min Android OS</th>
                        <th className="p-3">AAR Size</th>
                        <th className="p-3">Core Tech</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {compatibilityMatrix.map((row, idx) => (
                        <tr key={idx} className="hover:bg-muted/10 text-foreground/80 font-light">
                          <td className="p-3 font-bold">{row.sdk}</td>
                          <td className="p-3">{row.android}</td>
                          <td className="p-3 font-mono">{row.size}</td>
                          <td className="p-3">{row.tech}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 5. BEST PRACTICES */}
            {activeSection === "bestpractices" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Best Practices for Mobile Products</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed font-light">
                    <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5"><CheckCircle className="w-3.5 h-3.5" /></div>
                    <div>
                      <strong className="text-foreground font-bold">Use Coroutine Contexts:</strong>
                      <p>Do not block Android&apos;s UI thread during audio cleans. Always initiate processing under `Dispatchers.Default` thread contexts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed font-light">
                    <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5"><CheckCircle className="w-3.5 h-3.5" /></div>
                    <div>
                      <strong className="text-foreground font-bold">Proguard Optimization configs:</strong>
                      <p>NCKit uses native JNI code. Register &apos;-keep class com.badri.nckit.** &#123; *; &#125;&apos; configuration inside your app Proguard file.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. TROUBLESHOOTING */}
            {activeSection === "troubleshooting" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Troubleshooting &amp; Support</h2>
                <div className="space-y-3 pl-4">
                  <div className="list-item list-disc text-xs text-muted-foreground font-light leading-relaxed">
                    <strong className="text-foreground font-bold">UnsatisfiedLinkError (NCKit):</strong> Verify your Gradle build supports native compilation targets like `arm64-v8a` and `armeabi-v7a`.
                  </div>
                  <div className="list-item list-disc text-xs text-muted-foreground font-light leading-relaxed">
                    <strong className="text-foreground font-bold">Install referrals not logging:</strong> Confirm that you have registered the `InstallReferrerReceiver` in your Manifest broadcast rules.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Help box */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-border/80 bg-muted/10 text-xs mt-8">
            <span className="text-muted-foreground font-light">Need direct help or custom builds?</span>
            <Link href="/contact" className="text-primary hover:underline font-bold">
              Contact SDK Support &rarr;
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
