import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample order data
const orders = [
  {
    id: "ORD-001",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    status: "Delivered",
    date: "2024-03-10",
    total: 129.99,
  },
  {
    id: "ORD-002",
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    status: "Processing",
    date: "2024-03-09",
    total: 79.5,
  },
  {
    id: "ORD-003",
    customer: {
      name: "Robert Johnson",
      email: "robert@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    status: "Shipped",
    date: "2024-03-08",
    total: 249.99,
  },
  {
    id: "ORD-004",
    customer: {
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    status: "Pending",
    date: "2024-03-07",
    total: 59.99,
  },
]

export function RecentOrders() {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
              <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{order.customer.name}</p>
              <p className="text-sm text-muted-foreground">{order.id}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge
              variant={
                order.status === "Delivered"
                  ? "default"
                  : order.status === "Processing"
                    ? "secondary"
                    : order.status === "Shipped"
                      ? "outline"
                      : "destructive"
              }
            >
              {order.status}
            </Badge>
            <div className="text-sm font-medium">${order.total.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

