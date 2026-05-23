export type CreditPackage = {
  credits: number;
  price: number;
  currency: string;
  symbol: string;
  symbolAfter?: boolean;
};

// Country → pricing config
const PRICING: Record<string, CreditPackage[]> = {
  AE: [
    { credits: 50,  price: 50,  currency: "AED", symbol: "AED " },
    { credits: 100, price: 90,  currency: "AED", symbol: "AED " },
    { credits: 200, price: 165, currency: "AED", symbol: "AED " },
    { credits: 500, price: 370, currency: "AED", symbol: "AED " },
  ],
  GB: [
    { credits: 50,  price: 11, currency: "GBP", symbol: "£" },
    { credits: 100, price: 20, currency: "GBP", symbol: "£" },
    { credits: 200, price: 37, currency: "GBP", symbol: "£" },
    { credits: 500, price: 85, currency: "GBP", symbol: "£" },
  ],
  TR: [
    { credits: 50,  price: 264,  currency: "TRY", symbol: "₺" },
    { credits: 100, price: 495,  currency: "TRY", symbol: "₺" },
    { credits: 200, price: 924,  currency: "TRY", symbol: "₺" },
    { credits: 500, price: 2145, currency: "TRY", symbol: "₺" },
  ],
};

const DEFAULT: CreditPackage[] = [
  { credits: 50,  price: 14,  currency: "USD", symbol: "$" },
  { credits: 100, price: 26,  currency: "USD", symbol: "$" },
  { credits: 200, price: 48,  currency: "USD", symbol: "$" },
  { credits: 500, price: 110, currency: "USD", symbol: "$" },
];

export function getCreditPackages(countryCode?: string): CreditPackage[] {
  if (!countryCode) return PRICING.AE; // Default: UAE
  return PRICING[countryCode.toUpperCase()] ?? DEFAULT;
}

// Server-side: look up canonical price for a given credits+currency pair.
// Returns null if the combination is not in our pricing table (reject the request).
export function getCanonicalPackage(credits: number, currency: string): CreditPackage | null {
  const allPackages = [
    ...Object.values(PRICING).flat(),
    ...DEFAULT,
  ];
  return allPackages.find(
    p => p.credits === credits && p.currency.toUpperCase() === currency.toUpperCase()
  ) ?? null;
}

export type MembershipTier = "free" | "silver" | "gold" | "platinum";

export type MembershipPlan = {
  id: MembershipTier;
  name: string;
  amount: number;      // Stripe unit_amount (AED fils = ×100)
  displayPrice: string;
  features: string[];
  popular?: boolean;
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "silver",
    name: "Silver",
    amount: 3900,
    displayPrice: "AED 39",
    features: ["5 experiences / day", "60 credits / month bonus", "4% platform fee", "Schedule up to tomorrow"],
  },
  {
    id: "gold",
    name: "Gold",
    amount: 6900,
    displayPrice: "AED 69",
    features: ["10 experiences / day", "120 credits / month bonus", "3% platform fee", "Schedule up to 7 days", "Weekly repeat scheduling", "Gender & age filters"],
    popular: true,
  },
  {
    id: "platinum",
    name: "Platinum",
    amount: 9900,
    displayPrice: "AED 99",
    features: ["Unlimited experiences", "200 credits / month bonus", "1% platform fee", "Schedule up to 30 days", "All repeat options", "All preference filters", "Priority matching"],
  },
];

export const TIER_ORDER: MembershipTier[] = ["free", "silver", "gold", "platinum"];

export type VenueMembershipTier = "starter" | "essential" | "partner" | "enterprise";

export type VenueMembershipPlan = {
  id: VenueMembershipTier;
  name: string;
  amount: number;
  displayPrice: string;
  features: string[];
  popular?: boolean;
};

export const VENUE_MEMBERSHIP_PLANS: VenueMembershipPlan[] = [
  {
    id: "essential",
    name: "Essential",
    amount: 9900,
    displayPrice: "AED 99",
    features: ["5 active offers", "5 venues", "Basic analytics", "Push notification on experience start"],
  },
  {
    id: "partner",
    name: "Partner",
    amount: 24900,
    displayPrice: "AED 249",
    features: ["10 active offers", "10 venues", "Priority listing in feed", "Detailed analytics", "Weekly automated reports", "Venue branding on experience cards"],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    amount: 59900,
    displayPrice: "AED 599",
    features: ["Unlimited offers", "Unlimited venues", "Featured tab placement", "Full analytics & cohort data", "Dedicated support", "Custom branding"],
  },
];

export const VENUE_TIER_ORDER: VenueMembershipTier[] = ["starter", "essential", "partner", "enterprise"];

export function getCanonicalVenueMembershipPlan(planId: string): VenueMembershipPlan | null {
  return VENUE_MEMBERSHIP_PLANS.find(p => p.id === planId) ?? null;
}

export function getCanonicalMembershipPlan(planId: string): MembershipPlan | null {
  return MEMBERSHIP_PLANS.find(p => p.id === planId) ?? null;
}

export function formatPrice(pkg: CreditPackage): string {
  if (pkg.symbolAfter) return `${pkg.price} ${pkg.symbol.trim()}`;
  return `${pkg.symbol}${pkg.price}`;
}

// Zero-decimal currencies (Stripe unit_amount = price, not price * 100)
const ZERO_DECIMAL = new Set(["JPY", "KRW", "VND", "CLP", "HUF", "IDR"]);

export function stripeAmount(pkg: CreditPackage): number {
  return ZERO_DECIMAL.has(pkg.currency) ? pkg.price : pkg.price * 100;
}
