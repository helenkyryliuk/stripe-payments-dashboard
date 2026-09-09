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
import { NavLink, useLocation, BrowserRouter } from "react-router";
import {
  House,
  ChartNoAxesCombined,
  SquarePlus,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: House },
  { title: "Create Payment", url: "/create-payment", icon: SquarePlus },
  { title: "Analytics", url: "/analytics", icon: ChartNoAxesCombined },
  { title: "Payment Links", url: "/payment-links", icon: ExternalLink },
];

export function AppSidebar() {
  const [loc, setLoc] = useState();
  const location = useLocation();
  useEffect(() => {
    setLoc(location.pathname);
  }, [location]);
  return (
    <BrowserRouter>
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
            {navigationItems.map((item) => {
              const isActive = loc === item.url;
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
    </BrowserRouter>
  );
}
