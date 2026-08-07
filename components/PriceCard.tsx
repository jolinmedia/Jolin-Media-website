import Link from "next/link";
import type { Service } from "@/lib/types";

export function PriceCard({ service }: { service: Service }) {
  const href = service.cta_target === "book" ? "/book" : "/contact";
  return (
    <article className={`price-card${service.featured ? " price-card--featured" : ""}`}>
      {service.featured_label && <span className="price-card__flag">{service.featured_label}</span>}
      <div className="price-card__name">{service.name}</div>
      <div className="price-card__price">
        {service.price_display}
        {service.price_unit && <span>{service.price_unit}</span>}
      </div>
      {service.duration_note && <div className="price-card__unit">{service.duration_note}</div>}
      <ul className="price-card__list">
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link href={href} className="btn btn--primary btn--block">
        {service.cta_label}
      </Link>
    </article>
  );
}
