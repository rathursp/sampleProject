import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

interface Props {
  currentProductId: string;
  category: string;
}

export function FrequentlyBought({ currentProductId, category }: Props) {
  // Get similar products

  const relatedProducts = products
  .filter((p) => p.id !== currentProductId)
  .sort((a, b) => {
    // Prioritize same category first
    if (a.category === category && b.category !== category) return -1;
    if (a.category !== category && b.category === category) return 1;
    return Math.random() - 0.5;
  })
  .slice(0, 6);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-4">
        Frequently Bought Together
      </h2>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {relatedProducts.map((product) => (
          <div key={product.id} className="min-w-[160px] max-w-[180px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}