const IMAGEKIT_HOST = "ik.imagekit.io";

export default function imagekitLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (!src.includes(IMAGEKIT_HOST)) return src;
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}tr=w-${width},q-${quality ?? 75}`;
}
