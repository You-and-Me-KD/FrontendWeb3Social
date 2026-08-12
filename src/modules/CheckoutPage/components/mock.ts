export const COUNTRY_OPTIONS = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'vn', label: 'Vietnam' },
  { value: 'ca', label: 'Canada' },
]

export const STATE_OPTIONS = [
  { value: 'ca', label: 'California' },
  { value: 'ny', label: 'New York' },
  { value: 'tx', label: 'Texas' },
]

export const CITY_OPTIONS = [
  { value: 'la', label: 'Los Angeles' },
  { value: 'sf', label: 'San Francisco' },
  { value: 'sd', label: 'San Diego' },
]

export const PAYMENT_METHODS = [
  {
    id: 'paypal',
    label: 'Paypal',
    description: "Pay with your Paypal balance or connected bank account! It's quick and really secure.",
  },
  {
    id: 'card',
    label: 'Credit or Debit Card',
    description: 'Pay securely with your credit or debit card.',
  },
] as const
