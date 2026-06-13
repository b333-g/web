"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Loader2,
  HelpCircle,
  MessageSquare,
  Briefcase,
  GitBranch
} from "lucide-react";
import confetti from "canvas-confetti";

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

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "business", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "business", message: "" });

    // Success Confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#6366f1", "#06b6d4", "#a855f7"],
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative">
      {/* Background glow spot */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Contact Labs</h1>
        <p className="text-sm text-muted-foreground font-light max-w-xl">
          Get support for PublisherSDK attribute campaigns, NCKit audio engine custom installations, or business inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Contact Info & Support Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-border bg-card/10 space-y-5">
            <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">Contact Credentials</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase">EMAIL</div>
                  <a href="mailto:badrigautam333@gmail.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    badrigautam333@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase">PHONE</div>
                  <a href="tel:+916260966455" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    +91 6260966455
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase">LOCATION</div>
                  <div className="text-sm font-semibold text-foreground">
                    Bengaluru, India
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-border/40">
              <a
                href="https://www.linkedin.com/in/badri-gautam"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Support Channels Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border bg-card/5 space-y-1.5">
              <Briefcase className="w-4 h-4 text-primary" />
              <h4 className="text-xs font-bold text-foreground">Business Inquiries</h4>
              <p className="text-[10px] text-muted-foreground font-light leading-relaxed">For product licensing, custom pricing, and integrations.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/5 space-y-1.5">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <h4 className="text-xs font-bold text-foreground">Technical Support</h4>
              <p className="text-[10px] text-muted-foreground font-light leading-relaxed">JNI linking bugs, attribution issues, or compatibility diagnostics.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/5 space-y-1.5">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-bold text-foreground">Collaboration</h4>
              <p className="text-[10px] text-muted-foreground font-light leading-relaxed">SDK tool integration partnerships and Android R&amp;D.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/5 space-y-1.5">
              <GitBranch className="w-4 h-4 text-violet-400" />
              <h4 className="text-xs font-bold text-foreground">SDK Support</h4>
              <p className="text-[10px] text-muted-foreground font-light leading-relaxed">Attribution telemetry configurations and Maven setup packages.</p>
            </div>
          </div>
        </div>

        {/* Right: Interactive Support Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 rounded-3xl border border-border bg-card/10 shadow-sm relative">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-foreground/80 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-card text-foreground text-xs outline-none transition-all focus:ring-1 focus:ring-primary/20 ${
                        errors.name ? "border-red-500/80 focus:border-red-500" : "border-border focus:border-primary"
                      }`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-foreground/80 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-card text-foreground text-xs outline-none transition-all focus:ring-1 focus:ring-primary/20 ${
                        errors.email ? "border-red-500/80 focus:border-red-500" : "border-border focus:border-primary"
                      }`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-foreground/80 uppercase">
                    Support Category
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-xs outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="business">Business Inquiry / Licensing</option>
                    <option value="tech_nckit">Technical Support: NCKit SDK</option>
                    <option value="tech_publisher">Technical Support: PublisherSDK</option>
                    <option value="collab">Project Collaboration / Custom SDKs</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-foreground/80 uppercase">
                    Detailed Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border bg-card text-foreground text-xs outline-none transition-all focus:ring-1 focus:ring-primary/20 resize-none ${
                      errors.message ? "border-red-500/80 focus:border-red-500" : "border-border focus:border-primary"
                    }`}
                    placeholder="Provide details about your target integrations, platforms, or questions..."
                  />
                  {errors.message && <p className="text-[10px] text-red-500 font-semibold">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-95 disabled:opacity-50 cursor-pointer text-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Support Ticket...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-500" />
                <h3 className="font-display text-2xl font-bold text-foreground">Support Ticket Submitted!</h3>
                <p className="text-xs text-muted-foreground max-w-sm font-light">
                  Thank you for reaching out. We have logged your request and our technical support team will respond within 12 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl border border-border bg-card text-xs font-semibold hover:bg-muted transition-colors cursor-pointer"
                >
                  Submit Another Ticket
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
