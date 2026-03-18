import { useSearchParams } from "react-router-dom";
import { products, subCategories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { CategoryStrip } from "@/components/CategoryStrip";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("category") || "all";
  const activeSubCategory = searchParams.get("sub") || "all";
  const searchQuery = searchParams.get("search") || "";

  // ✅ FILTER LOGIC
  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activeSubCategory !== "all") {
      result = result.filter((p) => p.subCategory === activeSubCategory);
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
  }, [activeCategory, activeSubCategory, searchQuery]);

  // ✅ CATEGORY CHANGE (reset subcategory)
  const setCategory = (cat: string) => {
    const params = new URLSearchParams();

    if (cat !== "all") {
      params.set("category", cat);
    }

    setSearchParams(params); // resets sub + search
  };

  // ✅ SUBCATEGORY CHANGE
  const setSubCategory = (sub: string) => {
    const params = new URLSearchParams(searchParams);

    if (sub === "all") {
      params.delete("sub");
    } else {
      params.set("sub", sub);
    }

    setSearchParams(params);
  };

  const currentSubs = subCategories[activeCategory] || [];

  return (
    <>
      {/* 🔥 CATEGORY STRIP */}
      <CategoryStrip />

      {/* 🔥 SUBCATEGORY BAR */}
      {currentSubs.length > 0 && (
        <div className="sticky top-[130px] z-30 bg-white/95 backdrop-blur-md border-b px-3 py-2 flex gap-2 overflow-x-auto">
          
          <Button
            size="sm"
            variant={activeSubCategory === "all" ? "default" : "outline"}
            onClick={() => setSubCategory("all")}
            className="rounded-full whitespace-nowrap"
          >
            All
          </Button>

          {currentSubs.map((sub) => (
            <Button
              key={sub}
              size="sm"
              variant={activeSubCategory === sub ? "default" : "outline"}
              onClick={() => setSubCategory(sub)}
              className="rounded-full whitespace-nowrap"
            >
              {sub}
            </Button>
          ))}
        </div>
      )}

      {/* 🔥 PRODUCTS */}
      <div className="container px-3 sm:px-4 py-6 md:py-10">
        
        <h1 className="mb-2 font-heading text-2xl font-bold md:text-3xl">
          {searchQuery ? `Results for "${searchQuery}"` : ""}
        </h1>

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
    </>
  );
};

export default Products;