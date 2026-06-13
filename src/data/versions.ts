export interface ChangelogEntry {
  added?: string[];
  changed?: string[];
  fixed?: string[];
  deprecated?: string[];
}

export interface VersionItem {
  id: string;
  name: string;
  type: "app" | "sdk" | "doc";
  version: string;
  releaseDate: string;
  status: "Released" | "Active Development" | "Beta" | "Planned" | "Research Phase";
  releaseChannel: "stable" | "beta" | "experimental";
  fileSize: string;
  fileName: string;
  downloadUrl: string;
  changelogUrl: string;
  docUrl?: string;
  changelog: ChangelogEntry;
}

export const versionRegistry: VersionItem[] = [
  {
    id: "greatgoga",
    name: "GreatGoga App",
    type: "app",
    version: "v2.4.0",
    releaseDate: "September 24, 2024",
    status: "Released",
    releaseChannel: "stable",
    fileSize: "14.2 MB",
    fileName: "greatgoga-v2.4.0.apk",
    downloadUrl: "/downloads/greatgoga-v2.4.0.apk",
    changelogUrl: "/changelog#greatgoga",
    docUrl: "/documentation?cat=nckit", // cross reference
    changelog: {
      added: [
        "Dynamic Offerwall integration utilizing custom ad-attribution receivers.",
        "Gamified task rewards engine with local secure storage verification.",
        "Google Auth and Firebase Authentication flows."
      ],
      changed: [
        "Redesigned UI with full Jetpack Compose canvas support.",
        "Migrated network requests to use gRPC protocol for compressed sync payloads."
      ],
      fixed: [
        "Offline synchronization conflicts between local SQLite/Room DB caching and cloud endpoints."
      ],
      deprecated: [
        "Legacy REST API sync routes replaced by gRPC."
      ]
    }
  },
  {
    id: "bhagavad-gita",
    name: "Bhagavad Gita App",
    type: "app",
    version: "v1.8.0",
    releaseDate: "March 12, 2023",
    status: "Released",
    releaseChannel: "stable",
    fileSize: "8.5 MB",
    fileName: "bhagavad-gita-v1.8.0.apk",
    downloadUrl: "/downloads/bhagavad-gita-v1.8.0.apk",
    changelogUrl: "/changelog#bhagavad-gita",
    changelog: {
      added: [
        "Sanskrit and English translations embedded directly inside localized databases.",
        "Custom layout selectors (Sanskrit verses, English translations, and detailed commentary side-by-side)."
      ],
      changed: [
        "Optimized SQLite text searches to run under 30ms utilizing custom database indexes."
      ],
      fixed: [
        "Layout rendering issues on smaller screen viewports for Sanskrit text."
      ]
    }
  },
  {
    id: "truvideo",
    name: "TruVideo Demo App",
    type: "app",
    version: "v2.1.2",
    releaseDate: "January 15, 2026",
    status: "Active Development",
    releaseChannel: "beta",
    fileSize: "18.1 MB",
    fileName: "truvideo-demo-v2.1.2.apk",
    downloadUrl: "/downloads/truvideo-demo-v2.1.2.apk",
    changelogUrl: "/changelog#truvideo",
    changelog: {
      added: [
        "Dual-screen Presentation Mode overlay support for enterprise product reviews.",
        "Real-time upload telemetry log panels showing socket buffering."
      ],
      changed: [
        "CameraX capture frame rates dynamically adjusted to maintain stability under thermal throttle."
      ],
      fixed: [
        "Video compression codecs memory leak on older MediaTek SoC devices."
      ]
    }
  },
  {
    id: "nckit-demo",
    name: "NCKit Audio Demo",
    type: "app",
    version: "v1.0.0-beta",
    releaseDate: "December 08, 2025",
    status: "Active Development",
    releaseChannel: "beta",
    fileSize: "9.2 MB",
    fileName: "nckit-demo-v1.0.0-beta.apk",
    downloadUrl: "/downloads/nckit-demo-v1.0.0-beta.apk",
    changelogUrl: "/changelog#nckit-demo",
    docUrl: "/documentation?cat=nckit",
    changelog: {
      added: [
        "Interactive microphone capture with original vs. cleaned live waveform plots.",
        "Environment noise profiles: Cafeteria, Fan Hum, and Traffic presets."
      ],
      changed: [
        "Vocal formant extraction algorithm updated for improved treble clarity."
      ],
      fixed: [
        "Audio thread CPU scheduling issue causing micro-stuttering on Android 11."
      ]
    }
  },
  {
    id: "nckit-sdk",
    name: "NCKit Noise Cancellation SDK",
    type: "sdk",
    version: "v1.0.0-beta3",
    releaseDate: "February 20, 2026",
    status: "Active Development",
    releaseChannel: "beta",
    fileSize: "1.2 MB",
    fileName: "nckit-sdk-v1.0.0-beta3.aar",
    downloadUrl: "/downloads/nckit-sdk-v1.0.0-beta3.aar",
    changelogUrl: "/changelog#nckit-sdk",
    docUrl: "/documentation?cat=nckit",
    changelog: {
      added: [
        "Native NDK audio stream filters written in performance C++ pipelines.",
        "Multi-thread thread pools for real-time sample processing under 15ms buffer delay."
      ],
      changed: [
        "Updated Kotlin Coroutine Flow wrappers to support reactive PCM processing listeners."
      ],
      fixed: [
        "Critical memory leaks inside native heap allocation loops during audio frame splicing."
      ],
      deprecated: [
        "Legacy synchronous stream processing hooks."
      ]
    }
  },
  {
    id: "publishersdk",
    name: "PublisherSDK Ad-attribution",
    type: "sdk",
    version: "v1.5.0",
    releaseDate: "September 18, 2024",
    status: "Released",
    releaseChannel: "stable",
    fileSize: "180 KB",
    fileName: "publishersdk-v1.5.0.aar",
    downloadUrl: "/downloads/publishersdk-v1.5.0.aar",
    changelogUrl: "/changelog#publishersdk",
    docUrl: "/documentation?cat=publishersdk",
    changelog: {
      added: [
        "Google Play Install Referrer API bindings to automatically resolve download campaigns.",
        "Attribution signatures verification over encrypted gRPC channels."
      ],
      changed: [
        "Database layer migrated to Room with encrypted SQL caching.",
        "SDK telemetry logs buffer locally and flush in batches of 10 events to optimize battery usage."
      ],
      fixed: [
        "Broadcast receiver loop firing twice during background network transitions."
      ]
    }
  }
];

export const futureSDKRegistry = [
  {
    id: "camera-sdk",
    name: "Camera Utility SDK",
    type: "Media & Preview",
    status: "Coming Soon" as const,
    desc: "Standardizes Google CameraX preview surfaces, pinch-to-zoom gestures, aspect-ratio filters, and metadata capture configurations."
  },
  {
    id: "video-processing-sdk",
    name: "Video Processing SDK",
    type: "Processing & Splicing",
    status: "Research Phase" as const,
    desc: "Optimized native FFmpeg wrappers executing low-overhead video transcoding, on-device compression, and frame slicing."
  },
  {
    id: "media-utility-sdk",
    name: "Media Utility SDK",
    type: "Android Media Utilities",
    status: "Planned Release" as const,
    desc: "Background service handlers managing ExoPlayer audio sessions, foreground notification controls, and device memory cache locks."
  },
  {
    id: "ai-enhancement-sdk",
    name: "AI Enhancement SDK",
    type: "AI & Graphics",
    status: "Coming Soon" as const,
    desc: "On-device super-resolution upscaling, real-time lighting adjustments, and camera frame image denoising."
  }
];
