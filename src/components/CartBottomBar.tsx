import { ShoppingBag, CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CartBottomBar() {
  const { items, totalItems, totalPrice, setIsCartOpen } = useCart();
  const [showAdded, setShowAdded] = useState(false);
  const [prevCount, setPrevCount] = useState(0);
  const [barVisible, setBarVisible] = useState(true);

  const totalMRP = items.reduce(
    (sum, item) => sum + (item.product.originalPrice ?? item.product.price) * item.quantity,
    0
  );

  useEffect(() => {
    if (totalItems > prevCount) {
      setShowAdded(true);
      const t = setTimeout(() => setShowAdded(false), 1500);
      return () => clearTimeout(t);
    }
    setPrevCount(totalItems);
  }, [totalItems]);

  useEffect(() => {
    setPrevCount(totalItems);
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setBarVisible(true);
      const t = setTimeout(() => setBarVisible(false), 2000);
      return () => clearTimeout(t);
    }
  }, [totalItems]);

  if (totalItems === 0) return null;

  return (
    <>
      {/* "Item Added" toast */}
      <AnimatePresence>
        {showAdded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-0 right-0 z-[70] flex justify-center"
          >
            <div className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 shadow-lg">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-sm font-semibold text-background">Item Added</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom bar */}
      <AnimatePresence>
        {barVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[60] safe-bottom"
          >
            <div
              className="mx-auto flex max-w-lg cursor-pointer items-center justify-between gap-3 bg-primary px-4 py-3 text-primary-foreground shadow-[0_-4px_20px_rgba(0,0,0,0.15)] sm:mx-4 sm:mb-3 sm:rounded-xl"
              onClick={() => setIsCartOpen(true)}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/20">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">{totalItems} item{totalItems > 1 ? "s" : ""}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">₹{totalPrice}</span>
                    {totalMRP > totalPrice && (
                      <span className="text-xs line-through opacity-70">₹{totalMRP}</span>
                    )}
                  </div>
                </div>
              </div>
              <span className="text-sm font-bold">View Cart &rsaquo;</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}