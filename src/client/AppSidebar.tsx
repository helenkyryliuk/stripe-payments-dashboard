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
import { House, ChartNoAxesCombined, SquarePlus } from "lucide-react";

export function AppSidebar() {
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
            <SidebarMenuItem>
              <SidebarMenuButton isActive menu-button className="font-medium">
                <House />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="font-medium">
                <SquarePlus />
                Create Payment
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="font-medium">
                <ChartNoAxesCombined />
                Analytics
              </SidebarMenuButton>
            </SidebarMenuItem>
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
