const TILES = [
  {
    code: "VI",
    title: "Videography",
    body: "Short-form content and full commercial production, priced per finished minute.",
  },
  {
    code: "PH",
    title: "Photography",
    body: "Portrait and sports sessions — edited galleries, fast turnaround.",
  },
  {
    code: "DR",
    title: "Drone",
    body: "Part 107 licensed 4K60 aerial — stills or footage, added to any shoot.",
  },
  {
    code: "EV",
    title: "Event Coverage",
    body: "Same-week recap films and sponsor cutdowns. Quote on request.",
  },
  {
    code: "WB",
    title: "Websites",
    body: "Sites built around your own footage. Quote on request.",
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="strip wrap">
      <h2 className="section-label mono">What I do</h2>
      <div className="tiles">
        {TILES.map((tile) => (
          <article className="tile" key={tile.code}>
            <span className="tile__code mono">{tile.code}</span>
            <h3>{tile.title}</h3>
            <p>{tile.body}</p>
          </article>
        ))}
        <article className="tile tile--cta">
          <span className="tile__code mono">BK</span>
          <h3>Bookings</h3>
          <p>Real-time availability, no back-and-forth.</p>
          <a href="#book" className="btn btn--primary btn--small">
            Check dates
          </a>
        </article>
      </div>
    </section>
  );
}
