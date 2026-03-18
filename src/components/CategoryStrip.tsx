import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categoryColors: Record<string, string> = {
  vegetables: "bg-emerald-50 border-emerald-200",
  fruits: "bg-rose-50 border-rose-200",
  dairy: "bg-sky-50 border-sky-200",
  staples: "bg-amber-50 border-amber-200",
  snacks: "bg-orange-50 border-orange-200",
  beverages: "bg-violet-50 border-violet-200",
};

export function CategoryStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <section className="sticky top-[70px] z-40 bg-white border-b py-2">
      <div className="container relative">
        <div className="flex items-center justify-between mb-3">
          {/* <h2 className="font-heading text-lg font-bold md:text-xl">Shop by Category</h2> */}
          <div className="hidden md:flex gap-1">
            
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className={`group flex flex-col items-center gap-1.5 rounded-2xl border px-4 py-3 min-w-[80px] md:min-w-[100px] snap-start transition-all hover:shadow-md hover:-translate-y-0.5 ${categoryColors[cat.id] || "bg-card border-border"}`}
            >
              <span className="text-2xl md:text-3xl transition-transform group-hover:scale-110">{cat.icon}</span>
              <span className="text-[11px] md:text-xs font-semibold text-foreground/80 group-hover:text-primary whitespace-nowrap">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}