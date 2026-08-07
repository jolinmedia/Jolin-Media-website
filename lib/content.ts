import { supabase } from "./supabase";
import type {
  Deliverable,
  Faq,
  PortfolioPhoto,
  QuoteService,
  ReelItem,
  Service,
  ServiceAddon,
} from "./types";

export async function getPortfolioPhotos(): Promise<PortfolioPhoto[]> {
  const { data, error } = await supabase
    .from("portfolio_photos")
    .select("*")
    .order("sort_order");
  if (error) throw error;
  return data;
}

export async function getReelItems(): Promise<ReelItem[]> {
  const { data, error } = await supabase.from("reel_items").select("*").order("sort_order");
  if (error) throw error;
  return data;
}

export async function getServices(): Promise<Service[]> {
  const { data, error } = await supabase.from("services").select("*").order("sort_order");
  if (error) throw error;
  return data;
}

export async function getQuoteServices(): Promise<QuoteService[]> {
  const { data, error } = await supabase.from("quote_services").select("*").order("sort_order");
  if (error) throw error;
  return data;
}

export async function getServiceAddons(): Promise<ServiceAddon[]> {
  const { data, error } = await supabase.from("service_addons").select("*").order("sort_order");
  if (error) throw error;
  return data;
}

export async function getDeliverables(): Promise<Deliverable[]> {
  const { data, error } = await supabase.from("deliverables").select("*").order("sort_order");
  if (error) throw error;
  return data;
}

export async function getFaqs(): Promise<Faq[]> {
  const { data, error } = await supabase.from("faqs").select("*").order("sort_order");
  if (error) throw error;
  return data;
}
