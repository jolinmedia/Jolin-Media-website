import Link from "next/link";

type CtaCardProps = {
  href: string;
  badge: string;
  title: string;
  sub?: string;
  quiet?: boolean;
};

export function CtaCard({ href, badge, title, sub, quiet }: CtaCardProps) {
  return (
    <Link className={`cta-card${quiet ? " cta-card--quiet" : ""}`} href={href}>
      <span className="cta-card__badge mono">{badge}</span>
      <span className="cta-card__title">{title}</span>
      {sub && <span className="cta-card__sub mono">{sub}</span>}
    </Link>
  );
}
