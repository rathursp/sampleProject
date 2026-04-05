// ...existing code...
import { products } from "@/data/products";
import offersData from "@/data/offers.json";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  type OfferMeta = { tag: string };

  // Map offer keys to products and keep tag info
  const mapped = Object.entries(offersData as Record<string, OfferMeta>)
    .map(([key, meta]) => ({
      key,
      tag: meta.tag,
      product: products.find((p) => p.key === key),
    }))
    // filter out missing products and narrow the type
    .filter(
      (x): x is { key: string; tag: string; product: typeof products[number] } =>
        Boolean(x.product)
    );

  // Group mapped entries by tag while preserving first-seen tag order
  const groups: Record<string, (typeof mapped)[number][]> = {};
  const tagOrder: string[] = [];

  mapped.forEach((item) => {
    if (!groups[item.tag]) {
      groups[item.tag] = [];
      tagOrder.push(item.tag);
    }
    groups[item.tag].push(item);
  });

  if (mapped.length === 0) return null;

  return (
    <div>
      {tagOrder.map((tag) => (
        <section key={tag} className="py-6">
          <div className="container">
            <h2 className="mb-5 text-xl font-bold">{tag}</h2>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
              {groups[tag].map(({ product }) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
// ...existing code...