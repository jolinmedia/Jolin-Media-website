"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGO_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/#work", label: "Work", match: null },
  { href: "/services", label: "Services", match: "/services" },
  { href: "/#about", label: "About", match: null },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <Link className="brand" href="/#top">
          <Image src={LOGO_URL} alt="Jolin Media" width={104} height={48} className="brand__mark" priority />
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.match && pathname === link.match ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="site-nav__cta"
            aria-current={pathname === "/book" ? "page" : undefined}
          >
            Check Dates
          </Link>
        </nav>
      </div>
    </header>
  );
}
