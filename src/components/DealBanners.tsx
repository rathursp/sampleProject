import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DealBanner {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  bg: string;
  textColor: string;
  link: string;
  emoji: string;
}

const deals: DealBanner[] = [
  {
    id: "1",
    title: "Buy 1 Get 1 Free",
    subtitle: "On all dairy products this weekend",
    badge: "BOGO",
    bg: "from-violet-500 to-purple-600",
    textColor: "text-white",
    link: "/products?category=dairy",
    emoji: "🥛",
  },
  {
    id: "2",
    title: "Under ₹99 Store",
    subtitle: "Fresh veggies & fruits at unbeatable prices",
    badge: "VALUE",
    bg: "from-emerald-500 to-teal-600",
    textColor: "text-white",
    link: "/products?category=vegetables",
    emoji: "🥬",
  },
  {
    id: "3",
    title: "Weekend Special",
    subtitle: "Flat 30% OFF on premium fruits",
    badge: "30% OFF",
    bg: "from-rose-500 to-pink-600",
    textColor: "text-white",
    link: "/products?category=fruits",
    emoji: "🍎",
  },
  {
    id: "4",
    title: "Pantry Essentials",
    subtitle: "Stock up on staples — Rice, Atta & more",
    badge: "SAVE BIG",
    bg: "from-amber-500 to-orange-600",
    textColor: "text-white",
    link: "/products?category=staples",
    emoji: "🌾",
  },
];

export function DealBanners() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % deals.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + deals.length) % deals.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const deal = deals[current];

  return (
    <section className="py-3 md:py-5">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35 }}
            >
              <Link
                to={deal.link}
                className={`flex items-center justify-between bg-gradient-to-r ${deal.bg} px-5 py-5 md:px-10 md:py-8 ${deal.textColor}`}
              >
                <div className="flex-1">
                  <span className="mb-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {deal.badge}
                  </span>
                  <h3 className="font-heading text-xl font-bold md:text-3xl">{deal.title}</h3>
                  <p className="mt-1 text-xs opacity-90 md:text-sm">{deal.subtitle}</p>
                  <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                    Shop Now →
                  </span>
                </div>
                <span className="text-5xl md:text-7xl opacity-80">{deal.emoji}</span>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-1 text-white backdrop-blur-sm transition hover:bg-white/40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-1 text-white backdrop-blur-sm transition hover:bg-white/40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {deals.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${i === current ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}