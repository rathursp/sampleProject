
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
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
  const cartItem = items.find((i) => i.product.id === product.id);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) *
          100
      )
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
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Discount badge */}
        {discount > 0 && (
          <Badge className="absolute left-2 top-2 bg-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            {discount}% OFF
          </Badge>
        )}

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
              Out of Stock
            </span>
          </div>
        )}

        {/* ADD button inside image */}
        {product.inStock && !cartItem && (
          <div className="absolute bottom-2 right-2">
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
              <Button
                size="sm"
                className="h-7 px-4 text-xs font-bold rounded-md border border-green-600 text-green-600 bg-white"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
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
        {/* Unit */}
        <span className="text-[10px] text-gray-400 uppercase">
          {product.unit}
        </span>

        {/* Product name */}
        <h3 className="text-xs sm:text-sm font-medium leading-tight text-card-foreground line-clamp-2 min-h-[28px]">
          {product.name}
        </h3>

        {/* Price + quantity control */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold text-black">
              ₹{product.price}
            </span>

            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Quantity controls */}
          {product.inStock && cartItem && (
            <div className="flex items-center gap-1 rounded-md border bg-secondary px-1 py-0.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5"
                onClick={() =>
                  updateQuantity(product.id, cartItem.quantity - 1)
                }
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
                onClick={() =>
                  updateQuantity(product.id, cartItem.quantity + 1)
                }
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