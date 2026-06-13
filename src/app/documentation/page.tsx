"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Search, 
  Terminal, 
  Check, 
  Copy, 
  CheckCircle, 
  Settings, 
  Database, 
  Video, 
  Cpu 
} from "lucide-react";

const docCategories = [
  {
    id: "nckit",
    name: "NCKit SDK Docs",
    icon: Cpu,
    versions: ["v1.0.0-beta3", "v1.0.0-beta1"],
    sections: [
      {
        title: "Gradle Installation",
        desc: "Add NCKit dependency to your module level gradle configuration.",
        code: {
          kotlin: `dependencies {\n    implementation("com.badri.nckit:audio-enhance:1.0.0-beta3")\n}`,
          java: `dependencies {\n    implementation 'com.badri.nckit:audio-enhance:1.0.0-beta3'\n}`
        }
      },
      {
        title: "Engine Initialization",
        desc: "Initialize the NCKit audio engine with custom configs inside your Application class.",
        code: {
          kotlin: `import com.badri.nckit.NCKitEngine\nimport com.badri.nckit.NoiseFilterConfig\n\nval config = NoiseFilterConfig.Builder()\n    .setNoiseSuppressionLevel(NoiseFilterConfig.Level.HIGH)\n    .enableVocalBoost(true)\n    .build()\n\nNCKitEngine.initialize(this, config)`,
          java: `import com.badri.nckit.NCKitEngine;\nimport com.badri.nckit.NoiseFilterConfig;\n\nNoiseFilterConfig config = new NoiseFilterConfig.Builder()\n    .setNoiseSuppressionLevel(NoiseFilterConfig.Level.HIGH)\n    .enableVocalBoost(true)\n    .build();\n\nNCKitEngine.initialize(this, config);`
        }
      },
      {
        title: "PCM Buffer Filtering",
        desc: "Read raw PCM bytes, apply noise cancellation filters, and process the cleaned output buffer stream.",
        code: {
          kotlin: `val streamFilter = NCKitEngine.createStreamFilter()\nstreamFilter.startProcessing(audioBuffer) { cleanedBytes ->\n    // Send cleaned output over network\n}`,
          java: `StreamFilter streamFilter = NCKitEngine.createStreamFilter();\nstreamFilter.startProcessing(audioBuffer, new StreamFilterListener() {\n    @Override\n    public void onProcessed(byte[] cleanedBytes) {\n        // Send cleaned output over network\n    }\n});`
        }
      }
    ]
  },
  {
    id: "publishersdk",
    name: "PublisherSDK Docs",
    icon: Database,
    versions: ["v1.5.0", "v1.4.2"],
    sections: [
      {
        title: "Add Attribution Dependency",
        desc: "Register PublisherSDK attribution libraries inside your gradle compile dependencies.",
        code: {
          kotlin: `dependencies {\n    implementation("com.badri.publishersdk:attribution:1.5.0")\n}`,
          java: `dependencies {\n    implementation 'com.badri.publishersdk:attribution:1.5.0'\n}`
        }
      },
      {
        title: "Attribution Listener Setup",
        desc: "Set app identifiers and dynamic referrer trackers.",
        code: {
          kotlin: `import com.badri.publishersdk.PublisherClient\n\nPublisherClient.init(context, appId = "bg_labs_publish_9924") {\n    // Install attribution callback completed\n}`,
          java: `import com.badri.publishersdk.PublisherClient;\nimport com.badri.publishersdk.AttributionCallback;\n\nPublisherClient.init(context, "bg_labs_publish_9924", new AttributionCallback() {\n    @Override\n    public void onComplete() {\n        // Install attribution callback completed\n    }\n});`
        }
      }
    ]
  },
  {
    id: "truvideo",
    name: "TruVideo SDK Integration",
    icon: Video,
    versions: ["v2.1", "v2.0"],
    sections: [
      {
        title: "Camera Integration Setup",
        desc: "Bind custom CameraX workflows to capture preview configurations.",
        code: {
          kotlin: `import com.badri.truvideo.TruCameraManager\n\nval cameraManager = TruCameraManager.Builder(context)\n    .enableStabilization(true)\n    .setResolution(TruCameraManager.Resolution.R_1080P)\n    .build()\n\ncameraManager.bindToLifecycle(lifecycleOwner)`,
          java: `import com.badri.truvideo.TruCameraManager;\n\nTruCameraManager cameraManager = new TruCameraManager.Builder(context)\n    .enableStabilization(true)\n    .setResolution(TruCameraManager.Resolution.R_1080P)\n    .build();\n\ncameraManager.bindToLifecycle(lifecycleOwner);`
        }
      }
    ]
  }
];

export default function DocumentationPage() {
  const [selectedCat, setSelectedCat] = useState(docCategories[0]);
  const [selectedVer, setSelectedVer] = useState(docCategories[0].versions[0]);
  const [selectedLang, setSelectedLang] = useState<"kotlin" | "java">("kotlin");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedTextId, setCopiedTextId] = useState("");

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedTextId(id);
    setTimeout(() => setCopiedTextId(""), 2000);
  };

  // Filter sections by search query
  const filteredSections = selectedCat.sections.filter(sec => 
    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-12 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Documentation Center</h1>
        <p className="text-sm text-muted-foreground max-w-xl font-light">
          Copy code configurations, read guides, and toggle language views for mobile product engines.
        </p>
      </div>

      {/* Controls Bar: Search, Category Selector, Language Toggle, Version Selector */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl border border-border bg-card/20 mb-8">
        
        {/* Search */}
        <div className="md:col-span-4 relative">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card/45 text-foreground placeholder:text-muted-foreground text-xs outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
          />
        </div>

        {/* Tab Selection buttons */}
        <div className="md:col-span-5 flex flex-wrap gap-2 justify-center md:justify-start">
          {docCategories.map((cat) => {
            const Icon = cat.icon;
            const isCatActive = selectedCat.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCat(cat);
                  setSelectedVer(cat.versions[0]);
                }}
                className={`px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  isCatActive 
                    ? "border-primary/20 bg-primary/10 text-primary" 
                    : "border-border bg-card/30 text-foreground/80 hover:bg-muted/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Lang & Version Selectors */}
        <div className="md:col-span-3 flex gap-3 justify-end">
          {/* Kotlin / Java switcher */}
          <div className="p-1 rounded-xl border border-border bg-card/35 flex gap-1 items-center">
            {["kotlin", "java"].map((l) => (
              <button
                key={l}
                onClick={() => setSelectedLang(l as "kotlin" | "java")}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase cursor-pointer transition-all ${
                  selectedLang === l 
                    ? "bg-primary text-primary-foreground shadow" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Version Selector */}
          <select
            value={selectedVer}
            onChange={(e) => setSelectedVer(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-border bg-card/35 text-xs text-foreground outline-none font-mono focus:border-primary/40 cursor-pointer"
          >
            {selectedCat.versions.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Main Documentation view */}
      <div className="space-y-8">
        {filteredSections.length > 0 ? (
          filteredSections.map((sec, idx) => {
            const currentCode = selectedLang === "kotlin" ? sec.code.kotlin : sec.code.java;
            const codeBlockId = `${selectedCat.id}_${idx}`;
            return (
              <div 
                key={idx} 
                className="p-8 rounded-3xl border border-border bg-card/10 glass-panel space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">{sec.title}</h3>
                  <p className="text-xs text-muted-foreground font-light">{sec.desc}</p>
                </div>

                {/* Code Block Container */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center bg-muted/40 px-4 py-2.5 rounded-t-xl border-x border-t border-border/60">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-primary" />
                      <span>{selectedLang} source code ({selectedVer})</span>
                    </span>
                    <button
                      onClick={() => handleCopy(currentCode, codeBlockId)}
                      className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer flex items-center gap-1 text-[10px]"
                    >
                      {copiedTextId === codeBlockId ? (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedTextId === codeBlockId ? "Copied" : "Copy Code"}</span>
                    </button>
                  </div>
                  <div className="p-4 rounded-b-xl bg-zinc-950 border-x border-b border-border/60 overflow-x-auto">
                    <pre className="text-[11px] font-mono text-zinc-300 leading-relaxed">
                      <code>{currentCode}</code>
                    </pre>
                  </div>
                </div>

              </div>
            );
          })
        ) : (
          <div className="p-16 text-center rounded-3xl border border-dashed border-border bg-card/5 space-y-2">
            <Settings className="w-10 h-10 text-muted-foreground mx-auto animate-spin" />
            <h3 className="text-sm font-bold text-foreground">No sections match your search query</h3>
            <p className="text-xs text-muted-foreground font-light">Try searching for keywords like &apos;initialization&apos;, &apos;gradle&apos;, or &apos;buffer&apos;.</p>
          </div>
        )}
      </div>

    </div>
  );
}
