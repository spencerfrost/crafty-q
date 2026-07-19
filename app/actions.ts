"use server";

import { Resend } from "resend";
import { CONTACT } from "@/data/contact";

export type BookingFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const BOOKING_EMAIL_TO =
  process.env.BOOKING_EMAIL_TO ?? "craftyqfacepainting@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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

  const rows: [string, string][] = [
    ["Name", booking.fullName],
    ["Email", booking.email],
    ["Event Date", booking.eventDate],
    ["Start Time", booking.startTime || "—"],
    ["Location", booking.eventLocation],
    ["Event Type", booking.eventType || "—"],
    ["Estimated Guests", booking.estimatedGuests || "—"],
    ["Message", booking.message || "—"],
  ];

  const html = `
    <h2>New booking request from the Crafty Q website</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:bold;vertical-align:top">${label}</td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const response = await resend.emails.send({
    from: "Crafty Q Website <onboarding@resend.dev>",
    to: BOOKING_EMAIL_TO,
    replyTo: booking.email,
    subject: `Booking request: ${booking.eventDate} — ${booking.fullName}`,
    html,
  });

  if (response.error) {
    console.error("Booking email failed:", response.error);
    return {
      status: "error",
      message: CONTACT.messages.sendFailed,
    };
  }

  return {
    status: "success",
    message: CONTACT.messages.success,
  };
}
