import { useParams, Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { Minus, Plus, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";


export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart, items, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.product.id === id);
  const location = useLocation();

  if (!product) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleAdd = () => {
    addToCart(product);
  };

    useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"  // Instant scroll, no animation
    });
  }, [location.pathname]);  // Triggers on route path change

  return (
    <section className="mx-auto max-w-5xl px-3 py-4 sm:px-4 sm:py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground font-medium truncate">{product.name}</span>
      </nav>

      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        {/* Image */}
        <div className="flex flex-col gap-3">
          <div className="relative overflow-hidden rounded-xl border bg-white aspect-square flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
            {discount > 0 && (
              <Badge className="absolute left-3 top-3 bg-pink-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {discount}% OFF
              </Badge>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-3">
          {/* Category */}
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.category}
          </p>

          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-card-foreground leading-tight">
            {product.name}
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground">
            Net Qty: {product.unit}
          </p>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-primary px-3 py-1 text-lg sm:text-xl font-bold text-primary-foreground">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">
                  MRP ₹{product.originalPrice}
                </span>
                <span className="text-sm font-semibold text-green-600">
                  ₹{product.originalPrice - product.price} OFF
                </span>
              </>
            )}
          </div>

          <p className="text-[10px] text-muted-foreground">(Inclusive of all taxes)</p>

          <Separator />

          {/* Description */}
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <Separator />

          {/* Add to cart / Quantity */}
          {!product.inStock ? (
            <Badge variant="secondary" className="w-fit text-sm px-4 py-2">
              Out of Stock
            </Badge>
          ) : cartItem ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg border bg-secondary px-2 py-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="min-w-[2rem] text-center text-base font-semibold">
                  {cartItem.quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">
                Total: <span className="font-bold text-foreground">₹{product.price * cartItem.quantity}</span>
              </span>
            </div>
          ) : (
            <Button
              size="lg"
              className="w-full text-base md:max-w-xs"
              onClick={handleAdd}
            >
              Add to Cart — ₹{product.price}
            </Button>
          )}

          <Separator />

          {/* Highlights table */}
          <div>
            <h3 className="text-base font-bold text-card-foreground mb-3">Highlights</h3>
            <div className="space-y-0 rounded-lg border overflow-hidden">
              {[
                { label: "Category", value: product.category },
                { label: "Unit", value: product.unit },
                { label: "Availability", value: product.inStock ? "In Stock" : "Out of Stock" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex text-sm ${i % 2 === 0 ? "bg-muted/50" : "bg-background"}`}
                >
                  <span className="w-1/3 px-4 py-2.5 font-medium text-muted-foreground border-r">
                    {row.label}
                  </span>
                  <span className="flex-1 px-4 py-2.5 text-foreground">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}