"use server";

import { CONTACT } from "@/data/contact";

export type BookingFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitBookingRequest(
  _prevState: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const fullName = formData.get("fullName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const eventDate = formData.get("eventDate")?.toString().trim();
  const eventLocation = formData.get("eventLocation")?.toString().trim();

  if (!fullName || !email || !eventDate || !eventLocation) {
    return {
      status: "error",
      message: CONTACT.messages.missingFields,
    };
  }

  const booking = {
    fullName,
    email,
    eventDate,
    startTime: formData.get("startTime")?.toString() ?? "",
    eventLocation,
    eventType: formData.get("eventType")?.toString() ?? "",
    estimatedGuests: formData.get("estimatedGuests")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  };

  // Lead-capture stub: replace with an email/CRM integration.
  console.log("New Crafty Q booking request:", booking);

  return {
    status: "success",
    message: CONTACT.messages.success,
  };
}
