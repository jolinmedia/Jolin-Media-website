import type { Metadata } from "next";
import { CtaCard } from "@/components/CtaCard";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jolin Media for videography, photography, or drone work in Burlington, Iowa.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow mono">
          {CONTACT.location} &middot; {CONTACT.coords}
        </p>
        <h1 className="page-hero__title">Get in touch</h1>
        <p className="page-hero__sub">
          Questions, quotes, or anything you want to talk through before you book — reach out
          directly and I&apos;ll get back to you fast.
        </p>
      </section>

      <section className="contact-grid wrap">
        <div className="contact-info">
          <div className="contact-info__block">
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
          <div className="contact-info__block">
            <span className="contact-info__label mono">Instagram</span>
            <a className="contact-info__value" href={CONTACT.instagramUrl} target="_blank" rel="noopener">
              {CONTACT.instagram}
            </a>
          </div>
          <div className="contact-info__block">
            <span className="contact-info__label mono">Based in</span>
            <span className="contact-info__value">{CONTACT.location}</span>
          </div>

          <div className="contact-policy mono">
            <p>
              <strong>Photography bookings</strong> hold a 50% deposit at the time of booking.
            </p>
            <p style={{ marginTop: 10 }}>
              <strong>Video work</strong> is scoped and priced per finished minute, billed after
              the shoot — nothing collected at booking.
            </p>
          </div>
        </div>

        <CtaCard
          href="/book"
          badge="Real-time availability"
          title="Check dates & book →"
          sub="Cal.com · booked straight into my calendar"
        />
      </section>
    </main>
  );
}
