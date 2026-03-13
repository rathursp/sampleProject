import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageCircle, ArrowLeft } from "lucide-react";
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
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [slot, setSlot] = useState(deliverySlots[0]);

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

  const whatsappMessage = items
    .map((i) => `${i.product.name} x${i.quantity} — ₹${i.product.price * i.quantity}`)
    .join("%0A");
  const whatsappUrl = `https://wa.me/?text=🛒 *ISAARA Order*%0A%0A${whatsappMessage}%0A%0ATotal: ₹${totalPrice}`;

  return (
    <div className="container max-w-2xl py-6 md:py-10">
      <Link to="/products" className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Continue Shopping
      </Link>

      <h1 className="mb-6 font-heading text-2xl font-bold">Checkout</h1>

      {/* Delivery address */}
      <div className="mb-6 rounded-xl border bg-card p-4">
        <h2 className="mb-3 font-heading text-lg font-semibold">Delivery Address</h2>
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

      {/* Delivery slot */}
      <div className="mb-6 rounded-xl border bg-card p-4">
        <h2 className="mb-3 font-heading text-lg font-semibold">Delivery Slot</h2>
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

      {/* Payment */}
      <div className="mb-6 rounded-xl border bg-card p-4">
        <h2 className="mb-3 font-heading text-lg font-semibold">Payment Method</h2>
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

      {/* Order summary */}
      <div className="mb-6 rounded-xl border bg-card p-4">
        <h2 className="mb-3 font-heading text-lg font-semibold">Order Summary</h2>
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center justify-between py-1.5 text-sm">
            <span>
              {item.product.name} × {item.quantity}
            </span>
            <span className="font-medium">₹{item.product.price * item.quantity}</span>
          </div>
        ))}
        <Separator className="my-2" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Delivery</span>
          <span className="font-semibold text-success">FREE</span>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <span className="font-bold">Total</span>
          <span className="text-lg font-bold text-primary">₹{totalPrice}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button size="lg" className="w-full" onClick={handlePlaceOrder}>
          Place Order — ₹{totalPrice}
        </Button>
        <Button variant="outline" size="lg" className="w-full gap-2" asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" /> Order via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
