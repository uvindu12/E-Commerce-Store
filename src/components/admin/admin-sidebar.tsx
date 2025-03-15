"use client"

import Link from "next/link"
import { BarChart, Box, Home, LayoutDashboard, Package, Settings, ShoppingCart, Users } from "lucide-react"

import { cn } from "@/lib/utils"

export function AdminSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span className ="text-blue-600 font-bold text-2xl">Style </span> <span className ="text-blue-900 text-2xl">Store</span> <span className="text-xl"> Admin</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-5 text-sm font-medium">
            <Link
              href="/admin"
              className={cn(
                "flex items-center gap-5 rounded-lg px-5 py-3 text-primary transition-all hover:text-primary",
                "bg-blue-50",
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center gap-5 rounded-lg px-5 py-3 text-muted-foreground transition-all hover:text-primary bg-blue-50 mt-3"
            >
              <Box className="h-4 w-4 " />
              Products
            </Link>
            <Link
              href="/admin/orders"
              className="flex items-center gap-5 rounded-lg px-5 py-3 text-muted-foreground transition-all hover:text-primary bg-blue-50 mt-3"
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
            </Link>
            <Link
              href="/admin/customers"
              className="flex items-center gap-5 rounded-lg px-5 py-3 text-muted-foreground transition-all hover:text-primary bg-blue-50 mt-3"
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="/admin/analytics"
              className="flex items-center gap-5 rounded-lg px-5 py-3 text-muted-foreground transition-all hover:text-primary bg-blue-50 mt-3"
            >
              <BarChart className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-5 rounded-lg px-5 py-3 text-muted-foreground transition-all hover:text-primary bg-blue-50 mt-3"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link
              href="/"
              className="flex items-center gap-5 rounded-lg px-5 py-3 text-muted-foreground transition-all hover:text-primary bg-blue-50 mt-3"
            >
              <Home className="h-4 w-4" />
              Back to Store
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

