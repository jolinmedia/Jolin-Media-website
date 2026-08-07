import Link from "next/link";
import type { QuoteService } from "@/lib/types";

export function QuoteCard({ service }: { service: QuoteService }) {
  return (
    <article className="quote-card">
      <span className="quote-card__price">Quote on request</span>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <Link href="/contact" className="btn btn--ghost">
        Get a quote
      </Link>
    </article>
  );
}
