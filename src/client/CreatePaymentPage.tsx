import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar.tsx";
import { useState } from "react";
import { DollarSign, MailIcon } from "lucide-react";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

export function CreatePaymentPage() {
  const [isLoading, setIsLoading] = useState();
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    //create submit logic
    setIsLoading(false);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
          <h2 className="create-payment-header">Create Payment</h2>
          <div className="create-payment-description">
            Create a secure one-time payment request and share the link with
            your customer.
          </div>
          <div className="flex flex-row items-start gap-4 w-full">
            {/* Left Column: Your Form Section */}
            {/* <div className="flex-1 min-w-[200px]"> */}
            <Card className="w-full sm:max-w-md m-7 mb-9 mt-5">
              <h2 className="create-payment-header">Payment Details</h2>
              <div className="create-payment-description">
                Enter the payment information and configure your request.
              </div>
              <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <FieldSet>
                      <FieldGroup>
                        <div className="grid grid-cols-2 gap-4">
                          <Field className="flex-2">
                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                              Customer Name
                            </FieldLabel>
                            <Input
                              id="checkout-7j9-card-number-uw1"
                              placeholder="e.g. John Smith"
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                              Amount
                            </FieldLabel>
                            <InputGroup>
                              <InputGroupAddon>
                                <InputGroupText>$</InputGroupText>
                              </InputGroupAddon>
                              <InputGroupInput placeholder="0.00" />
                              <InputGroupAddon align="inline-end">
                                <InputGroupText>NZD</InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </Field>
                        </div>
                      </FieldGroup>
                    </FieldSet>

                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                        Customer Email
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupInput
                          type="email"
                          placeholder="e.g. john@example.com"
                        />
                        <InputGroupAddon>
                          <MailIcon />
                        </InputGroupAddon>
                      </InputGroup>
                    </Field>
                    <FieldSet>
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                            Payment for
                          </FieldLabel>
                          <Input
                            id="checkout-7j9-card-name-43j"
                            placeholder="Enter a product or service"
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="checkout-7j9-optional-comments">
                            Description
                          </FieldLabel>
                          <Textarea
                            id="checkout-7j9-optional-comments"
                            placeholder="What is this payment for?"
                            className="resize-none"
                          />
                          <FieldDescription>
                            This will appear on the payment page and in
                            receipts.
                          </FieldDescription>
                        </Field>
                      </FieldGroup>
                    </FieldSet>
                  </FieldGroup>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button
                  type="submit"
                  form="form-rhf-demo"
                  className="w-full"
                  disabled={isLoading}
                  id="submit"
                  onClick={onSubmit}
                >
                  {isLoading ? (
                    <div className="spinner" id="spinner"></div>
                  ) : (
                    "Create payment"
                  )}
                </Button>
              </CardFooter>
            </Card>
            {/* </div> */}

            {/* Right Column: Other Components */}
            <div className="w-120">
              <div className="browser">
                <div className="browser-header">
                  <div className="browser-controls">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>

                  {/* <div className="browser-address">
                    🔒 paypilot.app/pay/8fd92a34
                  </div> */}
                </div>

                <div className="browser-content">
                  <div className="checkout">
                    <img src="logo.svg" />

                    <h2>Website Design</h2>

                    <div className="price">$250.00</div>

                    <p>Deposit for website redesign project.</p>

                    <hr />

                    <div className="customer">
                      <i className="fa fa-user"></i>

                      <div>
                        <strong>John Smith</strong>
                        <span>john@email.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="browser-footer"></div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
