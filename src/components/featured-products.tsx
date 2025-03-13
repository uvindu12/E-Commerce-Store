import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Marquee } from "./magicui/marquee"


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
  {
    id: 5,
    name: "Designer Sunglasses",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Casual Hoodie",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    rating: 4.3,
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 119.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Footwear",
    rating: 4.9,
  },
  {
    id: 8,
    name: "Leather Wallet",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    rating: 4.4,
  },
]

interface ProductProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    category: string
    rating: number
  }
}

function ProductCard({ product }: ProductProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg min-w-[250px] max-w-[300px]">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <div className="overflow-hidden aspect-square">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </div>
        </Link>
        <Badge className="absolute top-2 right-2">{product.category}</Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg leading-tight mb-1 hover:underline">{product.name}</h3>
        </Link>
        <p className="font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full text-blue-900 bg-blue-300 hover:bg-blue-600 hover:text-blue-50" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4 " />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our most popular items, handpicked for quality and style.
            </p>
          </div>
        </div>

        <div className="mt-12 w-full overflow-hidden">
          <Marquee  pauseOnHover className="[--duration:20s]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Marquee>
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/products">
            <Button size="lg" className ="bg-blue-600 hover:bg-blue-300 hover:text-blue-800 hover:font-bold">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

