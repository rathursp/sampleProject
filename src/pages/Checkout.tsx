import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ArrowLeft,
  MessageCircle,
  PawPrint,
  BellOff,
  Minus,
  Plus,
  Trash2,
  BadgePercent,
  Truck,
  HandCoins,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const deliverySlots = [
  "Today 2–4 PM",
  "Today 5–7 PM",
  "Tomorrow 9–11 AM",
  "Tomorrow 2–4 PM",
];

const Checkout = () => {
  const { items, totalPrice, clearCart, updateQuantity, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [slot, setSlot] = useState(deliverySlots[0]);
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [deliveryInstructions, setDeliveryInstructions] = useState<string[]>([]);

  if (items.length === 0) {
    return (
      <div className="container flex flex-col items-center gap-4 py-20">
        <p className="text-lg font-medium text-muted-foreground">Your cart is empty</p>
        <Button asChild variant="outline">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully! 🎉", {
      description: "You will receive a confirmation shortly.",
    });
    clearCart();
  };

  const toggleInstruction = (instruction: string) => {
    setDeliveryInstructions((prev) =>
      prev.includes(instruction)
        ? prev.filter((i) => i !== instruction)
        : [...prev, instruction]
    );
  };

  // Calculate savings
  const totalMRP = items.reduce(
    (sum, item) => sum + (item.product.originalPrice || item.product.price) * item.quantity,
    0
  );
  const discountOnMRP = totalMRP - totalPrice;
  const deliverySavings = 30;
  const handlingSavings = 10;
  const totalSavings = discountOnMRP + deliverySavings + handlingSavings;

  const whatsappMessage = items
    .map((i) => `${i.product.name} x${i.quantity} — ₹${i.product.price * i.quantity}`)
    .join("%0A");
  const whatsappUrl = `https://wa.me/?text=🛒 *ISAARA Order*%0A%0A${whatsappMessage}%0A%0ATotal: ₹${totalPrice}`;

  const tipOptions = [10, 20, 35];

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Top bar */}
      <div className="sticky top-0 z-30 flex items-center gap-3 border-b bg-card px-4 py-3">
        <Link to="/products" className="text-foreground hover:text-primary">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="font-heading text-lg font-bold">Cart</h1>
      </div>

      {/* Savings banner */}
      {totalSavings > 0 && (
        <div className="mx-4 mt-3 rounded-lg border border-dashed border-emerald-400 bg-emerald-50 px-4 py-2 text-center text-sm font-semibold text-emerald-700">
          🎉 Yay! You saved <span className="font-bold">₹{totalSavings}</span> on this order
        </div>
      )}

      <div className="space-y-3 p-4">
        {/* Cart items */}
        <div className="rounded-xl border bg-card">
          {items.map((item, idx) => (
            <div key={item.product.id}>
              <div className="flex items-center gap-3 p-3">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-14 w-14 rounded-lg border object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold leading-tight line-clamp-2">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.product.unit}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 rounded-lg border border-primary/30 bg-primary/5">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-primary hover:bg-primary/10"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-5 text-center text-sm font-bold text-primary">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-primary hover:bg-primary/10"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold">₹{item.product.price * item.quantity}</span>
                    {item.product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        ₹{item.product.originalPrice * item.quantity}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {idx < items.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        {/* Bill Summary */}
        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-3 flex items-center gap-2 text-base font-bold">
            <span className="text-lg">📋</span> Bill summary
          </h2>
          <Separator className="mb-3" />
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Item Total</span>
              <div className="flex items-center gap-2">
                {discountOnMRP > 0 && (
                  <span className="text-muted-foreground line-through">₹{totalMRP}</span>
                )}
                <span className="font-semibold">₹{totalPrice}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Handling Fee</span>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground line-through">₹{handlingSavings}</span>
                <span className="font-bold text-emerald-600">FREE</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Fee</span>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground line-through">₹{deliverySavings}</span>
                <span className="font-bold text-emerald-600">FREE</span>
              </div>
            </div>
            <Separator className="my-1" />
            <div className="flex justify-between text-base font-bold">
              <span>To Pay</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-normal text-muted-foreground line-through">
                  ₹{totalMRP + handlingSavings + deliverySavings}
                </span>
                <span className="text-lg font-extrabold">₹{totalPrice + (selectedTip || 0)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Savings on this order */}
        {totalSavings > 0 && (
          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-bold">Savings on this order</h2>
              <span className="rounded-lg bg-emerald-600 px-3 py-1 text-sm font-bold text-white">
                ₹{totalSavings}
              </span>
            </div>
            <Separator className="mb-3 bg-emerald-200" />
            <div className="space-y-3 text-sm">
              {discountOnMRP > 0 && (
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <BadgePercent className="h-4 w-4" />
                  </div>
                  <span className="flex-1 font-medium">Discount on MRP</span>
                  <span className="font-semibold">₹{discountOnMRP}</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Truck className="h-4 w-4" />
                </div>
                <span className="flex-1 font-medium">FREE delivery savings</span>
                <span className="font-semibold">₹{deliverySavings}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <HandCoins className="h-4 w-4" />
                </div>
                <span className="flex-1 font-medium">Savings on Handling fee</span>
                <span className="font-semibold">₹{handlingSavings}</span>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Instructions */}
        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-1 font-heading text-base font-bold">Delivery Instructions</h2>
          <p className="mb-3 text-xs text-muted-foreground">Delivery partner will be notified</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => toggleInstruction("pets")}
              className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition-all ${
                deliveryInstructions.includes("pets")
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <PawPrint className={`h-6 w-6 ${deliveryInstructions.includes("pets") ? "text-primary" : "text-muted-foreground"}`} />
              <span className="text-xs font-semibold leading-tight">Beware Of Pets</span>
              <span className="text-[10px] text-muted-foreground leading-tight">
                Delivery partner will be informed about the presence of pet(s)
              </span>
            </button>
            <button
              onClick={() => toggleInstruction("bell")}
              className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition-all ${
                deliveryInstructions.includes("bell")
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <BellOff className={`h-6 w-6 ${deliveryInstructions.includes("bell") ? "text-primary" : "text-muted-foreground"}`} />
              <span className="text-xs font-semibold leading-tight">Do Not Ring The Bell</span>
              <span className="text-[10px] text-muted-foreground leading-tight">
                Delivery partner will not ring the bell
              </span>
            </button>
          </div>
        </div>

        {/* Delivery Partner Tip */}
        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-1 flex items-center gap-2 font-heading text-base font-bold">
            <Sparkles className="h-4 w-4 text-accent" />
            Delivery Partner Tip
          </h2>
          <p className="mb-3 text-xs text-muted-foreground">This amount goes to your delivery partner</p>
          <div className="flex gap-3">
            {tipOptions.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedTip(selectedTip === amount ? null : amount)}
                className={`flex-1 rounded-xl border-2 px-3 py-2.5 text-center text-sm font-bold transition-all ${
                  selectedTip === amount
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border text-foreground hover:border-primary/40"
                }`}
              >
                ₹{amount}
              </button>
            ))}
          </div>
        </div>

        {/* Delivery slot */}
        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-3 font-heading text-base font-bold">Delivery Slot</h2>
          <div className="flex flex-wrap gap-2">
            {deliverySlots.map((s) => (
              <Button
                key={s}
                variant={slot === s ? "default" : "outline"}
                size="sm"
                onClick={() => setSlot(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>

        {/* Delivery address */}
        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-3 font-heading text-base font-bold">Delivery Address</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="House / Flat, Street" />
            </div>
            <div>
              <Label htmlFor="pincode">Pincode</Label>
              <Input id="pincode" placeholder="XXXXXX" />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="City" />
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-3 font-heading text-base font-bold">Payment Method</h2>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod">Cash on Delivery</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">UPI (GPay / PhonePe / Paytm)</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 pb-4">
          <Button size="lg" className="w-full text-base" onClick={handlePlaceOrder}>
            Place Order — ₹{totalPrice + (selectedTip || 0)}
          </Button>
          <Button variant="outline" size="lg" className="w-full gap-2" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Order via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;