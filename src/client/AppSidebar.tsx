import { DropdownMenu } from "radix-ui";
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
import { Plus } from "lucide-react";

export function AppSidebar() {
  return (
    <>
      <Sidebar>
        <SidebarHeader title="Payments" />
        Payments
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupAction>
              <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent></SidebarGroupContent>
          </SidebarGroup>
          <SidebarMenuItem>
            {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                Select Workspace
                <ChevronDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
              <DropdownMenuItem>
                <span>Acme Inc</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
            <SidebarMenuButton asChild isActive>
              <a href="#">Home</a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>Select Workspace</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}
