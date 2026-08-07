/** Appends an ImageKit URL-based transformation to a video src, e.g. for right-sized autoplay loops. */
export function ikVideo(src: string, transform: string) {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}tr=${transform}`;
}

/** ImageKit's video-thumbnail endpoint: appends /ik-thumbnail.jpg to a video URL to pull a poster frame. */
export function ikVideoPoster(src: string, transform?: string) {
  const base = `${src}/ik-thumbnail.jpg`;
  return transform ? `${base}?tr=${transform}` : base;
}
