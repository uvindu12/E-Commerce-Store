import { Download, Filter, MoreHorizontal, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Badge } from "@/components/ui/badge"

import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample customers data
const customers = [
  {
    id: "CUST-001",
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Active",
    orders: 12,
    spent: 1249.99,
    lastOrder: "2024-03-10",
    joined: "2023-01-15",
  },
  {
    id: "CUST-002",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Active",
    orders: 8,
    spent: 879.5,
    lastOrder: "2024-03-05",
    joined: "2023-02-20",
  },
  {
    id: "CUST-003",
    name: "Robert Johnson",
    email: "robert@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Active",
    orders: 15,
    spent: 1649.95,
    lastOrder: "2024-03-08",
    joined: "2022-11-10",
  },
  {
    id: "CUST-004",
    name: "Emily Davis",
    email: "emily@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Inactive",
    orders: 3,
    spent: 259.99,
    lastOrder: "2023-12-07",
    joined: "2023-09-05",
  },
  {
    id: "CUST-005",
    name: "Michael Wilson",
    email: "michael@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Active",
    orders: 7,
    spent: 749.95,
    lastOrder: "2024-02-28",
    joined: "2023-04-12",
  },
  {
    id: "CUST-006",
    name: "Sarah Brown",
    email: "sarah@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Blocked",
    orders: 2,
    spent: 189.99,
    lastOrder: "2023-10-15",
    joined: "2023-08-22",
  },
  {
    id: "CUST-007",
    name: "David Miller",
    email: "david@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Active",
    orders: 9,
    spent: 899.99,
    lastOrder: "2024-03-01",
    joined: "2022-12-18",
  },
  {
    id: "CUST-008",
    name: "Jennifer Taylor",
    email: "jennifer@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "Active",
    orders: 5,
    spent: 469.95,
    lastOrder: "2024-02-15",
    joined: "2023-05-30",
  },
]

export default function CustomersPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AdminSidebar />
      <div className="flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
            <div className="flex items-center gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Customer
              </Button>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex w-full md:w-auto items-center gap-2">
              <Input placeholder="Search customers..." className="max-w-sm" />
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          <div className="mt-6 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead className="hidden md:table-cell">Last Order</TableHead>
                  <TableHead className="hidden lg:table-cell">Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={customer.avatar} alt={customer.name} />
                          <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-muted-foreground">{customer.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge
                        variant={
                          customer.status === "Active"
                            ? "default"
                            : customer.status === "Inactive"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{customer.orders}</TableCell>
                    <TableCell>${customer.spent.toFixed(2)}</TableCell>
                    <TableCell className="hidden md:table-cell">{customer.lastOrder}</TableCell>
                    <TableCell className="hidden lg:table-cell">{customer.joined}</TableCell>
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
                          <DropdownMenuItem>View customer</DropdownMenuItem>
                          <DropdownMenuItem>Edit customer</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View orders</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Block customer</DropdownMenuItem>
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
              Showing <strong>8</strong> of <strong>32</strong> customers
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
                4
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

