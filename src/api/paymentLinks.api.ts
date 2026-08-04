import api from "./axiosInstance";

export interface CreatePaymentLinkRequest {
  productName: string;
  description?: string;
  amount: number;
  currency: string;
  downloadUrl?: string;
}

export interface PaymentLink {
  id: string;
  productName: string;
  description: string | null;
  amount: number;
  currency: string;
  slug: string;
  downloadUrl: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  totalPayments?: number;
  revenue?: number;
}

export interface UpdatePaymentLinkStatusRequest {
  isActive: boolean;
}

export async function createPaymentLink(
  paymentLink: CreatePaymentLinkRequest,
): Promise<PaymentLink> {
  const response = await api.post<PaymentLink>("/payment-links", paymentLink);

  return response.data;
}

export async function getPaymentLinks(): Promise<PaymentLink[]> {
  const response = await api.get<PaymentLink[]>("/payment-links");

  return response.data;
}

export async function getPaymentLinkBySlug(slug: string): Promise<PaymentLink> {
  const response = await api.get<PaymentLink>(
    `/payment-links/${encodeURIComponent(slug)}`,
  );

  return response.data;
}

export async function updatePaymentLinkStatus(
  id: string,
  isActive: boolean,
): Promise<PaymentLink> {
  const response = await api.patch<PaymentLink>(`/payment-links/${id}/status`, {
    isActive,
  });

  return response.data;
}

export async function deletePaymentLink(id: string): Promise<void> {
  await api.delete(`/payment-links/${id}`);
}
