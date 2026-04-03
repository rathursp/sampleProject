import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProductCardProps {
   product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addToCart, updateQuantity } = useCart();

  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const variants = product.variants;
  const activeVariant = variants?.[selectedVariantIdx];

  const displayPrice = activeVariant?.price ?? product.price;
  const displayOriginalPrice =
    activeVariant?.originalPrice ?? product.originalPrice;
  const displayUnit = activeVariant?.unit ?? product.unit;
  const variantId = activeVariant?.id;

  const cartItem = items.find(
    (i) =>
      i.product.id === product.id &&
      (variantId ? i.selectedVariantId === variantId : !i.selectedVariantId)
  );

  const discount = displayOriginalPrice
    ? Math.round(
        ((displayOriginalPrice - displayPrice) / displayOriginalPrice) * 100
      )
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative flex flex-col rounded-2xl bg-white border p-2 shadow-sm hover:shadow-md transition"
    >
      {/* IMAGE */}
      <Link
        to={`/product/${product.id}`}
        className="relative flex h-[130px] items-center justify-center rounded-xl bg-[#f8f8f8]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain p-2 transition-transform group-hover:scale-105"
        />

        {/* 🔥 Discount Badge */}
        {discount > 0 && (
          <Badge className="absolute left-2 top-2 bg-pink-600 text-white text-[10px] px-2 py-0.5 rounded-full">
            {discount}% OFF
          </Badge>
        )}

        {/* ❌ Out of stock */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
            <span className="bg-white text-xs px-3 py-1 rounded-full font-semibold">
              Out of stock
            </span>
          </div>
        )}

        {/* 🔥 FLOATING ADD / STEPPER */}
        {product.inStock && (
          <div className="absolute bottom-2 right-2">
            {!cartItem ? (
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-green-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product, variantId);
                }}
              >
                ADD
              </motion.button>
            ) : (
              <div className="flex items-center gap-2 bg-white border rounded-full shadow px-2 py-1">
                <button
                  className="text-sm px-1"
                  onClick={(e) => {
                    e.preventDefault();
                    updateQuantity(
                      product.id,
                      cartItem.quantity - 1,
                      variantId
                    );
                  }}
                >
                  <Minus className="h-3 w-3" />
                </button>

                <span className="text-xs font-semibold">
                  {cartItem.quantity}
                </span>

                <button
                  className="text-sm px-1"
                  onClick={(e) => {
                    e.preventDefault();
                    updateQuantity(
                      product.id,
                      cartItem.quantity + 1,
                      variantId
                    );
                  }}
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        )}
      </Link>

      {/* INFO */}
      <div className="flex flex-col gap-1 pt-2 px-1">

        {/* Variant selector */}
        {variants && variants.length > 1 ? (
          <div className="flex gap-1 flex-wrap">
            {variants.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariantIdx(idx)}
                className={`text-[10px] px-2 py-0.5 rounded-md border ${
                  idx === selectedVariantIdx
                    ? "bg-purple-100 border-purple-500 text-purple-700"
                    : "text-gray-500 border-gray-200"
                }`}
              >
                {v.unit}
              </button>
            ))}
          </div>
        ) : (
          <span className="text-[11px] text-gray-400">
            {displayUnit}
          </span>
        )}

        {/* NAME */}
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[32px]">
          {product.name}
        </h3>

        {/* PRICE */}
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold text-gray-900">
            ₹{displayPrice}
          </span>

          {displayOriginalPrice && (
            <span className="text-xs line-through text-gray-400">
              ₹{displayOriginalPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}