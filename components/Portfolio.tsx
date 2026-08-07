import Image from "next/image";
import { getPortfolioPhotos, getReelItems } from "@/lib/content";
import { ikVideo } from "@/lib/imagekit";
import { PLAYBOOK_URL } from "@/lib/constants";

export async function Portfolio() {
  const [photos, reelItems] = await Promise.all([getPortfolioPhotos(), getReelItems()]);

  const portraits = photos.filter((p) => p.category === "portrait");
  const sports = photos.filter((p) => p.category === "sports");
  const youtubeEdits = reelItems.filter((r) => r.kind === "youtube").slice(0, 3);
  const aerialLoops = reelItems.filter((r) => r.kind === "aerial").slice(0, 2);
  const [topLeft, topRight] = youtubeEdits;
  const feature = youtubeEdits[2];

  return (
    <section id="work" className="portfolio wrap">
      <h2 className="section-label mono">Portfolio</h2>

      <PhotoGroup title="Portraits" photos={portraits} />
      <PhotoGroup title="Sports" photos={sports} />

      <div className="portfolio__reel">
        <div className="portfolio__group-head">
          <h3>Film</h3>
          <span className="mono muted">3 edits &middot; 2 aerial loops</span>
        </div>
        <div className="reel">
          <div className="reel__row reel__row--top">
            {[topLeft, topRight].map(
              (item) => item && <YoutubeCard key={item.id} item={item} />
            )}
          </div>
          <div className="reel__row reel__row--bottom">
            {feature && <YoutubeCard item={feature} featured />}
            {aerialLoops.map((item) => (
              <div className="reel__card reel__card--loop" key={item.id}>
                {item.video_url && (
                  <video
                    src={ikVideo(item.video_url, "w-960,q-50")}
                    poster={item.poster_url ? ikVideo(item.poster_url, "w-960") : undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-label="Aerial drone loop, muted"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <a className="playbook-link" href={PLAYBOOK_URL} target="_blank" rel="noopener">
        View the full portfolio on Playbook &rarr;
      </a>
    </section>
  );
}

function PhotoGroup({
  title,
  photos,
}: {
  title: string;
  photos: Awaited<ReturnType<typeof getPortfolioPhotos>>;
}) {
  return (
    <div className="portfolio__group">
      <div className="portfolio__group-head">
        <h3>{title}</h3>
        <span className="mono muted">{String(photos.length).padStart(2, "0")} frames</span>
      </div>
      <div className="grid grid--6">
        {photos.map((photo) => (
          <figure className="frame" key={photo.id}>
            <Image
              src={photo.image_url}
              alt={photo.alt_text}
              fill
              sizes="(max-width: 900px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

function YoutubeCard({
  item,
  featured,
}: {
  item: Awaited<ReturnType<typeof getReelItems>>[number];
  featured?: boolean;
}) {
  return (
    <a
      className={`reel__card${featured ? " reel__card--feature" : ""}`}
      href={item.external_url ?? undefined}
      target="_blank"
      rel="noopener"
    >
      {item.poster_url && (
        <Image
          src={item.poster_url}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          className="reel__thumb"
          loading="lazy"
          unoptimized={item.kind === "youtube"}
        />
      )}
      <span className="reel__play" aria-hidden="true">
        &#9654;
      </span>
    </a>
  );
}
