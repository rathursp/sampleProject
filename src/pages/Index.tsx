import { HeroBanner } from "@/components/HeroBanner";
import { CategoryStrip } from "@/components/CategoryStrip";
import { DealBanners } from "@/components/DealBanners";
import { FeaturedProducts } from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <>
      <HeroBanner />
      <CategoryStrip />
      <DealBanners />
      <FeaturedProducts />
    </>
  );
};

export default Index;