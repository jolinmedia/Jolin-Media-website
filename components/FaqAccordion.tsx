import type { Faq } from "@/lib/types";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details className="faq-item" key={faq.id}>
          <summary>{faq.question}</summary>
          <div className="faq-item__body">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
