import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundImage: "url(/images/image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "30% 25%",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/100" />

      <div className="container relative px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Elevate Your Style Journey
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              Discover our curated collection of premium fashion. From statement pieces to timeless classics, find
              everything you need to express your unique style.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row">
            <Link href="/products">
              <Button size="lg" className="px-8 text-base bg-blue-600 hover:bg-blue-300 hover:text-blue-800 hover:font-bold">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/categories">
              <Button size="lg" variant="secondary" className="px-8 text-base text-blue-900 bg-white hover:bg-blue-50 hover:text-blue-900 shadow-blue-300 hover:font-bold">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

