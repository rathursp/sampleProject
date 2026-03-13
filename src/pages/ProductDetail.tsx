import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:py-16">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-heading text-3xl font-bold italic text-card-foreground md:text-4xl">
            {product.name}
          </h1>
          <p className="text-muted-foreground">{product.description}</p>

          <p className="text-xl font-bold text-primary">
            ₹{product.price}{" "}
            <span className="text-base font-normal text-muted-foreground">
              / {product.unit}
            </span>
          </p>

          {/* Quantity selector */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="min-w-[4rem] text-center text-lg font-semibold">
              {quantity} {product.unit}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => setQuantity((q) => q + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Add button */}
          <Button
            size="lg"
            className="w-full text-base md:max-w-sm"
            disabled={!product.inStock}
            onClick={handleAdd}
          >
            Add {quantity} {product.unit} — ₹{totalPrice}
          </Button>
        </div>
      </div>
    </section>
  );
}
