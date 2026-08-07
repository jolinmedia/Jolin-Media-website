import Image from "next/image";
import { CONTACT, HERO_IMAGE_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__copy">
        <p className="eyebrow mono">
          {CONTACT.location} &middot; {CONTACT.coords}
        </p>
        <h1 className="hero__headline">
          Videography, photography,
          <br /> and drone &mdash; shot and
          <br /> edited by one person.
        </h1>
        <p className="hero__sub">
          I run Jolin Media out of southeast Iowa: a camera, a drone, an edit bay, and me. No
          travel fee within 30 miles of Burlington. If it looks good in the last hour of light, I
          want to shoot it.
        </p>
        <div className="hero__actions">
          <a href="#book" className="btn btn--primary">
            Check dates
          </a>
          <a href="#work" className="btn btn--ghost">
            See the work &darr;
          </a>
        </div>
      </div>
      <div className="hero__media">
        <div className="hud">
          <span className="hud__corner hud__corner--tl" />
          <span className="hud__corner hud__corner--tr" />
          <span className="hud__corner hud__corner--bl" />
          <span className="hud__corner hud__corner--br" />
          <Image
            src={HERO_IMAGE_URL}
            alt="Joey Jolin courtside at a championship event, camera in hand"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <span className="hud__tag mono">35MM &middot; F1.8 &middot; PART 107</span>
        </div>
      </div>
    </section>
  );
}
