import React from 'react'
import ProductCard from '../productCard';
import { products } from '@/lib/shopData';
import { useRouter } from 'next/navigation';
function ProductGrid() {
    const router = useRouter()
    return (
        <div className="grid grid-cols-3">
            {products.slice(0, 6).map((product, index) => {
                return (
                    <ProductCard
                        key={index}
                        onClick={() =>
                            router.push(`/products/${product.title.replace(/\s+/g, "-")}`)
                        }
                        cover={product.cover.url}
                        title={product.title}
                        price={product.price}
                    />
                );
            })}
        </div>
    )
}

export default ProductGrid;
