import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PriceCard } from "@/components/PriceCard";
import { QuoteCard } from "@/components/QuoteCard";
import {
  getDeliverables,
  getFaqs,
  getQuoteServices,
  getServiceAddons,
  getServices,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Videography, portrait, and sports photography pricing for Jolin Media — Burlington, Iowa.",
};

export default async function ServicesPage() {
  const [services, quoteServices, addons, deliverables, faqs] = await Promise.all([
    getServices(),
    getQuoteServices(),
    getServiceAddons(),
    getDeliverables(),
    getFaqs(),
  ]);

  const videography = services.filter((s) => s.section === "videography");
  const portrait = services.filter((s) => s.section === "portrait");
  const sports = services.filter((s) => s.section === "sports");
  const filmStills = deliverables.filter((d) => d.group_name === "film_stills");
  const eventsWeb = deliverables.filter((d) => d.group_name === "events_web");

  return (
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow mono">Pricing</p>
        <h1 className="page-hero__title">Services &amp; pricing</h1>
        <p className="page-hero__sub">
          Flat rates for the work I book most. Event coverage and web design get scoped to the
          job — reach out and I&apos;ll send a plan and a price, usually same day.
        </p>
      </section>

      <section className="pricing-group wrap" id="videography">
        <div className="pricing-group__head">
          <h2>Videography</h2>
          <p className="mono muted pricing-group__note">
            Priced per finished minute — the length of the film you actually get
          </p>
        </div>
        <div className="price-grid">
          {videography.map((service) => (
            <PriceCard service={service} key={service.id} />
          ))}
        </div>
      </section>

      <section className="pricing-group wrap" id="portraits">
        <div className="pricing-group__head">
          <h2>Portrait photography</h2>
        </div>
        <div className="price-grid price-grid--3">
          {portrait.map((service) => (
            <PriceCard service={service} key={service.id} />
          ))}
        </div>
        <div className="addons">
          <span className="addons__title mono">Add-ons — any tier</span>
          <ul className="addons__list">
            {addons.map((addon) => (
              <li key={addon.id}>
                {addon.label} <b>{addon.price_display}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pricing-group wrap" id="sports">
        <div className="pricing-group__head">
          <h2>Sports photography</h2>
        </div>
        <div className="price-grid price-grid--3">
          {sports.map((service) => (
            <PriceCard service={service} key={service.id} />
          ))}
        </div>
      </section>

      <section className="pricing-group wrap" id="quote">
        <div className="pricing-group__head">
          <h2>Event coverage &amp; websites</h2>
          <p className="mono muted pricing-group__note">
            Every job is scoped to what you actually need
          </p>
        </div>
        <div className="quote-grid">
          {quoteServices.map((service) => (
            <QuoteCard service={service} key={service.id} />
          ))}
        </div>
      </section>

      <section className="deliverables wrap">
        <h2 className="section-label mono">Deliverables</h2>
        <div className="deliverables-grid">
          <div className="deliverables-col">
            <h3>Film &amp; stills</h3>
            <ul>
              {filmStills.map((d) => (
                <li key={d.id}>{d.item_text}</li>
              ))}
            </ul>
          </div>
          <div className="deliverables-col">
            <h3>Events &amp; web</h3>
            <ul>
              {eventsWeb.map((d) => (
                <li key={d.id}>{d.item_text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="faq wrap">
        <h2 className="section-label mono">FAQ</h2>
        <FaqAccordion faqs={faqs} />
      </section>
    </main>
  );
}
