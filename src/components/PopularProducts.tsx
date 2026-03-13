import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function PopularProducts() {
  const popular = products.filter((p) => p.popular);

  if (popular.length === 0) return null;

  return (
    <section className="py-6">
      <div className="container">
        <h2 className="mb-5 text-xl font-bold">
          🔥 Popular Near You
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
          {popular.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}