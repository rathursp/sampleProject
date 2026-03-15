import React, { createContext, useContext, useState, useCallback } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariantId?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, variantId?: string) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getCartKey(productId: string, variantId?: string) {
  return variantId ? `${productId}__${variantId}` : productId;
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product, variantId?: string) => {
    setItems((prev) => {
      const key = getCartKey(product.id, variantId);
      const existing = prev.find(
        (item) => getCartKey(item.product.id, item.selectedVariantId) === key
      );

      // If variant selected, adjust the product price/unit
      let adjustedProduct = product;
      if (variantId && product.variants) {
        const variant = product.variants.find((v) => v.id === variantId);
        if (variant) {
          adjustedProduct = {
            ...product,
            price: variant.price,
            originalPrice: variant.originalPrice,
            unit: variant.unit,
          };
        }
      }

      if (existing) {
        return prev.map((item) =>
          getCartKey(item.product.id, item.selectedVariantId) === key
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product: adjustedProduct, quantity: 1, selectedVariantId: variantId }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string, variantId?: string) => {
    const key = getCartKey(productId, variantId);
    setItems((prev) =>
      prev.filter((item) => getCartKey(item.product.id, item.selectedVariantId) !== key)
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number, variantId?: string) => {
    const key = getCartKey(productId, variantId);
    if (quantity <= 0) {
      setItems((prev) =>
        prev.filter((item) => getCartKey(item.product.id, item.selectedVariantId) !== key)
      );
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        getCartKey(item.product.id, item.selectedVariantId) === key
          ? { ...item, quantity }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};