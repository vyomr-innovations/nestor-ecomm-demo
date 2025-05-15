// This file should be named layout.js in your [_product] directory
import { products } from "@/lib/shopData";

// Generate metadata for the _product page
export async function generateMetadata({ params }) {
  // Get the _product ID from the URL
  const { product } = await params;

  // Find the _product in your data
  const _product = products.find((p) => {
    console.log("TITLE :: ", p.title.replace(/\s/g, "-"),product);
    return p.title.replace(/\s/g, "-") === product;
  });
  console.log("ProductS : ", products);
  // If no _product is found, return basic metadata
  if (!_product) {
    return {
      title: "product Not Found",
      description: "The requested product could not be found.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // Generate the metadata for this _product
  return {
    title: _product.title,
    description: `${_product.title} - ${_product.price} - Shop now!`,
    openGraph: {
      title: _product.title,
      description: `${_product.title} - ${_product.price} - Shop now!`,
      images: [
        {
          url: _product.cover.url,
          width: 1200,
          height: 630,
          alt: _product.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${baseUrl}/products/${product}`,
    },
    twitter: {
      card: "summary_large_image",
      title: _product.title,
      description: `${_product.title} - ${_product.price} - Shop now!`,
      images: [_product.cover.url],
    },
  };
}

export default function ProductLayout({ children }) {
  return children;
}
