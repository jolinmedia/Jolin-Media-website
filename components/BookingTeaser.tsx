import { CONTACT, BOOKING_POLICY } from "@/lib/constants";
import { CtaCard } from "./CtaCard";

export function BookingTeaser() {
  return (
    <section id="book" className="booking wrap">
      <div className="booking__copy">
        <h2 className="section-label mono">Book the next available light</h2>
        <p>
          Real-time availability, booked straight into my calendar — no back-and-forth.{" "}
          {BOOKING_POLICY.photo} {BOOKING_POLICY.video}
        </p>
        <div className="booking__contact mono">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener">
            {CONTACT.instagram}
          </a>
        </div>
      </div>
      <div className="booking__cal">
        <CtaCard
          href="/book"
          badge="Real-time availability"
          title="Check dates & book →"
          sub="Cal.com · booked straight into my calendar"
        />
      </div>
    </section>
  );
}
