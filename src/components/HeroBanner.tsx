import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-12 md:py-20">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary-foreground/5" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <span className="mb-3 inline-block rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-semibold text-primary-foreground">
            🎉 Holi Offer — ₹59 cashback for new users!
          </span>
          <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-primary-foreground md:text-5xl">
            Fresh Groceries
            <br />
            at Your Doorstep
          </h1>
          <p className="mb-6 text-sm text-primary-foreground/80 md:text-base">
            Order farm-fresh vegetables, fruits, dairy & more. Delivered within hours to your home.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="gap-2 font-semibold"
          >
            <Link to="/products">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
