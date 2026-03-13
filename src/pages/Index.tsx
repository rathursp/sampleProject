import { HeroBanner } from "@/components/HeroBanner";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PopularProducts } from "@/components/PopularProducts";

const Index = () => {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <PopularProducts />
      <FeaturedProducts />
    </>
  );
};

export default Index;
