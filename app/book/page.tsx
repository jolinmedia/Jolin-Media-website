import type { Metadata } from "next";
import { CalBooking } from "@/components/CalBooking";
import { CtaCard } from "@/components/CtaCard";
import { CONTACT, BOOKING_POLICY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book",
  description: "Check real-time availability and book Jolin Media for videography, photography, or drone work in Burlington, Iowa.",
};

export default function BookPage() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow mono">
          {CONTACT.location} &middot; {CONTACT.coords}
        </p>
        <h1 className="page-hero__title">Book the next available light</h1>
        <p className="page-hero__sub">
          Real-time availability, booked straight into my calendar — no back-and-forth. Tell me
          what, where, and when, and I&apos;ll send a plan the same day.
        </p>
      </section>

      <section className="contact-grid wrap">
        <div className="contact-info">
          <div className="contact-policy mono">
            <p>
              <strong>Photography bookings</strong> hold a 50% deposit at the time of booking.
            </p>
            <p style={{ marginTop: 10 }}>
              <strong>Video work</strong> {BOOKING_POLICY.video.replace(/^Video work /, "")}
            </p>
          </div>

          <div className="contact-info__block" style={{ marginTop: 24 }}>
            <span className="contact-info__label mono">Email</span>
            <a className="contact-info__value" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </div>
          <div className="contact-info__block">
            <span className="contact-info__label mono">Phone</span>
            <a className="contact-info__value" href={`tel:${CONTACT.phoneHref}`}>
              {CONTACT.phone}
            </a>
          </div>

          <CtaCard href="/contact" badge="Not ready to book yet?" title="Get in touch first →" quiet />
        </div>

        <CalBooking />
      </section>
    </main>
  );
}
