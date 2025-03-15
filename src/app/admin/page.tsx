import { AdminHeader } from "@/components/admin/admin-header";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { RecentOrders } from "@/components/admin/recent-orders";
import { SalesChart } from "@/components/admin/sales-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Users } from "lucide-react";





export default function AdminDashboard () {
  return (
    <div className = "grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AdminSidebar/>
      <div className ="flex flex-col">
        <AdminHeader/>
        <main className ="flex-1 p-6 pt-6">
          <div className ="space-y-4">
            <h2 className ="text-3xl font-bold tracking-tight ">Dashboard</h2>
            <div className ="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className ="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className ="text-sm font-medium">Total Revenue</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className ="text-2xl font-bold">$45,245.87</div>
                  <p className ="text-xs text-muted-foreground">+20.4% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className ="flex -flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className ="text-sm font-medium">Orders</CardTitle>
                  <ShoppingCart className ="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                  <div className ="text-2xl font-bold">+374</div>
                  <p className ="text-xs text-muted-foreground">+23.5 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className ="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className ="text-sm font-medium">Products</CardTitle>
                  <Package className ="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                  <div className ="text-2xl font-bold">265</div>
                  <p className ="text-xs text-muted-forgeround">+13 new products added</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,429</div>
                  <p className="text-xs text-muted-foreground">+19.3% from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className ="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Monthly sales performence overview</CardDescription>
                </CardHeader>
                <CardContent className ="pl-2">
                  <SalesChart/>
                </CardContent>
              </Card>
              <Card className ="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest Customer Orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentOrders/>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}