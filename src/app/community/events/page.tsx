import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming jewellery events, trunk shows, and collection launches by Navam Sunil Jewellers.",
};

const upcomingEvents = [
  {
    title: "Aradhya Bridal Collection Launch",
    date: "March 15, 2025",
    time: "6:00 PM — 9:00 PM",
    venue: "The Navam Atelier, Nariman Point, Mumbai",
    description: "An exclusive evening unveiling our latest bridal collection, featuring Polki diamond sets and Kundan masterpieces. Champagne reception included.",
    type: "Collection Launch",
    spots: 40,
  },
  {
    title: "The Art of Gemstones — Workshop",
    date: "April 5, 2025",
    time: "11:00 AM — 1:00 PM",
    venue: "Navam Flagship Store, Bandra, Mumbai",
    description: "A hands-on workshop with our head gemologist. Learn to evaluate diamond clarity, colour, and cut. Certificate of participation provided.",
    type: "Workshop",
    spots: 20,
  },
  {
    title: "Devyani Contemporary Trunk Show",
    date: "April 22 – 24, 2025",
    time: "10:00 AM — 8:00 PM",
    venue: "The Oberoi, New Delhi",
    description: "Three days of modern gold and diamond jewellery styled for the urban professional. Personal styling sessions available.",
    type: "Trunk Show",
    spots: 100,
  },
  {
    title: "Heritage Craft: Jadau Masterclass",
    date: "May 10, 2025",
    time: "3:00 PM — 5:00 PM",
    venue: "Navam Workshop, Zaveri Bazaar, Mumbai",
    description: "Witness the ancient Jadau technique live. Our master artisan demonstrates the setting of uncut diamonds and precious gems.",
    type: "Masterclass",
    spots: 15,
  },
];

const pastEvents = [
  {
    title: "Tarini Heritage Showcase",
    date: "December 12, 2024",
    venue: "Taj Palace, Mumbai",
    description: "A curated showcase of temple jewellery and antique gold designs from the Tarini collection.",
  },
  {
    title: "Navam Annual Gala 2024",
    date: "November 28, 2024",
    venue: "The Leela, Bangalore",
    description: "Our annual celebration of craftsmanship, featuring live music and a runway presentation of signature pieces.",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Calendar</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Upcoming <em className="italic text-primary">Events</em>
            </h1>
            <p className="mt-4 text-neutral-500 max-w-xl">
              Immerse yourself in the world of fine jewellery through exclusive experiences, workshops, and showcases.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading label="Upcoming" title="Mark Your Calendar" />
          <StaggerContainer className="space-y-8 mt-16">
            {upcomingEvents.map((event) => (
              <StaggerItem key={event.title}>
                <GlassCard hover className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Date Badge */}
                    <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-primary/10 border border-primary/20 flex flex-col items-center justify-center">
                      <span className="text-2xl font-serif font-bold text-primary">
                        {event.date.split(" ")[1]?.replace(",", "")}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-primary/70">
                        {event.date.split(" ")[0]}
                      </span>
                    </div>
                    {/* Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-[10px] uppercase tracking-wider px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                          {event.type}
                        </span>
                        <span className="text-xs text-neutral-400 flex items-center gap-1">
                          <Users className="w-3 h-3" /> {event.spots} spots
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-foreground">{event.title}</h3>
                      <p className="text-sm text-neutral-500">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {event.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.venue}</span>
                      </div>
                      <div className="pt-2">
                        <GoldButton variant="outline" size="sm">RSVP Now</GoldButton>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-cream-200">
        <div className="container-luxury">
          <SectionHeading label="Archive" title="Past Events" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {pastEvents.map((event) => (
              <StaggerItem key={event.title}>
                <GlassCard className="p-6 opacity-80">
                  <p className="text-primary text-xs uppercase tracking-wider mb-2">{event.date}</p>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-neutral-500 mb-2">{event.description}</p>
                  <p className="text-xs text-neutral-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {event.venue}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
