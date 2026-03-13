import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  const setCategory = (cat: string) => {
    const params = new URLSearchParams(searchParams);
    if (cat === "all") params.delete("category");
    else params.set("category", cat);
    setSearchParams(params);
  };

  return (
    <div className="container px-3 sm:px-4 py-6 md:py-10">
      <h1 className="mb-2 font-heading text-2xl font-bold md:text-3xl">
        {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
      </h1>
      <p className="mb-6 text-sm text-muted-foreground">
        {filtered.length} product{filtered.length !== 1 ? "s" : ""} available
      </p>

      {/* Category filters */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        <Button
          variant={activeCategory === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setCategory("all")}
        >
          All
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory(cat.id)}
            className="whitespace-nowrap"
          >
            {cat.icon} {cat.name}
          </Button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-muted-foreground">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm">Try a different category or search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
