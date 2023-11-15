import HomeBanners from "@/components/HomeBanners";
import HomeFeatureArea from "@/components/HomeFeatureArea";
import HomeHero from "@/components/HomeHero";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatureArea />
      <PopularProducts />
      <HomeBanners />
    </>
  );
}
