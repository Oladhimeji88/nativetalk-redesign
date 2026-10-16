// Shared pricing model — PRD §4.2 (Business App), §5.4/§5.6 (CRM), §7.1 (cross-product).
// Billing frequency discounts are unified across Business App and CRM (§7.1):
// Monthly 0% / Quarterly 0% / Biannual 10% / Annual 20%.

export type FrequencyKey = "monthly" | "quarterly" | "biannual" | "annual";

export type Frequency = {
  key: FrequencyKey;
  label: string;
  months: number;
  discount: number; // 0–1
  /** Label for the running total shown on each plan (PRD §4.2.2 "Display"). */
  totalLabel: string;
  /** Optional savings badge (PRD requirement 30). */
  badge?: string;
};

export const FREQUENCIES: Frequency[] = [
  { key: "monthly", label: "Monthly", months: 1, discount: 0, totalLabel: "Monthly price" },
  { key: "quarterly", label: "Quarterly", months: 3, discount: 0, totalLabel: "Quarterly total" },
  { key: "biannual", label: "Biannual", months: 6, discount: 0.1, totalLabel: "6-month total", badge: "Save 10%" },
  { key: "annual", label: "Annual", months: 12, discount: 0.2, totalLabel: "Annual total", badge: "Save 20%" },
];

export function formatNaira(value: number): string {
  return "₦" + Math.round(value).toLocaleString("en-NG");
}

/** Running total per user for a given monthly base rate and billing frequency (§4.2.2 req. 28). */
export function termTotal(baseMonthly: number, freq: Frequency): number {
  return baseMonthly * freq.months * (1 - freq.discount);
}

export type Plan = {
  name: string;
  users: string;
  /** Per-user monthly rate in naira; null for custom/negotiated plans (Enterprise). */
  baseMonthly: number | null;
  /** Shown when baseMonthly is null (Enterprise — never a calculated price, §4.2.35). */
  customLabel?: string;
  blurb: string;
  features: string[];
  cta: { label: string; href: string; style: "btn-green" | "btn-ink" | "btn-outline" };
  featured?: boolean;
};

export type AddOn = {
  name: string;
  price: string;
  cadence: string;
  features: string[];
};

// AI Executive Summary & Analytics — identical on Business App (§4.3) and CRM (§5.7).
export const AI_ADDON: AddOn = {
  name: "AI Executive Summary & Analytics",
  price: "₦50,000",
  cadence: "per month",
  features: [
    "AI Call Summary",
    "Conversation Insights",
    "Analytics Dashboard",
    "Performance Reporting",
  ],
};
