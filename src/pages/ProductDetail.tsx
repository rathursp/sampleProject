import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Minus, Plus, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FrequentlyBought } from "@/components/FrequentlyBought";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart, items, updateQuantity } = useCart();
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const location = useLocation();

  if (!product) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const variants = product.variants;
  const activeVariant = variants?.[selectedVariantIdx];
  const displayPrice = activeVariant?.price ?? product.price;
  const displayOriginalPrice =
    activeVariant?.originalPrice ?? product.originalPrice;
  const displayUnit = activeVariant?.unit ?? product.unit;
  const variantId = activeVariant?.id;

  const discount = displayOriginalPrice
    ? Math.round(
        ((displayOriginalPrice - displayPrice) / displayOriginalPrice) * 100
      )
    : 0;

  const cartItem = items.find(
    (i) =>
      i.product.id === id &&
      (variantId ? i.selectedVariantId === variantId : !i.selectedVariantId)
  );

  const handleAdd = () => {
    addToCart(product, variantId);
  };

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <section className="mx-auto max-w-5xl px-3 py-4 sm:px-4 sm:py-8 md:py-12 pb-24">
      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/products" className="hover:text-foreground">Products</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground font-medium truncate">
          {product.name}
        </span>
      </nav>

      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        {/* IMAGE */}
        <div className="flex flex-col gap-3">
          <div className="relative overflow-hidden rounded-2xl border bg-white aspect-square flex items-center justify-center p-6 hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
            />

            {discount > 0 && (
              <Badge className="absolute left-3 top-3 bg-pink-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {discount}% OFF
              </Badge>
            )}
          </div>
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-3">
          <p className="text-xs text-muted-foreground uppercase">
            {product.category}
          </p>

          <h1 className="text-2xl md:text-3xl font-bold">
            {product.name}
          </h1>

          {/* DELIVERY */}
          <p className="text-sm text-green-600 font-medium">
            ⚡ Delivery in 10 mins
          </p>

          {/* VARIANTS */}
          {variants && variants.length > 1 ? (
            <div className="flex flex-wrap gap-2">
              {variants.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariantIdx(idx)}
                  className={`rounded-lg border-2 px-4 py-2 text-sm ${
                    idx === selectedVariantIdx
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  <span className="block font-bold">{v.unit}</span>
                  <span className="text-xs">₹{v.price}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              {displayUnit} • Fresh & handpicked
            </p>
          )}

          {/* PRICE */}
          <div className="flex items-center gap-3 mt-1">
            <span className="text-2xl font-bold text-primary">
              ₹{displayPrice}
            </span>

            {displayOriginalPrice && (
              <>
                <span className="text-sm line-through text-muted-foreground">
                  ₹{displayOriginalPrice}
                </span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>

          <p className="text-xs text-muted-foreground">
            (Inclusive of all taxes)
          </p>

          <Separator />

          {/* DESCRIPTION */}
          <p className="text-sm text-muted-foreground">
            {product.description}
          </p>

          <Separator />

          {/* CART */}
          {!product.inStock ? (
            <Badge>Out of Stock</Badge>
          ) : cartItem ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 rounded-full border px-3 py-1 shadow-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full active:scale-95"
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      cartItem.quantity - 1,
                      variantId
                    )
                  }
                >
                  <Minus className="h-4 w-4" />
                </Button>

                <span className="font-semibold">
                  {cartItem.quantity}
                </span>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full active:scale-95"
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      cartItem.quantity + 1,
                      variantId
                    )
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <span className="text-sm">
                Total: ₹{displayPrice * cartItem.quantity}
              </span>
            </div>
          ) : (
            <Button
              size="lg"
              className="w-full md:max-w-xs h-12 rounded-xl font-semibold shadow-sm hover:shadow-md"
              onClick={handleAdd}
            >
              Add to Cart — ₹{displayPrice}
            </Button>
          )}

          {/* TRUST */}
          <div className="flex gap-4 text-xs text-muted-foreground mt-2">
            <span>✔ Fresh Quality</span>
            <span>✔ Fast Delivery</span>
            <span>✔ Easy Returns</span>
          </div>

          <Separator />

          {/* HIGHLIGHTS */}
          <div>
            <h3 className="font-bold mb-3">Highlights</h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Category</p>
                <p className="text-sm font-medium">{product.category}</p>
              </div>

              <div className="bg-muted p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Unit</p>
                <p className="text-sm font-medium">{displayUnit}</p>
              </div>

              <div className="bg-muted p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Stock</p>
                <p className="text-sm text-green-600">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY MOBILE CTA */}
      {product.inStock && !cartItem && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 md:hidden">
          <Button
            className="w-full h-12 text-base font-semibold"
            onClick={handleAdd}
          >
            Add to Cart — ₹{displayPrice}
          </Button>
        </div>
      )}

  <FrequentlyBought  currentProductId={product.id}  category={product.category} />

    </section>
  );
} 