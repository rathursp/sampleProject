import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { motion } from "framer-motion";

export function CategoryGrid() {
  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <h2 className="mb-6 font-heading text-2xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/products?category=${cat.id}`}
                className="group flex flex-col items-center gap-2 rounded-xl border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="text-3xl md:text-4xl">{cat.icon}</span>
                <span className="text-xs font-medium text-foreground/80 group-hover:text-primary md:text-sm">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
