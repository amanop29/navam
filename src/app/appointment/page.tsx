"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { Calendar } from "lucide-react";
import { useForm } from "react-hook-form";

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  showroom: string;
  interest: string;
  notes: string;
}

const showrooms = [
  "Mumbai – Zaveri Bazaar (Flagship)",
  "Mumbai – Bandra West",
  "Delhi – Karol Bagh",
  "Hyderabad – Jubilee Hills",
  "Bangalore – Jayanagar",
  "Pune – MG Road",
];

const interests = [
  "Bridal Jewellery",
  "Gold Necklaces",
  "Diamond Collection",
  "Everyday Gold",
  "Custom Design",
  "Investment Gold",
];

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AppointmentFormData>();

  const onSubmit = async (data: AppointmentFormData) => {
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
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Private Consultation</p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              Book an <em className="italic gold-text">Appointment</em>
            </h1>
            <p className="text-brown-100/50 text-lg mt-6 max-w-lg">
              Experience our collections in a private setting with a dedicated jewellery consultant.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-3xl">
          <FadeIn>
            <GlassCard className="p-8 lg:p-12">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="text-5xl block text-gold">&#10003;</span>
                  <h3 className="text-xl font-serif font-bold text-brown-50">Appointment Requested!</h3>
                  <p className="text-sm text-brown-100/50">
                    Our team will confirm your appointment within 4 hours via phone and email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-brown-50 mb-4">
                    Schedule Your Visit
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-brown-100/40 uppercase tracking-wider block mb-2">Full Name</label>
                      <input
                        {...register("name", { required: true })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-50 placeholder:text-brown-100/30 focus:outline-none focus:border-gold/40 transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-xs text-coral mt-1">Required</p>}
                    </div>
                    <div>
                      <label className="text-xs text-brown-100/40 uppercase tracking-wider block mb-2">Phone</label>
                      <input
                        {...register("phone", { required: true })}
                        type="tel"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-50 placeholder:text-brown-100/30 focus:outline-none focus:border-gold/40 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="text-xs text-coral mt-1">Required</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-brown-100/40 uppercase tracking-wider block mb-2">Email</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-50 placeholder:text-brown-100/30 focus:outline-none focus:border-gold/40 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-brown-100/40 uppercase tracking-wider block mb-2">Preferred Date</label>
                      <input
                        {...register("date", { required: true })}
                        type="date"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-50 focus:outline-none focus:border-gold/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-brown-100/40 uppercase tracking-wider block mb-2">Preferred Time</label>
                      <select
                        {...register("time")}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-100/50 focus:outline-none focus:border-gold/40 transition-colors"
                      >
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-brown-100/40 uppercase tracking-wider block mb-2">Showroom</label>
                    <select
                      {...register("showroom")}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-100/50 focus:outline-none focus:border-gold/40 transition-colors"
                    >
                      {showrooms.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-brown-100/40 uppercase tracking-wider block mb-2">Interest</label>
                    <select
                      {...register("interest")}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-100/50 focus:outline-none focus:border-gold/40 transition-colors"
                    >
                      {interests.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-brown-100/40 uppercase tracking-wider block mb-2">Additional Notes</label>
                    <textarea
                      {...register("notes")}
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-brown-50 placeholder:text-brown-100/30 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                      placeholder="Any specific requirements or preferences..."
                    />
                  </div>

                  <GoldButton type="submit" size="lg">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </GoldButton>
                </form>
              )}
            </GlassCard>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
