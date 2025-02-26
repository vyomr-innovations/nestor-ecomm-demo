import Banner from "@/components/banner";
import CategoryGrid from "@/components/categories/categoryGrid";
import ProductGrid from "@/components/products/productGrid";

export default function Home() {
  return (
    <>
      <div>
        {/* Home Page Banner */}
        <Banner />

        {/* Product Grid */}
        <div className="grid grid-cols-3 w-full">
          <ProductGrid
            cover={"/images/Sunbeam_Tote_Jeff.jpg"}
            title={"Sunbeam Tote Jeff"}
            price={"$25.00"}
          />
          <ProductGrid
            cover={"/images/ShawodStrikeShoes.jpg"}
            title={"Shawod Strike Shoes"}
            price={"$20.00"}
          />
          <ProductGrid
            cover={"/images/Horizon_Gaze_Sunglasses.jpg"}
            title={"Horizon Gaze Sunglasses"}
            price={"$20.00"}
          />
          <ProductGrid
            cover={"/images/ZebraBlend_T-Shirt.jpg"}
            title={"ZebraBlend T-Shirt"}
            price={"$55.00"}
          />
          <ProductGrid
            cover={"/images/Gloves_With_holes.jpg"}
            title={"Gloves With holes"}
            price={"$1,299.00"}
          />
          <ProductGrid
            cover={"/images/Aqua_Stride_Bottle.jpg"}
            title={"Aqua Stride Bottle"}
            price={"$20.00"}
          />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryGrid
            cover={"/images/apparel.avif"}
            title={"Apperal"}
            description={"Shop Now"}
          />
          <CategoryGrid
            cover={"/images/accessories.avif"}
            title={"Accessories"}
            description={"Shop Now"}
          />
        </div>
      </div>
    </>
  );
}
