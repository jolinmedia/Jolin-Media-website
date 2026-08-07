"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT, LOGO_URL, SITE_NAME } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "/#work", label: "Work", match: null },
  { href: "/services", label: "Services", match: "/services" },
  { href: "/#about", label: "About", match: null },
  { href: "/book", label: "Book", match: "/book" },
  { href: "/contact", label: "Contact", match: "/contact" },
];

export function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__row">
        <Image
          src={LOGO_URL}
          alt={SITE_NAME}
          width={70}
          height={32}
          className="brand__mark brand__mark--footer"
        />
        <nav className="site-footer__nav mono" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.match && pathname === link.match ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="site-footer__meta mono">
          <span>{CONTACT.location}</span>
          <span>{CONTACT.email}</span>
          <span>{CONTACT.phone}</span>
          <span>{CONTACT.instagram}</span>
        </div>
      </div>
    </footer>
  );
}
