import { products } from "@/data/products";
import offersData from "@/data/offers.json";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {

  const featured = products.filter(
    (p) => offersData[p.key]
  );

  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <h2 className="mb-6 font-heading text-2xl font-bold">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 lg:gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}