"use client";

import { useActionState } from "react";
import { submitBookingRequest, type BookingFormState } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { Section } from "@/components/ui/Section";
import { CONTACT } from "@/data/contact";

const initialState: BookingFormState = { status: "idle", message: "" };

export function Contact() {
  const [state, formAction, pending] = useActionState(
    submitBookingRequest,
    initialState,
  );

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 gap-[60px] md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="mb-4 font-display text-[40px] font-semibold text-charcoal">
            {CONTACT.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-body-warm">
            {CONTACT.intro}
          </p>
        </div>

        <form
          action={formAction}
          className="grid grid-cols-1 gap-4 rounded-[24px] border-2 border-charcoal/8 bg-white p-9 sm:grid-cols-2"
        >
          <Input name="fullName" placeholder={CONTACT.form.fullName} required />
          <Input
            name="email"
            type="email"
            placeholder={CONTACT.form.email}
            required
          />
          <Input name="eventDate" type="date" required />
          <Input name="startTime" type="time" />
          <Input
            name="eventLocation"
            placeholder={CONTACT.form.eventLocation}
            required
            className="sm:col-span-2"
          />
          <Select name="eventType" defaultValue="">
            <option value="" disabled>
              {CONTACT.form.eventTypePlaceholder}
            </option>
            {CONTACT.form.eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <Input
            name="estimatedGuests"
            type="number"
            min={0}
            placeholder={CONTACT.form.estimatedGuests}
          />
          <Textarea
            name="message"
            rows={4}
            placeholder={CONTACT.form.message}
            className="sm:col-span-2"
          />

          <Button
            type="submit"
            variant="block"
            disabled={pending}
            className="sm:col-span-2"
          >
            {pending ? CONTACT.form.submitting : CONTACT.form.submit}
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
    </Section>
  );
}
