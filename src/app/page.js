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
        {products.slice(0, 6).map((product, index) => {
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
  )
}
