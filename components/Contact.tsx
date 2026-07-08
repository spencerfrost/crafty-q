"use client";

import { useActionState } from "react";
import { submitBookingRequest, type BookingFormState } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";

const initialState: BookingFormState = { status: "idle", message: "" };

export function Contact() {
  const [state, formAction, pending] = useActionState(
    submitBookingRequest,
    initialState,
  );

  return (
    <section
      id="contact"
      className="scroll-mt-[84px] bg-cream px-6 py-[100px] md:px-14"
    >
      <div className="grid grid-cols-1 gap-[60px] md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="mb-4 font-display text-[40px] font-semibold text-charcoal">
            Let&apos;s Plan Your Event
          </h2>
          <p className="text-[17px] leading-[1.7] text-body-warm">
            Fill out the form and we&apos;ll get back to you within 24 hours
            with availability and a quote tailored to your event.
          </p>
        </div>

        <form
          action={formAction}
          className="grid grid-cols-1 gap-4 rounded-[24px] border-2 border-charcoal/8 bg-white p-9 sm:grid-cols-2"
        >
          <Input name="fullName" placeholder="Full Name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="eventDate" type="date" required />
          <Input name="startTime" type="time" />
          <Input
            name="eventLocation"
            placeholder="Event Location (London & area)"
            required
            className="sm:col-span-2"
          />
          <Select name="eventType" defaultValue="">
            <option value="" disabled>
              Event Type
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
            <option value="Festival">Festival</option>
            <option value="Other">Other</option>
          </Select>
          <Input
            name="estimatedGuests"
            type="number"
            min={0}
            placeholder="Estimated Guests"
          />
          <Textarea
            name="message"
            rows={4}
            placeholder="Message / Special Requests"
            className="sm:col-span-2"
          />

          <Button
            type="submit"
            variant="block"
            disabled={pending}
            className="sm:col-span-2"
          >
            {pending ? "Sending…" : "Send Booking Request"}
          </Button>

          {state.message && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm font-bold sm:col-span-2 ${
                state.status === "success" ? "text-blush" : "text-indigo"
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
