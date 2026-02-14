"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useForm } from "react-hook-form";
import { Crown, Gift, Star, Bell, Sparkles, Heart } from "lucide-react";

type JoinFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  interests: string[];
};

const benefits = [
  { icon: Crown, title: "VIP Access", description: "First access to new collections before public launch" },
  { icon: Gift, title: "Exclusive Offers", description: "Members-only pricing and seasonal gifting privileges" },
  { icon: Star, title: "Priority Booking", description: "Skip the queue for consultations and custom design sessions" },
  { icon: Bell, title: "Event Invitations", description: "Trunk shows, collection launches, and private viewings" },
  { icon: Sparkles, title: "Bespoke Services", description: "Complimentary jewellery cleaning and lifetime maintenance" },
  { icon: Heart, title: "Anniversary Reminders", description: "Never miss a special occasion with personalised alerts" },
];

export default function JoinPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<JoinFormData>();

  const onSubmit = async (data: JoinFormData) => {
    console.log("Join form:", data);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Exclusive Membership</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Join the <em className="italic text-primary">Inner Circle</em>
            </h1>
            <p className="mt-4 text-neutral-500 max-w-xl">
              Become part of an exclusive community of jewellery connoisseurs and enjoy privileges crafted just for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            label="Why Join"
            title="Membership Benefits"
            subtitle="A world of luxury, handpicked for the discerning few."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <GlassCard hover className="p-6 h-full">
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-500">{benefit.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Join Form */}
      <section className="section-padding bg-cream-200">
        <div className="container-luxury max-w-2xl">
          <SectionHeading
            label="Register"
            title="Become a Member"
            subtitle="Fill in your details and we'll welcome you into the Navam family."
            gold
          />
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 text-center"
            >
              <GlassCard className="p-12">
                <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Welcome to the Circle</h3>
                <p className="text-neutral-500">
                  Thank you for joining. A confirmation will be sent to your email shortly.
                </p>
              </GlassCard>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">First Name *</label>
                  <input
                    {...register("firstName", { required: "Required" })}
                    className="w-full bg-glass-light border border-cream-300 rounded-lg px-4 py-3 text-foreground placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Your first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Last Name *</label>
                  <input
                    {...register("lastName", { required: "Required" })}
                    className="w-full bg-glass-light border border-cream-300 rounded-lg px-4 py-3 text-foreground placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Your last name"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Email *</label>
                <input
                  type="email"
                  {...register("email", { required: "Required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                  className="w-full bg-glass-light border border-cream-300 rounded-lg px-4 py-3 text-foreground placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Phone</label>
                  <input
                    {...register("phone")}
                    className="w-full bg-glass-light border border-cream-300 rounded-lg px-4 py-3 text-foreground placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">City</label>
                  <input
                    {...register("city")}
                    className="w-full bg-glass-light border border-cream-300 rounded-lg px-4 py-3 text-foreground placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Mumbai"
                  />
                </div>
              </div>
              <div className="pt-4">
                <GoldButton type="submit" className="w-full">
                  Join the Inner Circle
                </GoldButton>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
