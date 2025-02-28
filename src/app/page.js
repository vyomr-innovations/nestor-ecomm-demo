import Banner from "@/components/banner";
import CategoryCard from "@/components/categories/categorieCard";
import ProductCard from "@/components/products/productCard";
import { products } from "@/lib/shopData";

export default function Home() {
  return (
    <>
      {/* Home Page Banner */}

      <Banner />

      {/* Product Card */}

      <div className="grid grid-cols-3">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              cover={product.cover}
              title={product.title}
              price={product.price}
            />
          )
        })}
      </div>

      {/* <div className="grid grid-cols-3">
        <ProductCard
          cover={"/images/Sunbeam_Tote_Jeff.jpg"}
          title={"Sunbeam Tote Jeff"}
          price={"$25.00"}
        />
        <ProductCard
          cover={"/images/ShawodStrikeShoes.jpg"}
          title={"Shawod Strike Shoes"}
          price={"$20.00"}
        />
        <ProductCard
          cover={"/images/Horizon_Gaze_Sunglasses.jpg"}
          title={"Horizon Gaze Sunglasses"}
          price={"$20.00"}
        />
        <ProductCard
          cover={"/images/ZebraBlend_T-Shirt.jpg"}
          title={"ZebraBlend T-Shirt"}
          price={"$55.00"}
        />
        <ProductCard
          cover={"/images/Gloves_With_holes.jpg"}
          title={"Gloves With holes"}
          price={"$1,299.00"}
        />
        <ProductCard
          cover={"/images/Aqua_Stride_Bottle.jpg"}
          title={"Aqua Stride Bottle"}
          price={"$20.00"}
        />
      </div> */}

      {/* Category Card */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CategoryCard
          cover={"/images/apparel.avif"}
          title={"Apperal"}
          description={"Shop Now"}
        />
        <CategoryCard
          cover={"/images/accessories.avif"}
          title={"Accessories"}
          description={"Shop Now"}
        />
      </div>
    </>
  );
}
