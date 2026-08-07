import Image from "next/image";
import { ABOUT_COPY, ABOUT_IMAGE_URL, BADGES, PROCESS_STEPS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="about wrap">
      <div className="about__media">
        <div className="hud hud--tight">
          <span className="hud__corner hud__corner--tl" />
          <span className="hud__corner hud__corner--tr" />
          <span className="hud__corner hud__corner--bl" />
          <span className="hud__corner hud__corner--br" />
          <Image
            src={ABOUT_IMAGE_URL}
            alt="Joey Jolin, outdoor portrait near a barn"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="about__copy">
        <h2 className="section-label mono">About</h2>
        <p className="about__lede">{ABOUT_COPY}</p>

        <div className="process">
          <h3 className="process__title mono">How it goes</h3>
          <ol className="process__list">
            {PROCESS_STEPS.map((step) => (
              <li key={step.num}>
                <span className="process__num mono">{step.num}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ul className="badges mono">
          {BADGES.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
