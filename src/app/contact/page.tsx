"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  type: "general" | "investor" | "appointment";
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // TODO: Connect to Supabase
    console.log(data);
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Get In Touch</p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              Contact <em className="italic gold-text">Us</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-8">
              <FadeIn>
                <h2 className="text-heading font-serif font-bold text-brown-50 mb-6">
                  Visit Our <em className="italic gold-text">Showroom</em>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <GlassCard className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-brown-50">Flagship Showroom</h4>
                      <p className="text-sm text-brown-100/50 mt-1">
                        Navam House, 42 Zaveri Bazaar,<br />
                        Kalbadevi, Mumbai 400002,<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-brown-50">Phone</h4>
                      <p className="text-sm text-brown-100/50 mt-1">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-brown-50">Email</h4>
                      <p className="text-sm text-brown-100/50 mt-1">info@navamjewellers.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-brown-50">Hours</h4>
                      <p className="text-sm text-brown-100/50 mt-1">
                        Mon – Sat: 10:00 AM – 8:00 PM<br />
                        Sunday: 11:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.2}>
              <GlassCard className="p-8">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <span className="text-5xl block text-gold">◆</span>
                    <h3 className="text-xl font-serif font-bold text-brown-50">
                      Thank You!
                    </h3>
                    <p className="text-sm text-brown-100/50">
                      We&apos;ve received your message and will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h3 className="text-xl font-serif font-bold text-brown-50 mb-2">
                      Send a Message
                    </h3>

                    <div>
                      <input
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-50 placeholder:text-brown-100/30 focus:outline-none focus:border-gold/40 transition-colors"
                      />
                      {errors.name && <p className="text-xs text-coral mt-1">Name is required</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          placeholder="Email"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-50 placeholder:text-brown-100/30 focus:outline-none focus:border-gold/40 transition-colors"
                        />
                        {errors.email && <p className="text-xs text-coral mt-1">Email is required</p>}
                      </div>
                      <div>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="Phone (optional)"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-50 placeholder:text-brown-100/30 focus:outline-none focus:border-gold/40 transition-colors"
                        />
                      </div>
                    </div>

                    <select
                      {...register("type")}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-100/50 focus:outline-none focus:border-gold/40 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="investor">Investor Query</option>
                      <option value="appointment">Book Appointment</option>
                    </select>

                    <div>
                      <textarea
                        {...register("message", { required: true })}
                        rows={5}
                        placeholder="Your message..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-50 placeholder:text-brown-100/30 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                      />
                      {errors.message && <p className="text-xs text-coral mt-1">Message is required</p>}
                    </div>

                    <GoldButton type="submit">
                      <Send className="w-4 h-4" />
                      Send Message
                    </GoldButton>
                  </form>
                )}
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
