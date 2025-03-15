import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

// Sample category data
const categories = [
  {
    id: 1,
    name: "Clothing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t%20shirt%20.jpg-2tGnD6nltUPBdcIpabVxezfBUmQrld.jpeg",
    count: 120,
  },
  {
    id: 2,
    name: "Footwear",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shoes.jpg-B6jaICOBWr8yK91qsZFk4mDQ87P6c8.jpeg",
    count: 64,
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/watch.jpg-91X75zZPUA1UtW76Ms9lsXy9oBzYmc.jpeg",
    count: 86,
  },
  {
    id: 4,
    name: "Footwear",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casual.jpg-PSC67mLia8I7AeOh8crFZm44KEPtlN.jpeg",
    count: 64,
  },
  {
    id: 5,
    name: "Accessories",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wallet.jpg-t6Q8u91wiYqwW9Khpsjqx3ob3bi9K8.jpeg",
    count: 86,
  },
]

export function CategorySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-10 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shop by Category</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our collections by category to find exactly what you're looking for.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-10xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-5 pt-12">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-lg p-2">
                <div className="relative h-[300px] w-full overflow-hidden ">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105 rounded-2xl"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} products</p>
                    </div>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}