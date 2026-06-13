"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, Download, Cpu, GitBranch, Calendar, X, CornerDownLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { versionRegistry } from "@/data/versions";

interface SearchItem {
  id: string;
  category: "Products" | "SDKs" | "Documentation" | "Downloads" | "Changelog" | "Roadmap";
  title: string;
  subtitle: string;
  url: string;
}

export default function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compile search index on load
  const [searchIndex, setSearchIndex] = useState<SearchItem[]>([]);

  useEffect(() => {
    const index: SearchItem[] = [];

    // 1. Index products from version registry
    versionRegistry.filter(v => v.type === "app").forEach(prod => {
      index.push({
        id: `prod_${prod.id}`,
        category: "Products",
        title: prod.name,
        subtitle: `Latest version ${prod.version} - Click to see detail specifications`,
        url: `/products/${prod.id === "truvideo" ? "truvideo-demo" : prod.id === "nckit-demo" ? "nckit-demo" : prod.id}`
      });
    });

    // 2. Index SDKs from version registry
    versionRegistry.filter(v => v.type === "sdk").forEach(sdk => {
      index.push({
        id: `sdk_${sdk.id}`,
        category: "SDKs",
        title: sdk.name,
        subtitle: `Android binary integration libraries (${sdk.version})`,
        url: `/sdks`
      });
    });

    // 3. Index Documentation (static categories matching sections)
    index.push(
      { id: "doc_nckit_setup", category: "Documentation", title: "NCKit Gradle Setup & Installation", subtitle: "Declare dependencies and setup maven repositories", url: "/documentation?cat=nckit&sec=gradle" },
      { id: "doc_nckit_init", category: "Documentation", title: "NCKit Engine Initialization", subtitle: "Initialize native audio engines with configurations", url: "/documentation?cat=nckit&sec=init" },
      { id: "doc_nckit_stream", category: "Documentation", title: "NCKit Audio Stream Processing", subtitle: "Clean raw microphone PCM buffer streams in real-time", url: "/documentation?cat=nckit&sec=pcm" },
      { id: "doc_pub_setup", category: "Documentation", title: "PublisherSDK Integration & Caching", subtitle: "Attribution SDK installation and lifecycle listeners", url: "/documentation?cat=publishersdk&sec=dep" },
      { id: "doc_pub_event", category: "Documentation", title: "PublisherSDK Event Tracking & Surveys", subtitle: "Log attribution metrics and campaign offerwalls", url: "/documentation?cat=publishersdk&sec=setup" },
      { id: "doc_bp_memory", category: "Documentation", title: "Android Best Practices: Memory Optimization", subtitle: "Clean native audio memory pointers and prevent memory leaks", url: "/documentation?cat=bestpractices&sec=memory" },
      { id: "doc_bp_background", category: "Documentation", title: "Android Best Practices: Background Processing", subtitle: "Using WorkManager and Coroutines safely in background tasks", url: "/documentation?cat=bestpractices&sec=background" },
      { id: "doc_bp_media", category: "Documentation", title: "Android Best Practices: Media Handling", subtitle: "ExoPlayer rendering layouts, hardware acceleration, and audio focus", url: "/documentation?cat=bestpractices&sec=media" }
    );

    // 4. Index Downloads
    versionRegistry.forEach(pkg => {
      index.push({
        id: `dl_${pkg.id}`,
        category: "Downloads",
        title: `${pkg.name} (${pkg.version})`,
        subtitle: `Download direct installer archive (${pkg.fileSize})`,
        url: `/downloads`
      });
    });

    // 5. Index Changelog entries
    versionRegistry.forEach(item => {
      index.push({
        id: `change_${item.id}`,
        category: "Changelog",
        title: `${item.name} Version History`,
        subtitle: `Review release notes for version ${item.version}`,
        url: `/changelog`
      });
    });

    // 6. Index Roadmap milestones
    index.push(
      { id: "rm_nckit", category: "Roadmap", title: "Stable NCKit SDK Release", subtitle: "AI core audio cancellation release schedule", url: "/roadmap" },
      { id: "rm_pub", category: "Roadmap", title: "PublisherSDK Attribution Enhancements", subtitle: "Local database caching expansions over gRPC", url: "/roadmap" },
      { id: "rm_camera", category: "Roadmap", title: "Camera Utility SDK Launch", subtitle: "Standardize Google CameraX preview controllers", url: "/roadmap" },
      { id: "rm_video", category: "Roadmap", title: "Video Processing SDK Launch", subtitle: "FFmpeg transcoders and splice services roadmap", url: "/roadmap" },
      { id: "rm_portal", category: "Roadmap", title: "Developer Portal Expansion", subtitle: "License key telemetry tracking configurations", url: "/roadmap" }
    );

    setSearchIndex(index);
  }, []);

  // Keyboard shortcut listener (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8); // Cap at 8 results for cleanliness

    setResults(filtered);
    setSelectedIndex(0);
  }, [query, searchIndex]);

  const handleSelect = (url: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSelect(results[selectedIndex].url);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Products": return <FileText className="w-4 h-4 text-violet-400" />;
      case "SDKs": return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "Documentation": return <FileText className="w-4 h-4 text-emerald-400" />;
      case "Downloads": return <Download className="w-4 h-4 text-primary" />;
      case "Changelog": return <GitBranch className="w-4 h-4 text-amber-400" />;
      case "Roadmap": return <Calendar className="w-4 h-4 text-rose-400" />;
      default: return <Search className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Navbar trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/45 hover:bg-muted/40 transition-colors text-muted-foreground hover:text-foreground text-[10px] sm:text-xs font-semibold cursor-pointer outline-none ml-2"
        title="Search (Ctrl+K)"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Search docs...</span>
        <kbd className="hidden sm:inline-flex items-center h-4 select-none rounded border border-border bg-muted px-1.5 font-mono text-[9px] font-medium text-muted-foreground/60 leading-none">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              ref={containerRef}
              className="w-full max-w-2xl rounded-2xl border border-border bg-zinc-900 shadow-2xl shadow-black/80 flex flex-col overflow-hidden relative z-10"
            >
              {/* Search input line */}
              <div className="flex items-center px-4 py-3.5 border-b border-border/80 gap-3 relative">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  autoFocus
                  placeholder="Type to search products, SDKs, documentation..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none border-none pr-8 font-light"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground absolute right-4 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search results */}
              <div className="max-h-[360px] overflow-y-auto p-2 space-y-1">
                {results.length > 0 ? (
                  results.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.url)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                          isSelected 
                            ? "bg-primary/15 border-l-4 border-l-primary pl-2.5 text-foreground" 
                            : "bg-transparent text-muted-foreground hover:bg-muted/20"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`p-2 rounded-lg ${isSelected ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                            {getCategoryIcon(item.category)}
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-foreground flex items-center gap-2">
                              <span>{item.title}</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold bg-muted text-muted-foreground uppercase border border-border">
                                {item.category}
                              </span>
                            </div>
                            <div className="text-[11px] text-muted-foreground font-light truncate max-w-[420px] pt-0.5">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="flex items-center gap-1 text-[9px] text-muted-foreground bg-muted/65 border border-border px-1.5 py-0.5 rounded font-mono">
                            <span>Select</span>
                            <CornerDownLeft className="w-3 h-3 text-muted-foreground/60" />
                          </div>
                        )}
                      </button>
                    );
                  })
                ) : query.trim() ? (
                  <div className="py-12 text-center text-xs text-muted-foreground font-light">
                    No results found matching &quot;{query}&quot;
                  </div>
                ) : (
                  <div className="py-8 px-4 text-center text-xs text-muted-foreground font-light space-y-3">
                    <p>Search indexing: <strong>Products, SDKs, API Documentation, Download Registry, Changelogs & Roadmap</strong></p>
                    <div className="flex flex-wrap justify-center gap-2.5 pt-2">
                      {["NCKit", "PublisherSDK", "Gita Offline", "GreatGoga", "Installation", "Milestones"].map(tag => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-2.5 py-1 rounded bg-card hover:bg-muted border border-border text-[10px] text-foreground font-semibold cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer hotkeys bar */}
              <div className="px-4 py-2 bg-muted/25 border-t border-border/80 flex justify-between items-center text-[10px] text-muted-foreground font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><kbd className="px-1 bg-muted rounded border border-border">↑↓</kbd> Navigation</span>
                  <span className="flex items-center gap-1"><kbd className="px-1 bg-muted rounded border border-border">Enter</kbd> Open URL</span>
                </div>
                <span>ESC to Close</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
