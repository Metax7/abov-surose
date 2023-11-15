import HomeBanners from "@/components/HomeBanners";
import HomeFeatureArea from "@/components/HomeFeatureArea";
import HomeHero from "@/components/HomeHero";
import NewProducts from "@/components/NewProducts";
import PopularProducts from "@/components/PopularProducts";
import SuperDeal from "@/components/SuperDeal";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatureArea />
      <PopularProducts />
      <HomeBanners />
      <NewProducts />
      <SuperDeal />
    </>
  );
}
