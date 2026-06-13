"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Search, 
  Terminal, 
  Check, 
  Copy, 
  CheckCircle, 
  BookOpen, 
  Cpu, 
  Database, 
  ShieldAlert,
  ChevronRight,
  Code,
  Sparkles,
  Info
} from "lucide-react";

interface DocSection {
  id: string;
  title: string;
  desc: string;
  code?: {
    kotlin: string;
    java: string;
  };
  details?: string[];
}

interface DocCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  sections: DocSection[];
}

const docData: DocCategory[] = [
  {
    id: "nckit",
    name: "NCKit Documentation",
    icon: Cpu,
    sections: [
      {
        id: "installation",
        title: "Installation Guide",
        desc: "NCKit Android library bundles are hosted on Maven Central and our custom release repository. Register our Maven endpoint inside your project settings.",
        code: {
          kotlin: `// settings.gradle.kts
dependencyResolutionManagement {
    repositories {
        mavenCentral()
        maven { url = uri("https://maven.badritech.dev/releases") }
    }
}`,
          java: `// settings.gradle
dependencyResolutionManagement {
    repositories {
        mavenCentral();
        maven { url 'https://maven.badritech.dev/releases' }
    }
}`
        },
        details: [
          "Requires Android API Level 26 (Android 8.0) or higher.",
          "Supports ARMv7 and ARMv8 (64-bit) architectures.",
          "Bundled native C++ libraries total less than 1.2 MB after compression."
        ]
      },
      {
        id: "gradle",
        title: "Gradle Setup",
        desc: "Add NCKit audio enhancement dependencies inside your app-level build gradle configuration file.",
        code: {
          kotlin: `// app/build.gradle.kts
dependencies {
    implementation("com.badri.nckit:audio-enhance:1.0.0-beta3")
}`,
          java: `// app/build.gradle
dependencies {
    implementation 'com.badri.nckit:audio-enhance:1.0.0-beta3'
}`
        },
        details: [
          "Ensure your project uses Gradle 8.0+ and Kotlin 1.9+.",
          "No additional native dependencies are required; NCKit builds automatically link standard library binaries."
        ]
      },
      {
        id: "init",
        title: "Engine Initialization",
        desc: "Initialize NCKit audio processing engine inside your custom Application class prior to capturing microphone signals.",
        code: {
          kotlin: `import com.badri.nckit.NCKitEngine
import com.badri.nckit.NoiseFilterConfig

class BGApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        
        val config = NoiseFilterConfig.Builder()
            .setNoiseSuppressionLevel(NoiseFilterConfig.Level.HIGH)
            .enableVocalBoost(true)
            .build()
            
        NCKitEngine.initialize(this, config)
    }
}`,
          java: `import com.badri.nckit.NCKitEngine;
import com.badri.nckit.NoiseFilterConfig;

public class BGApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        
        NoiseFilterConfig config = new NoiseFilterConfig.Builder()
            .setNoiseSuppressionLevel(NoiseFilterConfig.Level.HIGH)
            .enableVocalBoost(true)
            .build();
            
        NCKitEngine.initialize(this, config);
    }
}`
        },
        details: [
          "Vocal Boost EQ leverages bandpass filtration to improve vocal clarity.",
          "Level configs range from LOW, MEDIUM to HIGH noise suppression ratios."
        ]
      },
      {
        id: "processing",
        title: "Processing Flow",
        desc: "Read raw PCM microphone byte frames and push them through the NCKit real-time stream filter loop in a background thread.",
        code: {
          kotlin: `import com.badri.nckit.NCKitEngine
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

val streamFilter = NCKitEngine.createStreamFilter()

suspend fun processAudio(rawBytes: ByteArray) = withContext(Dispatchers.Default) {
    streamFilter.startProcessing(rawBytes) { cleanedBytes ->
        // Clean PCM audio buffers returned ready for transmission or playback
        transmitAudioOverWebRTC(cleanedBytes)
    }
}`,
          java: `import com.badri.nckit.NCKitEngine;
import com.badri.nckit.StreamFilter;
import com.badri.nckit.StreamFilterListener;

StreamFilter streamFilter = NCKitEngine.createStreamFilter();

public void processAudio(byte[] rawBytes) {
    // Run on a separate background thread executor to prevent UI lags
    audioExecutor.execute(() -> {
        streamFilter.startProcessing(rawBytes, new StreamFilterListener() {
            @Override
            public void onProcessed(byte[] cleanedBytes) {
                transmitAudioOverWebRTC(cleanedBytes);
            }
        });
    });
}`
        },
        details: [
          "Processing latency is optimized to run under 15ms buffer delay.",
          "PCM format supported: 16-bit Mono, sampling rate 48kHz recommended."
        ]
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting & Bugs",
        desc: "Resolve native linking errors, CPU scheduler issues, or audio track micro-stutters.",
        details: [
          "UnsatisfiedLinkError: Ensure your gradle specifies 'ndk.abiFilters' containing 'arm64-v8a' and 'armeabi-v7a'. NCKit utilizes native shared libraries.",
          "Micro-stutters: Verify you are NOT calling startProcessing on the Main thread. Always schedule audio rendering inside Default coroutine dispatchers or low-overhead thread executors.",
          "High CPU usage: Reduce noise suppression levels from HIGH to MEDIUM if targeting low-end processors (MediaTek/Snapdragon 400 series)."
        ]
      }
    ]
  },
  {
    id: "publishersdk",
    name: "PublisherSDK Docs",
    icon: Database,
    sections: [
      {
        id: "installation",
        title: "Dependency Installation",
        desc: "Integrate PublisherSDK attribution and ad-tech metrics trackers within your dependencies block.",
        code: {
          kotlin: `// app/build.gradle.kts
dependencies {
    implementation("com.badri.publishersdk:attribution:1.5.0")
}`,
          java: `// app/build.gradle
dependencies {
    implementation 'com.badri.publishersdk:attribution:1.5.0'
}`
        }
      },
      {
        id: "analytics",
        title: "Analytics Setup",
        desc: "Initialize the PublisherSDK client with your unique App ID credentials.",
        code: {
          kotlin: `import com.badri.publishersdk.PublisherClient

PublisherClient.init(
    context = this,
    appId = "badritech_publish_9924"
)`,
          java: `import com.badri.publishersdk.PublisherClient;

PublisherClient.init(this, "badritech_publish_9924");`
        }
      },
      {
        id: "attribution",
        title: "Attribution Tracking",
        desc: "Setup attribution listeners to record Google Play install campaigns and verify tracking referrers.",
        code: {
          kotlin: `import com.badri.publishersdk.PublisherClient
import com.badri.publishersdk.InstallListener

PublisherClient.setInstallListener(object : InstallListener {
    override fun onReferrerDetected(referrerUrl: String) {
        // Log campaign referrer parameters to server
        logCampaignReferrer(referrerUrl)
    }
})`,
          java: `import com.badri.publishersdk.PublisherClient;
import com.badri.publishersdk.InstallListener;

PublisherClient.setInstallListener(new InstallListener() {
    @Override
    public void onReferrerDetected(String referrerUrl) {
        logCampaignReferrer(referrerUrl);
    }
});`
        }
      },
      {
        id: "events",
        title: "Event Handling",
        desc: "Log offerwall completions, click impressions, and user surveys custom rewards hooks.",
        code: {
          kotlin: `import com.badri.publishersdk.PublisherClient

// Log survey referral completion
PublisherClient.logEvent("survey_complete", mapOf(
    "survey_id" to "finance_questions_99",
    "reward_amount" to 250
))`,
          java: `import com.badri.publishersdk.PublisherClient;
import java.util.HashMap;
import java.util.Map;

Map<String, Object> params = new HashMap<>();
params.put("survey_id", "finance_questions_99");
params.put("reward_amount", 250);

PublisherClient.logEvent("survey_complete", params);`
        }
      }
    ]
  },
  {
    id: "bestpractices",
    name: "Android Best Practices",
    icon: ShieldAlert,
    sections: [
      {
        id: "memory",
        title: "Memory Optimization",
        desc: "Guidelines for managing native heap allocations, preventing memory leaks, and cleaning native C++ JNI pointers.",
        details: [
          "Always release native audio stream filters when lifecycle reaches onDestroy. Call NCKitEngine.releaseStream(streamFilter).",
          "Ensure SQLite database connections are closed when operations finish or within content provider hooks.",
          "Prevent context leaks inside SDK libraries. Always use context.applicationContext instead of holding Activity references."
        ]
      },
      {
        id: "background",
        title: "Background Processing",
        desc: "Configure robust background tasks utilizing Google's WorkManager, foreground services, and coroutine scopes.",
        details: [
          "Utilize WorkManager for offline analytics syncing. Configure NetworkType.CONNECTED constraints to preserve battery life.",
          "Run long-running audio playback or stream capture tasks inside Android Foreground Services with matching media permissions.",
          "Avoid using GlobalScope for network logs. Bind jobs to LifecycleOwner coroutine scopes or custom thread dispatchers."
        ]
      },
      {
        id: "media",
        title: "Media Handling",
        desc: "Handle ExoPlayer aspect ratios, audio focus transitions, and camera preview framing loops safely.",
        details: [
          "Binds CameraX session lifecycles to lifecycle owners using ProcessCameraProvider.getInstance(context).",
          "Listen to AudioManager.OnAudioFocusChangeListener callbacks to pause recorders or dim playback audio when calls arrive.",
          "Use MediaCodec buffers directly for video transcoding to optimize processing speeds on hardware codecs."
        ]
      }
    ]
  }
];

function DocumentationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedCatId, setSelectedCatId] = useState("nckit");
  const [selectedSecId, setSelectedSecId] = useState("installation");
  const [selectedLang, setSelectedLang] = useState<"kotlin" | "java">("kotlin");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState("");

  // Sync state from query parameters on load
  useEffect(() => {
    const cat = searchParams.get("cat");
    const sec = searchParams.get("sec");
    if (cat && docData.some(c => c.id === cat)) {
      setSelectedCatId(cat);
      const category = docData.find(c => c.id === cat)!;
      if (sec && category.sections.some(s => s.id === sec)) {
        setSelectedSecId(sec);
      } else {
        setSelectedSecId(category.sections[0].id);
      }
    }
  }, [searchParams]);

  const activeCategory = docData.find(c => c.id === selectedCatId) || docData[0];
  const activeSection = activeCategory.sections.find(s => s.id === selectedSecId) || activeCategory.sections[0];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(activeSection.id);
    setTimeout(() => setCopiedId(""), 2000);
  };

  const handleSectionSelect = (catId: string, secId: string) => {
    setSelectedCatId(catId);
    setSelectedSecId(secId);
    router.push(`/documentation?cat=${catId}&sec=${secId}`);
  };

  // Filter sidebar navigation items based on search query
  const getFilteredCategories = () => {
    if (!searchQuery.trim()) return docData;

    return docData.map(cat => {
      const matchingSections = cat.sections.filter(sec => 
        sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sec.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        sections: matchingSections
      };
    }).filter(cat => cat.sections.length > 0);
  };

  const filteredData = getFilteredCategories();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* 1. Left Sidebar Navigation */}
      <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
        
        {/* Sidebar Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search API guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card/45 text-foreground placeholder:text-muted-foreground text-xs outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
          />
        </div>

        {/* Categories Menu */}
        <nav className="space-y-6">
          {filteredData.length > 0 ? (
            filteredData.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.id} className="space-y-2">
                  <div className="flex items-center gap-2 px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span>{cat.name}</span>
                  </div>

                  <ul className="space-y-1 border-l border-border/60 ml-4.5 pl-3">
                    {cat.sections.map((sec) => {
                      const isActive = selectedCatId === cat.id && selectedSecId === sec.id;
                      return (
                        <li key={sec.id}>
                          <button
                            onClick={() => handleSectionSelect(cat.id, sec.id)}
                            className={`w-full text-left py-1.5 px-2 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-between ${
                              isActive
                                ? "bg-primary/10 text-primary font-bold shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <span>{sec.title}</span>
                            {isActive && <ChevronRight className="w-3 h-3 text-primary" />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })
          ) : (
            <div className="p-4 text-center border border-dashed border-border rounded-xl text-xs text-muted-foreground font-light">
              No documentation matches &quot;{searchQuery}&quot;
            </div>
          )}
        </nav>

      </aside>

      {/* 2. Right Reader Panel */}
      <main className="lg:col-span-8 p-8 rounded-3xl border border-border bg-card/25 glass-panel space-y-6 min-h-[580px] flex flex-col justify-between">
        
        <div className="space-y-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
            <Link href="/documentation" className="hover:text-primary transition-colors">Documentation</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{activeCategory.name.split(" ")[0]}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary">{activeSection.title}</span>
          </div>

          {/* Section Header info */}
          <div className="pb-5 border-b border-border/40 flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1.5 max-w-xl">
              <h2 className="text-2xl font-extrabold text-foreground tracking-tight">{activeSection.title}</h2>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">{activeSection.desc}</p>
            </div>
            
            {/* Java / Kotlin switcher if code exists */}
            {activeSection.code && (
              <div className="p-1 rounded-xl border border-border bg-zinc-950 flex gap-1 items-center">
                {["kotlin", "java"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedLang(l as "kotlin" | "java")}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase cursor-pointer transition-all ${
                      selectedLang === l 
                        ? "bg-primary text-primary-foreground shadow" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Code block area */}
          {activeSection.code && (
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center bg-muted/40 px-4 py-2.5 rounded-t-xl border-x border-t border-border/60">
                <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                  <span>{selectedLang} SDK integration snippet</span>
                </span>
                <button
                  onClick={() => handleCopy(selectedLang === "kotlin" ? activeSection.code!.kotlin : activeSection.code!.java)}
                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer flex items-center gap-1 text-[10px]"
                >
                  {copiedId === activeSection.id ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedId === activeSection.id ? "Copied" : "Copy Code"}</span>
                </button>
              </div>
              <div className="p-4 rounded-b-xl bg-zinc-950 border-x border-b border-border/60 overflow-x-auto">
                <pre className="text-[11px] font-mono text-zinc-300 leading-relaxed">
                  <code>{selectedLang === "kotlin" ? activeSection.code.kotlin : activeSection.code.java}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Additional details checklist if exists */}
          {activeSection.details && (
            <div className="space-y-3 pt-4 border-t border-border/40">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Guidelines &amp; API Details</span>
              </h3>
              <div className="space-y-2 pl-4">
                {activeSection.details.map((detail, idx) => (
                  <div key={idx} className="text-xs text-muted-foreground font-light leading-relaxed list-item list-disc pl-1">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Prev / Next Page navigation hooks inside docs */}
        <div className="border-t border-border/40 pt-6 mt-8 flex justify-between items-center gap-4 text-xs font-semibold">
          <span className="text-muted-foreground/60 flex items-center gap-1">
            <Info className="w-4 h-4 text-primary" />
            <span>Target OS: Android Oreo+</span>
          </span>
          <Link
            href="/contact"
            className="text-primary hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Need direct SDK support? Contact Us</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

    </div>
  );
}

export default function DocumentationPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative min-h-screen">
      {/* Background radial spotlights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Developer Documentation</h1>
        <p className="text-sm text-muted-foreground max-w-xl font-light">
          Setup maven configurations, check initialization scopes, declare manifest permissions, and audit on-device audio memory profiles.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-12 text-xs text-muted-foreground">Loading documents...</div>}>
        <DocumentationContent />
      </Suspense>
    </div>
  );
}
