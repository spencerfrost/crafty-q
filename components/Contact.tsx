"use client";

import { useActionState } from "react";
import { submitBookingRequest, type BookingFormState } from "@/app/actions";

const initialState: BookingFormState = { status: "idle", message: "" };

const inputClass =
  "rounded-[10px] border-2 border-input-border bg-input-bg px-[14px] py-3 text-[15px] font-body text-charcoal focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)] focus:outline-none";

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
          <input
            name="fullName"
            placeholder="Full Name"
            required
            className={inputClass}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className={inputClass}
          />
          <input
            name="eventDate"
            type="date"
            required
            className={inputClass}
          />
          <input name="startTime" type="time" className={inputClass} />
          <input
            name="eventLocation"
            placeholder="Event Location (London & area)"
            required
            className={`sm:col-span-2 ${inputClass}`}
          />
          <select
            name="eventType"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Event Type
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
            <option value="Festival">Festival</option>
            <option value="Other">Other</option>
          </select>
          <input
            name="estimatedGuests"
            type="number"
            min={0}
            placeholder="Estimated Guests"
            className={inputClass}
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message / Special Requests"
            className={`resize-y sm:col-span-2 ${inputClass}`}
          />

          <button
            type="submit"
            disabled={pending}
            className="rounded-xl bg-pink px-4 py-4 text-base font-extrabold text-cream shadow-[0_5px_0_#B7304F] disabled:opacity-70 sm:col-span-2"
          >
            {pending ? "Sending…" : "Send Booking Request"}
          </button>

          {state.message && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm font-bold sm:col-span-2 ${
                state.status === "success" ? "text-teal" : "text-pink"
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
