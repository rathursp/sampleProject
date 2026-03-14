import { ShoppingBag, Minus, Plus, Trash2, MessageCircle, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export function CartDrawer() {
  const {
    items,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const whatsappMessage = items
    .map((i) => `${i.product.name} x${i.quantity} — ₹${i.product.price * i.quantity}`)
    .join("%0A");
  const whatsappUrl = `https://wa.me/?text=🛒 *ISAARA Order*%0A%0A${whatsappMessage}%0A%0ATotal: ₹${totalPrice}`;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="flex flex-row items-center gap-3 space-y-0">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={() => setIsCartOpen(false)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <SheetTitle className="flex items-center gap-2 font-heading">
            Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
            <ShoppingBag className="h-16 w-16 opacity-30" />
            <p className="text-lg font-medium">Your cart is empty</p>
            <Button variant="outline" onClick={() => setIsCartOpen(false)} asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto py-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 rounded-lg border bg-card p-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-14 w-14 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">{item.product.unit}</p>
                    <p className="text-sm font-bold text-primary">
                      ₹{item.product.price * item.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 rounded-md border">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-5 text-center text-xs font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-destructive"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">₹{totalPrice}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-semibold text-success">FREE</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-base font-bold">Total</span>
                <span className="text-lg font-bold text-primary">₹{totalPrice}</span>
              </div>

              <Button className="w-full" size="lg" asChild onClick={() => setIsCartOpen(false)}>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full gap-2"
                size="lg"
                asChild
              >
                {/* <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Order via WhatsApp
                </a> */}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}