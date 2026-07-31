import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
} from "./components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { House, ChartNoAxesCombined, SquarePlus } from "lucide-react";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: House },
  { title: "Create Payment", url: "/create-payment", icon: SquarePlus },
  { title: "Analytics", url: "/analytics", icon: ChartNoAxesCombined },
];

export function AppSidebar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Sidebar>
        <SidebarHeader className="p-4 flex-row pb-0">
          <div className="payflow-icon-wrapper">
            <svg
              className="payflow-icon"
              role="presentation"
              aria-hidden="true"
            >
              <use href="/src/client/public/file.svg"></use>
            </svg>
          </div>

          <div className="header-wrapper">
            <div className="header-text">PayPilot</div>
            <div className="header-description">Payments platform</div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu className="p-4">
            {/* <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupAction>
              <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent></SidebarGroupContent>
          </SidebarGroup> */}

            {navigationItems.map((item) => {
              const isActive = location.pathname === item.url;
              console.log(item.url);
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="font-medium"
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 flex-row">
          <div className="payflow-icon-wrapper circle-icon">
            <p className="circle-icon-inner">HK</p>
          </div>
          <div className="footer-wrapper">
            <div className="footer-text">Helen Kyryliuk</div>
            <div className="footer-description">helen.kyryl@gmail.com</div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
