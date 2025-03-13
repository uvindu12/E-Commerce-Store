import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
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
        <Button className="w-full bg-blue-600 hover:bg-blue-200 hover:text-blue-900" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

