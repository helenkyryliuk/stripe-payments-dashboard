import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar.tsx";
import { useState } from "react";
import { Rocket } from "lucide-react";
import { CopyLinkInput } from "./CopyLinkInput.tsx";
import { createPaymentLink } from "../api/paymentLinks.api.ts";

const formSchema = z.object({
  productName: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
  downloadUrl: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  amount: z.number().min(1, "Bug title must be at least 5 characters."),
});

export function CreatePaymentPage() {
  const [isLoading, setIsLoading] = useState();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      description: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    await createPaymentLink({
      productName: data.productName,
      description: data.description,
      amount: Math.round(data.amount * 100),
      currency: "nzd",
      downloadUrl: data.downloadUrl,
    });
  };
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
          <h2 className="create-payment-header">
            Create Payment <Rocket />
          </h2>

          <div className="create-payment-description">
            Create a payment link for your digital product and start getting
            paid.
          </div>
          <div className="max-w-xl mx-auto my-8 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm font-sans">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              What happens next?
            </h2>

            <div className="relative space-y-8">
              <div className="absolute top-4 bottom-4 left-[15px] w-[1px] bg-gray-200 pointer-events-none"></div>

              <div className="relative flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-600 bg-white text-purple-600 font-medium text-sm shrink-0 z-10">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
                    Create Payment
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-normal">
                    Fill in the details and create a payment request.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-600 bg-white text-purple-600 font-medium text-sm shrink-0 z-10">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
                    Share Link
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-normal">
                    We'll generate a secure checkout link for you.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-600 bg-white text-purple-600 font-medium text-sm shrink-0 z-10">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
                    Customer Pays
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-normal">
                    Your customer opens the link and completes payment.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-600 bg-white text-purple-600 font-medium text-sm shrink-0 z-10">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
                    Get Paid
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-normal">
                    You'll be notified and can track the payment in your
                    dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xl mx-auto my-8 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm font-sans">
            <div className="flex items-start gap-3 mb-6">
              <div className="text-purple-600 mt-1 shrink-0">
                <svg
                  xmlns="http://w3.org"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="transform -rotate-45"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 leading-tight">
                  After Creation
                </h2>
                <p className="text-gray-500 text-sm mt-0.5 leading-normal">
                  Share this link with your customer to collect payment.
                </p>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">
                Checkout URL
              </label>
              <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600">
                <input
                  type="text"
                  readOnly
                  value="https://paypilot.app"
                  className="w-full px-4 py-3 text-sm text-gray-700 bg-white outline-none selection:bg-purple-100"
                />
                <button className="flex items-center gap-2 px-5 bg-purple-50 hover:bg-purple-100 border-l border-gray-200 text-purple-600 text-sm font-semibold transition-colors shrink-0">
                  <svg
                    xmlns="http://w3.org"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy Link
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 text-sm font-semibold rounded-xl transition-colors"
              >
                Open Checkout
                <svg
                  xmlns="http://w3.org"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-gray-700"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-50 hover:bg-purple-100 text-purple-600 text-sm font-semibold rounded-xl transition-colors">
                <svg
                  xmlns="http://w3.org"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Share via Email
              </button>
            </div>
          </div>
          <div className="flex flex-row items-start gap-4 w-full">
            <Card className="w-full sm:max-w-md m-7 mb-9 mt-5">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>
                  Enter the payment information and configure your link.
                </CardDescription>
              </CardHeader>
              {/* <CopyLinkInput /> */}
              <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <FieldSet>
                      <FieldGroup>
                        <div className="grid grid-cols-2 gap-4">
                          {/* <Field className="flex-2"> */}
                          <Controller
                            name="productName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={fieldState.invalid}
                                className="flex-2"
                              >
                                <FieldLabel htmlFor="form-rhf-demo-title">
                                  Payment for
                                </FieldLabel>
                                <Input
                                  {...field}
                                  id="form-rhf-demo-title"
                                  aria-invalid={fieldState.invalid}
                                  placeholder="Enter a product or service"
                                  autoComplete="off"
                                />
                                {fieldState.invalid && (
                                  <FieldError errors={[fieldState.error]} />
                                )}
                              </Field>
                            )}
                          />
                          <Controller
                            name="amount"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-title">
                                  Amount
                                </FieldLabel>
                                <InputGroup>
                                  <InputGroupAddon>
                                    <InputGroupText>$</InputGroupText>
                                  </InputGroupAddon>
                                  <InputGroupInput
                                    {...field}
                                    id="number"
                                    type="number"
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      // Keep it as a number if valid, or null/empty string if blank
                                      field.onChange(
                                        val === "" ? "" : Number(val),
                                      );
                                    }}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="0.00"
                                    // autoComplete="off"
                                  />
                                  <InputGroupAddon align="inline-end">
                                    <InputGroupText>NZD</InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>

                                {fieldState.invalid && (
                                  <FieldError errors={[fieldState.error]} />
                                )}
                              </Field>
                            )}
                          />
                        </div>
                      </FieldGroup>
                    </FieldSet>

                    <FieldSet>
                      <FieldGroup>
                        <Controller
                          name="description"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="form-rhf-demo-description">
                                Description
                              </FieldLabel>
                              <InputGroup>
                                <InputGroupTextarea
                                  {...field}
                                  id="form-rhf-demo-description"
                                  placeholder="What is this payment for?"
                                  rows={6}
                                  className="min-h-24 resize-none"
                                  aria-invalid={fieldState.invalid}
                                />
                                <InputGroupAddon align="block-end">
                                  <InputGroupText className="tabular-nums">
                                    {field.value.length}/100 characters
                                  </InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <FieldDescription>
                                This will appear on the payment page and in
                                receipts.
                              </FieldDescription>
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                        <Controller
                          name="downloadUrl"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="form-rhf-demo-title">
                                Download URL
                              </FieldLabel>
                              <Input
                                {...field}
                                id="form-rhf-demo-title"
                                aria-invalid={fieldState.invalid}
                                placeholder="Login button not working on mobile"
                                autoComplete="off"
                              />
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
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
                >
                  {isLoading ? (
                    <div className="spinner" id="spinner"></div>
                  ) : (
                    "Create payment"
                  )}
                </Button>
              </CardFooter>
            </Card>

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
