import Banner from "@/components/banner";
import CategoryGrid from "@/components/categories/categoryGrid";
// import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CategoryGrid
          cover={"/images/apparel.avif"}
          title="Apperal"
          description={"Shop Now"}
        />
        <CategoryGrid
          cover={"/images/accessories.avif"}
          title="Accessories"
          description={"Shop Now"}
        />
      </div>
    </div>
  );
}
