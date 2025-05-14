// This file should be named layout.js in your [product] directory
import { products } from "@/lib/shopData";

// Generate metadata for the product page
export async function generateMetadata({ params }) {
  // Get the product ID from the URL
  const productId = params.product;
  
  // Find the product in your data
  const product = products.find((p) => p.title.replace(/\s/g, "-") === productId);
  
  // If no product is found, return basic metadata
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  // Generate the metadata for this product
  return {
    title: product.title,
    description: `${product.title} - ${product.price} - Shop now!`,
    openGraph: {
      title: product.title,
      description: `${product.title} - ${product.price} - Shop now!`,
      images: [
        {
          url: product.cover.url,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
      url: `${baseUrl}/products/${productId}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: `${product.title} - ${product.price} - Shop now!`,
      images: [product.cover.url],
    },
  };
}

export default function ProductLayout({ children }) {
  return children;
}