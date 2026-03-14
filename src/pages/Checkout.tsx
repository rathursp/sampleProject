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
  BadgePercent,
  Truck,
  HandCoins,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const deliverySlots = [
  "Today 2–4 PM",
  "Today 5–7 PM",
  "Tomorrow 9–11 AM",
  "Tomorrow 2–4 PM",
];

const Checkout = () => {
  const { items, totalPrice, updateQuantity } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [slot, setSlot] = useState(deliverySlots[0]);
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [deliveryInstructions, setDeliveryInstructions] = useState<string[]>([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");

  const toggleInstruction = (instruction: string) => {
    setDeliveryInstructions((prev) =>
      prev.includes(instruction)
        ? prev.filter((i) => i !== instruction)
        : [...prev, instruction]
    );
  };

  const totalMRP = items.reduce(
    (sum, item) =>
      sum + (item.product.originalPrice || item.product.price) * item.quantity,
    0
  );

  const discountOnMRP = totalMRP - totalPrice;
  const deliverySavings = 30;
  const handlingSavings = 10;
  const totalSavings = discountOnMRP + deliverySavings + handlingSavings;

  const tipOptions = [10, 20, 35];

  const orderItems = items
    .map(
      (i) =>
        `• ${i.product.name} (${i.product.unit}) x${i.quantity} = ₹${
          i.product.price * i.quantity
        }`
    )
    .join("\n");

  const whatsappMessage = `
🛒 *ISAARA Order*

👤 Name: ${name}
📞 Phone: ${phone}

📍 Address:
${address}
${city} - ${pincode}

⏰ Delivery Slot: ${slot}

💳 Payment: ${
    paymentMethod === "cod" ? "Cash on Delivery" : "UPI (GPay/PhonePe)"
  }

📦 *Order Items*
${orderItems}

💰 Total: ₹${totalPrice + (selectedTip || 0)}

🚚 Tip: ₹${selectedTip || 0}

📢 Instructions: ${
    deliveryInstructions.length > 0
      ? deliveryInstructions.join(", ")
      : "None"
  }

🙏 Thank you for ordering from ISAARA
`;

  //const whatsappUrl = `https://wa.me/919801021035?text=${encodeURIComponent(
  const whatsappUrl = `https://wa.me/919035197969?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  if (items.length === 0) {
    return (
      <div className="container flex flex-col items-center gap-4 py-20">
        <p className="text-lg font-medium text-muted-foreground">
          Your cart is empty
        </p>
        <Button asChild variant="outline">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/40">

      {/* Top bar */}
      <div className="sticky top-0 z-30 flex items-center gap-3 border-b bg-card px-4 py-3">
        <Link to="/products">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="font-heading text-lg font-bold">Cart</h1>
      </div>

      {/* Savings Banner */}
      {totalSavings > 0 && (
        <div className="mx-4 mt-3 rounded-lg border border-dashed border-emerald-400 bg-emerald-50 px-4 py-2 text-center text-sm font-semibold text-emerald-700">
          🎉 Yay! You saved ₹{totalSavings} on this order
        </div>
      )}

      <div className="space-y-3 p-4">

        {/* Cart Items */}
        <div className="rounded-xl border bg-card">
          {items.map((item, idx) => (
            <div key={item.product.id}>
              <div className="flex items-center gap-3 p-3">
                <img
                  src={item.product.image}
                  className="h-14 w-14 rounded-lg border object-cover"
                />

                <div className="flex-1">
                  <p className="text-sm font-semibold">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.product.unit}
                  </p>
                </div>

                <div className="flex items-center gap-1 border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                  >
                    <Minus className="h-3 w-3" />
                  </Button>

                  <span className="w-6 text-center text-sm font-bold">
                    {item.quantity}
                  </span>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>

                <span className="text-sm font-bold">
                  ₹{item.product.price * item.quantity}
                </span>
              </div>

              {idx < items.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        {/* Delivery Slot */}
        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-3 font-heading text-base font-bold">
            Delivery Slot
          </h2>

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

        {/* Address */}
        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-3 font-heading text-base font-bold">
            Delivery Address
          </h2>

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <Label>Full Name</Label>
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Label>Phone</Label>
              <Input
                placeholder="+91 XXXXX XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <Label>Address</Label>
              <Input
                placeholder="House / Flat, Street"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <Label>Pincode</Label>
              <Input
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>

            <div>
              <Label>City</Label>
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-3 font-heading text-base font-bold">
            Payment Method
          </h2>

          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod">Cash on Delivery</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">UPI (GPay / PhonePe)</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pb-4">

          <Button size="lg" className="w-full text-base">
            Place Order — ₹{totalPrice + (selectedTip || 0)}
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full gap-2"
            asChild
          >
            <a href={whatsappUrl} target="_blank">
              <MessageCircle className="h-4 w-4" />
              Order via WhatsApp
            </a>
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Checkout;