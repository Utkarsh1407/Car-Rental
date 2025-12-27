import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  Car,
  Calendar,
  Settings,
} from "lucide-react"

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, to: "/owner" },
  { title: "Add Cars", icon: Calendar, to: "/owner/add-car" },
  { title: "Manage Bookings", icon: Car, to: "/owner/manage-bookings" },
  { title: "Manage Cars", icon: Settings, to: "/owner/manage-cars" },
]

const OwnerSidebar = () => {
  return (
    <Sidebar
  collapsible="icon"
  defaultOpen
  className="
    top-16
    md:top-16
  "
>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Owner Panel</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 ${
                          isActive
                            ? "text-primary font-medium"
                            : "text-muted-foreground"
                        }`
                      }
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default OwnerSidebar
