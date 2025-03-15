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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t%20shirt%20.jpg-2tGnD6nltUPBdcIpabVxezfBUmQrld.jpeg",
    category: "Clothing",
    rating: 4.5,
    description: "Oversized fit premium cotton t-shirt with minimalist design",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slim%20Fit%20Jeans%20.jpg-2wwKY9YkMFnuRXn7jP0w5pSra7RSjo.jpeg",
    category: "Clothing",
    rating: 4.2,
    description: "Classic medium-wash slim fit jeans with perfect stretch",
  },
  {
    id: 3,
    name: "Athletic Sneakers",
    price: 89.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shoes.jpg-B6jaICOBWr8yK91qsZFk4mDQ87P6c8.jpeg",
    category: "Footwear",
    rating: 4.8,
    description: "Lightweight performance sneakers with rose gold accents",
  },
  {
    id: 4,
    name: "Minimalist Watch",
    price: 199.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/watch.jpg-91X75zZPUA1UtW76Ms9lsXy9oBzYmc.jpeg",
    category: "Accessories",
    rating: 4.6,
    description: "Elegant chronograph watch with leather strap",
  },
  {
    id: 5,
    name: "Designer Sunglasses",
    price: 129.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunglasses%20.jpg-YA0znMGpMiIN1M3vjY4gzqS3V5FqcH.jpeg",
    category: "Accessories",
    rating: 4.7,
    description: "Modern square-frame sunglasses with UV protection",
  },
  {
    id: 6,
    name: "Premium Tracksuit",
    price: 119.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casual.jpg-PSC67mLia8I7AeOh8crFZm44KEPtlN.jpeg",
    category: "Clothing",
    rating: 4.3,
    description: "Two-tone comfortable tracksuit for modern lifestyle",
  },
  {
    id: 7,
    name: "Leather Sneakers",
    price: 149.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/letthershoes.jpg-TR5tdXxpdcmRy9RIHxJCdSv4901Gjr.jpeg",
    category: "Footwear",
    rating: 4.9,
    description: "Premium leather sneakers with platform sole",
  },
  {
    id: 8,
    name: "Leather Wallet",
    price: 49.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wallet.jpg-t6Q8u91wiYqwW9Khpsjqx3ob3bi9K8.jpeg",
    category: "Accessories",
    rating: 4.4,
    description: "Genuine leather wallet with classic design",
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
    description: string
  }
}

function ProductCard({ product }: ProductProps) {
  return (
    
      <Card className="overflow-hidden transition-all hover:shadow-lg p-3 bg-muted">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <div className="overflow-hidden aspect-square rounded-2xl hover:scale-100 transition-transform w-[300px] h-[400px]">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </div>
        </Link>
        <Badge className="absolute top-2 right-2 justify-center bg-blue-600 ">{product.category}</Badge>
      </div>
      <CardContent className="p-4 text-center">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg leading-tight mb-1 hover:font-bold  hover:text-blue-500 text-blue-950">{product.name}</h3>
        </Link>
      </CardContent>
    </Card>
  
  )
}

export function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">Featured Products</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our most popular items, handpicked for quality and style.
            </p>
          </div>
        </div>

        <div className="mt-12 w-full h-full p-1 ">
          <Marquee speed="normal" pauseOnHover>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Marquee>
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/products">
            <Button size="lg" className= "bg-blue-600 hover:bg-blue-300 hover:text-blue-800 hover:font-bold cursor-pointer">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

