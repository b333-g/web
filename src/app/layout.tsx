import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BadriTech Platform | Android Products, SDKs & Developer Ecosystem",
  description: "Official developer platform for enterprise-grade Android applications, developer SDKs, media processing tools, camera solutions, and AI-powered audio enhancement platforms.",
  keywords: [
    "BadriTech",
    "BadriTech SDK",
    "NCKit Noise Cancellation SDK",
    "PublisherSDK",
    "Android SDK Development",
    "Speech Enhancement SDK",
    "Mobile Products Platform",
    "Android Developer Tools",
    "Video Processing Workflows",
    "Enterprise Android Solutions"
  ],
  authors: [{ name: "Badri Prasad Gautam" }],
  openGraph: {
    title: "BadriTech Platform | Android Products, SDKs & Developer Ecosystem",
    description: "Official developer platform for enterprise-grade Android applications, developer SDKs, media processing tools, camera solutions, and AI-powered audio enhancement platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BadriTech Platform | Android Products, SDKs & Developer Ecosystem",
    description: "Official developer platform for enterprise-grade Android applications, developer SDKs, media processing tools, camera solutions, and AI-powered audio enhancement platforms.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var theme = savedTheme || 'dark'; // Default to dark theme
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
