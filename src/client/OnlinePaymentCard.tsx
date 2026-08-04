import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar.tsx";
import { Rocket } from "lucide-react";

export function OnlinePaymentCard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
          <h2 className="create-payment-header">Create Payment</h2>
          <Rocket className="mt-2" />
          <div className="create-payment-description">
            Create a secure one-time payment request and share the link with
            your customer.
          </div>
          <div className="flex flex-row items-start gap-4 w-full">
            {/* Left Column: Your Form Section */}
            {/* <div className="flex-1 min-w-[200px]"> */}
            <Card className="w-full sm:max-w-md m-7 mb-9 mt-5 ">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>
                  <div>{/* <LockKeyholeIcon /> Secure payment{" "} */}</div>
                  Enter the payment information and configure your request.{" "}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Card size="sm" className="mx-auto w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Small Card</CardTitle>
                    <CardDescription>
                      This card uses the small size variant.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      The card component supports a size prop that can be set to
                      &quot;sm&quot; for a more compact appearance.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Action
                    </Button>
                  </CardFooter>
                </Card>
              </CardContent>
            </Card>
            {/* </div> */}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
