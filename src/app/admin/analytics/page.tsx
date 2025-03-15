"use client"

import { useEffect, useState } from "react"
import { Calendar, CreditCard, DollarSign, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

// Sample sales data
const salesData = [
  { name: "Jan", total: 1500 },
  { name: "Feb", total: 2300 },
  { name: "Mar", total: 3200 },
  { name: "Apr", total: 4500 },
  { name: "May", total: 4200 },
  { name: "Jun", total: 3800 },
  { name: "Jul", total: 5000 },
  { name: "Aug", total: 4800 },
  { name: "Sep", total: 5500 },
  { name: "Oct", total: 6800 },
  { name: "Nov", total: 7200 },
  { name: "Dec", total: 9000 },
]

// Sample visitors data
const visitorsData = [
  { name: "Jan", visitors: 2500 },
  { name: "Feb", visitors: 3200 },
  { name: "Mar", visitors: 4100 },
  { name: "Apr", visitors: 5300 },
  { name: "May", visitors: 5800 },
  { name: "Jun", visitors: 5200 },
  { name: "Jul", visitors: 6100 },
  { name: "Aug", visitors: 5900 },
  { name: "Sep", visitors: 6700 },
  { name: "Oct", visitors: 7500 },
  { name: "Nov", visitors: 8200 },
  { name: "Dec", visitors: 9800 },
]

// Sample product categories data
const categoryData = [
  { name: "Clothing", value: 45 },
  { name: "Footwear", value: 25 },
  { name: "Accessories", value: 20 },
  { name: "Outerwear", value: 10 },
]

export default function AnalyticsPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div className="flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
            </div>
            <div className="h-[400px] flex items-center justify-center">Loading analytics data...</div>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AdminSidebar />
      <div className="flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6 pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
              <p className="text-muted-foreground">Track your store's performance and growth</p>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="30days">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="year">This year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Custom Range
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+12.4% from last month</p>
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
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">+0.5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="mt-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="visitors">Visitors</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Sales Overview</CardTitle>
                    <CardDescription>Monthly sales performance overview</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart data={salesData}>
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `$${value}`}
                        />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <Tooltip
                          formatter={(value) => [`$${value}`, "Revenue"]}
                          labelStyle={{ color: "#000" }}
                          contentStyle={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #e2e8f0",
                          }}
                        />
                        <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Top Selling Categories</CardTitle>
                    <CardDescription>Distribution of sales by product category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {categoryData.map((category) => (
                        <div key={category.name} className="flex items-center">
                          <div className="w-1/3 font-medium">{category.name}</div>
                          <div className="w-2/3">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${category.value}%` }} />
                              </div>
                              <span className="text-sm font-medium">{category.value}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Distribution of payment methods used</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="w-1/3 font-medium">Credit Card</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "65%" }} />
                            </div>
                            <span className="text-sm font-medium">65%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <ShoppingBag className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="w-1/3 font-medium">PayPal</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "25%" }} />
                            </div>
                            <span className="text-sm font-medium">25%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="w-1/3 font-medium">Apple Pay</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "10%" }} />
                            </div>
                            <span className="text-sm font-medium">10%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Sources</CardTitle>
                    <CardDescription>Where your customers are coming from</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">Direct</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "30%" }} />
                            </div>
                            <span className="text-sm font-medium">30%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">Social</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "25%" }} />
                            </div>
                            <span className="text-sm font-medium">25%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">Search</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "35%" }} />
                            </div>
                            <span className="text-sm font-medium">35%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">Referral</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "10%" }} />
                            </div>
                            <span className="text-sm font-medium">10%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Device Usage</CardTitle>
                    <CardDescription>What devices your customers are using</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">Mobile</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "60%" }} />
                            </div>
                            <span className="text-sm font-medium">60%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">Desktop</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "30%" }} />
                            </div>
                            <span className="text-sm font-medium">30%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">Tablet</div>
                        <div className="w-2/3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: "10%" }} />
                            </div>
                            <span className="text-sm font-medium">10%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="sales">
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Sales Performance</CardTitle>
                  <CardDescription>Detailed view of your sales performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={salesData}>
                      <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip
                        formatter={(value) => [`$${value}`, "Revenue"]}
                        labelStyle={{ color: "#000" }}
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "8px",
                          border: "1px solid #e2e8f0",
                        }}
                      />
                      <Line type="monotone" dataKey="total" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="visitors">
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Visitor Traffic</CardTitle>
                  <CardDescription>Website visitor traffic over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={visitorsData}>
                      <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip
                        formatter={(value) => [`${value}`, "Visitors"]}
                        labelStyle={{ color: "#000" }}
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "8px",
                          border: "1px solid #e2e8f0",
                        }}
                      />
                      <Line type="monotone" dataKey="visitors" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="products">
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Product Performance</CardTitle>
                  <CardDescription>Sales distribution by product category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {categoryData.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{category.name}</h4>
                          <span className="text-sm text-muted-foreground">{category.value}% of total sales</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${category.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

