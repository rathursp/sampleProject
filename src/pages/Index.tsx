import { HeroBanner } from "@/components/HeroBanner";
import { CategoryStrip } from "@/components/CategoryStrip";
import { DealBanners } from "@/components/DealBanners";
import { FeaturedProducts } from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <>
      {/* <HeroBanner /> */}
      <DealBanners />
      <CategoryStrip />
      <FeaturedProducts />
    </>
  );
};

export default Index;