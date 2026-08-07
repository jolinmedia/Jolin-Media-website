export type PortfolioPhoto = {
  id: string;
  category: "portrait" | "sports";
  image_url: string;
  alt_text: string;
  sort_order: number;
};

export type ReelItem = {
  id: string;
  kind: "youtube" | "aerial";
  title: string;
  external_url: string | null;
  video_url: string | null;
  poster_url: string | null;
  sort_order: number;
};

export type Service = {
  id: string;
  section: "videography" | "portrait" | "sports";
  name: string;
  price_display: string;
  price_unit: string | null;
  duration_note: string | null;
  features: string[];
  featured: boolean;
  featured_label: string | null;
  cta_label: string;
  cta_target: "book" | "contact";
  sort_order: number;
};

export type QuoteService = {
  id: string;
  name: string;
  description: string;
  sort_order: number;
};

export type ServiceAddon = {
  id: string;
  label: string;
  price_display: string;
  sort_order: number;
};

export type Deliverable = {
  id: string;
  group_name: "film_stills" | "events_web";
  item_text: string;
  sort_order: number;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
  sort_order: number;
};
