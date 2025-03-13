import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"


export default function Home () {
  return (
    <div className = "flex flex-col min-h-screen">
      <header className = "border-b rounded-b-xl bg-blue-50 shadow-md">
        <div className= "container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className ="flex item-center gap-2 text-lg font-semibold">
          <ShoppingBag className= "h-6 w-6"/>
          <span className= "text-blue-600 font-bold ">Style</span> <span className ="font-bold text-blue-900">Stroe</span>
          </Link>
          <nav className = "hidden md:flex gap-6">
            <Link href="/" className =" text-sm font-medium hover-underline underline-offset-4 text-blue-900">Home</Link>
            <Link href="/products" className= "text-sm font-medium hover:underline underline-offset-4 text-blue-900">Products</Link>
            <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4 text-blue-900">
              Categories</Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4 text-blue-900">About</Link>
          </nav>
          <div className ="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="realtive bg-blue-50 border-blue-900">
                <ShoppingBag className ="h-5 w-5"/>
                <span className ="absolute mb-8 ml-6 text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center bg-blue-800">4</span>
              </Button>
            </Link>
            <Link href="/admin">
              <Button className ="bg-blue-600 hover:bg-blue-200 hover:text-blue-900 hover:font-bold">Admin</Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}