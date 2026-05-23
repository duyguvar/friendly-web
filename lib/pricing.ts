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

export function formatPrice(pkg: CreditPackage): string {
  if (pkg.symbolAfter) return `${pkg.price} ${pkg.symbol.trim()}`;
  return `${pkg.symbol}${pkg.price}`;
}

// Zero-decimal currencies (Stripe unit_amount = price, not price * 100)
const ZERO_DECIMAL = new Set(["JPY", "KRW", "VND", "CLP", "HUF", "IDR"]);

export function stripeAmount(pkg: CreditPackage): number {
  return ZERO_DECIMAL.has(pkg.currency) ? pkg.price : pkg.price * 100;
}
