import { SITE } from "@/data/site";

export const CONTACT = {
  title: "Let's Plan Your Event",
  intro: `Fill out the form and we'll get back to you within ${SITE.responseTime} with availability and a quote tailored to your event.`,
  form: {
    fullName: "Full Name",
    email: "Email",
    eventLocation: "Event Location (London & area)",
    eventTypePlaceholder: "Event Type",
    eventTypes: ["Birthday", "Corporate", "Festival", "Other"],
    estimatedGuests: "Estimated Guests",
    message: "Message / Special Requests",
    submit: "Send Booking Request",
    submitting: "Sending…",
  },
  messages: {
    missingFields:
      "Please fill in your name, email, event date, and location.",
    success: `Thanks! Your booking request is in — we'll get back to you within ${SITE.responseTime}.`,
  },
};
