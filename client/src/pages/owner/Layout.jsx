import NavbarOwner from "@/components/owner/NavbarOwner"
import OwnerSidebar from "@/components/owner/OwnerSidebar"
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar"
import { useAppContext } from "../../../context/AppContext"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"

const Layout = () => {
  const {isOwner, navigate} = useAppContext();
  useEffect(()=>{
    if(!isOwner){
      navigate('/')
    }
  }, [isOwner])

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      
      {/* Navbar (OUTSIDE sidebar system) */}
      <NavbarOwner />

      {/* Sidebar system START */}
      <SidebarProvider>
        <div className="flex flex-1 w-full bg-light">

          {/* Sidebar */}
          <OwnerSidebar />

          {/* Main content */}
          <main className="flex-1 p-2 w-full">
            {/* Trigger must be inside provider */}
            <SidebarTrigger className="mb-4" />
            <Outlet />
          </main>

        </div>
      </SidebarProvider>
      {/* Sidebar system END */}

    </div>
  )
}

export default Layout
