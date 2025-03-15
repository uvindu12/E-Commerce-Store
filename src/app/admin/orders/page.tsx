import { Download, Filter, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

// Sample orders data
const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    date: "2024-03-10",
    status: "Delivered",
    total: 129.99,
    items: 3,
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "2024-03-09",
    status: "Processing",
    total: 79.5,
    items: 2,
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-003",
    customer: "Robert Johnson",
    email: "robert@example.com",
    date: "2024-03-08",
    status: "Shipped",
    total: 249.99,
    items: 5,
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-004",
    customer: "Emily Davis",
    email: "emily@example.com",
    date: "2024-03-07",
    status: "Pending",
    total: 59.99,
    items: 1,
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-005",
    customer: "Michael Wilson",
    email: "michael@example.com",
    date: "2024-03-06",
    status: "Delivered",
    total: 149.95,
    items: 4,
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-006",
    customer: "Sarah Brown",
    email: "sarah@example.com",
    date: "2024-03-05",
    status: "Cancelled",
    total: 89.99,
    items: 2,
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-007",
    customer: "David Miller",
    email: "david@example.com",
    date: "2024-03-04",
    status: "Delivered",
    total: 199.99,
    items: 3,
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-008",
    customer: "Jennifer Taylor",
    email: "jennifer@example.com",
    date: "2024-03-03",
    status: "Processing",
    total: 69.95,
    items: 2,
    paymentMethod: "PayPal",
  },
]

export default function OrdersPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AdminSidebar />
      <div className="flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex w-full md:w-auto items-center gap-2">
              <Input placeholder="Search orders..." className="max-w-sm" />
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
            <div className="flex w-full md:w-auto items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="h-8 w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="total-high">Total: High to Low</SelectItem>
                  <SelectItem value="total-low">Total: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="hidden md:table-cell">Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Payment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p>{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{order.date}</TableCell>
                    <TableCell className="hidden md:table-cell">{order.items}</TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "Delivered"
                            ? "default"
                            : order.status === "Processing"
                              ? "secondary"
                              : order.status === "Shipped"
                                ? "outline"
                                : order.status === "Pending"
                                  ? "secondary"
                                  : "destructive"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{order.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View order details</DropdownMenuItem>
                          <DropdownMenuItem>Update status</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Contact customer</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>8</strong> of <strong>24</strong> orders
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

