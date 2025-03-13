import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight, Images } from "lucide-react"


export default function HeroSection () {
  return (
    <section className = "w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className ="container px-4 md:px-6">
        <div className ="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className ="space-y-2">
              <h1 className ="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Discover Your Style</h1>
              <p className ="max-w [600px] text-muted-foreground md:text-xl">
              Explore our curated collection of premium fashion items. From casual to formal, we have everything you
              need to express your unique style.
              </p>
            </div>
            <div className ="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button size= "lg" className ="px-8 bg-blue-600  hover:bg-blue-200 hover:font-bold hover:text-blue-800 ">Shop Now
                  <ArrowRight className ="ml-2 h-4 w-4"/>
                </Button>
              </Link>
              <Link href="/categories">
                <Button size="lg"  className= "px-8 bg-blue-50 shadow-blue-500 text-blue-900 hover:bg-blue-600 hover:text-blue-50">Browse Categories
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-muted p-2">
              <img
                src="/images/image.jpg"
                alt="Hero Image"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}