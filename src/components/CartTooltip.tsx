import { CheckCircle, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CartTooltip() {
  const { items, isCartOpen, setIsCartOpen } = useCart();
  const [visible, setVisible] = useState(false);
  const [prevCount, setPrevCount] = useState(0);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    if (totalItems > prevCount && !isCartOpen) {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(t);
    }
    setPrevCount(totalItems);
  }, [totalItems]);

  useEffect(() => {
    setPrevCount(totalItems);
  }, []);

  if (!visible || items.length === 0) return null;

  return (
    <div className="fixed right-4 top-16 z-[60] w-80 rounded-lg border bg-card shadow-xl animate-in slide-in-from-top-2 fade-in-0 md:right-8 md:top-20">
      <div className="flex items-center justify-between border-b px-4 py-2.5">
        <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
          <CheckCircle className="h-5 w-5" />
          Added to Cart
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setVisible(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="max-h-52 space-y-3 overflow-y-auto p-4">
        {items.slice(-3).map((item) => (
          <div key={item.product.id} className="flex items-center gap-3">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="h-14 w-14 rounded-md border object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold leading-tight">{item.product.name}</p>
              <p className="text-xs text-muted-foreground">
                {item.product.unit} ×{item.quantity}
              </p>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="inline-block rounded bg-green-600 px-2 py-0.5 text-xs font-bold text-white">
                  ₹{item.product.price * item.quantity}
                </span>
                {item.product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    ₹{item.product.originalPrice * item.quantity}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t p-3">
        <Button
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary/5"
          onClick={() => {
            setVisible(false);
            setIsCartOpen(true);
          }}
        >
          Go to Cart &rsaquo;
        </Button>
      </div>
    </div>
  );
}
