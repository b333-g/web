"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2, Phone } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Success Confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#6366f1", "#a855f7", "#06b6d4"],
    });
  };

  return (
    <section id="contact" className="py-12 relative overflow-hidden bg-background">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-extrabold text-foreground"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full origin-center"
          />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-light text-sm">
            Have an open opportunity, project proposal, or just want to chat about Android development? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">EMAIL ME</div>
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
                    <div className="text-xs text-muted-foreground font-semibold">CALL ME</div>
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
                    <div className="text-xs text-muted-foreground font-semibold">LOCATION</div>
                    <div className="text-sm font-semibold text-foreground">
                      Indore, Madhya Pradesh, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Android Dev Quote */}
            <div className="p-6 rounded-2xl border border-border bg-card/60">
              <h4 className="text-sm font-bold text-foreground mb-2">Android Engineering Approach</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                I write modern Kotlin applications following clean coding guidelines. I prioritize efficient UI updates using recomposition tools, stable background task processes, and structured unit testing pipelines.
              </p>
            </div>
          </motion.div>

          {/* Form container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-2xl border border-border shadow-sm relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Name field */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-bold text-foreground/80 uppercase">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-card text-foreground text-sm outline-none transition-all focus:ring-2 focus:ring-primary/20 ${
                          errors.name ? "border-red-500/80 focus:border-red-500" : "border-border focus:border-primary"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-red-500 font-semibold">{errors.name}</p>}
                    </div>

                    {/* Email field */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-bold text-foreground/80 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-card text-foreground text-sm outline-none transition-all focus:ring-2 focus:ring-primary/20 ${
                          errors.email ? "border-red-500/80 focus:border-red-500" : "border-border focus:border-primary"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 font-semibold">{errors.email}</p>}
                    </div>

                    {/* Message field */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs font-bold text-foreground/80 uppercase">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border bg-card text-foreground text-sm outline-none transition-all focus:ring-2 focus:ring-primary/20 resize-none ${
                          errors.message ? "border-red-500/80 focus:border-red-500" : "border-border focus:border-primary"
                        }`}
                        placeholder="Tell me about your development needs..."
                      />
                      {errors.message && <p className="text-xs text-red-500 font-semibold">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-95 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-500" />
                    <h3 className="font-display text-2xl font-bold text-foreground">Message Sent!</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      Thank you for reaching out, Badri will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 px-6 py-2.5 rounded-xl border border-border bg-card text-xs font-semibold hover:bg-muted transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
