import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addToCart, updateQuantity } = useCart();

  // Selected variant state
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const variants = product.variants;
  const activeVariant = variants?.[selectedVariantIdx];

  const displayPrice = activeVariant?.price ?? product.price;
  const displayOriginalPrice = activeVariant?.originalPrice ?? product.originalPrice;
  const displayUnit = activeVariant?.unit ?? product.unit;
  const variantId = activeVariant?.id;

  // Find cart item for this variant
  const cartItem = items.find(
    (i) =>
      i.product.id === product.id &&
      (variantId ? i.selectedVariantId === variantId : !i.selectedVariantId)
  );

  const discount = displayOriginalPrice
    ? Math.round(((displayOriginalPrice - displayPrice) / displayOriginalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group relative rounded-xl border bg-white p-2 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
    >
      {/* Product Image */}
      <Link
        to={`/product/${product.id}`}
        className="relative h-[150px] overflow-hidden bg-white flex items-center justify-center rounded-lg"
      >
        <img
          src={product.image}
          alt={product.name}
          className="rounded-md mb-2 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {discount > 0 && (
          <Badge className="absolute left-2 top-2 bg-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            {discount}% OFF
          </Badge>
        )}

        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
              Out of Stock
            </span>
          </div>
        )}

        {product.inStock && !cartItem && (
          <div className="absolute bottom-2 right-2">
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
              <Button
                size="sm"
                className="h-7 px-4 text-xs font-bold rounded-md border border-green-600 text-green-600 bg-white"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product, variantId);
                }}
              >
                ADD
              </Button>
            </motion.div>
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col gap-1 p-2">
        {/* Variant selector */}
        {variants && variants.length > 1 ? (
          <div className="flex flex-wrap gap-1">
            {variants.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariantIdx(idx)}
                className={`rounded-md border px-2 py-0.5 text-[10px] font-medium transition-colors ${
                  idx === selectedVariantIdx
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {v.unit}
              </button>
            ))}
          </div>
        ) : (
          <span className="text-[10px] text-muted-foreground uppercase">{displayUnit}</span>
        )}

        <h3 className="text-xs sm:text-sm font-medium leading-tight text-card-foreground line-clamp-2 min-h-[28px]">
          <h3 className="font-heading font-bold">{product.name}</h3>
        </h3>

        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold text-foreground">
               <p className="text-green-600 font-semibold">₹{displayPrice}</p>
            </span>
            {displayOriginalPrice && (
              <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
                ₹{displayOriginalPrice}
              </span>
            )}
          </div>

          {product.inStock && cartItem && (
            <div className="flex items-center gap-1 rounded-md border bg-secondary px-1 py-0.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5"
                onClick={() => updateQuantity(product.id, cartItem.quantity - 1, variantId)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="min-w-[16px] text-center text-xs font-semibold">
                {cartItem.quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5"
                onClick={() => updateQuantity(product.id, cartItem.quantity + 1, variantId)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}