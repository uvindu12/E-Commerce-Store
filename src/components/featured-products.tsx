import Link from "next/link"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Leather Sneakers",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Footwear",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Minimalist Watch",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    rating: 4.6,
  },
]

export function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our most popular items, handpicked for quality and style.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/products">
            <Button size="lg">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

