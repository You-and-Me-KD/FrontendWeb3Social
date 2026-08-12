const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const marketplaceItem = {
  eyebrow: 'HTML Templates',
  name: 'Pixel Diamond Gaming Magazine',
  image: 'https://odindesignthemes.com/vikinger-dark/img/marketplace/items/01.jpg',
  price: '26.00',
  sales: '1.360',
  rating: 4.2,
  ratingMax: 5,
  breadcrumbs: [
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Digital Items', href: '/marketplace-category' },
  ],
  licenses: [
    {
      id: 'regular',
      name: 'Regular License',
      description:
        'For use, by you or one client, in a single end product which end users are not charged for. View Details',
    },
    {
      id: 'extended',
      name: 'Extended License',
      description: 'For use, by you or one client, in a single end product which end users can be charged for.',
    },
  ],
  author: {
    name: 'Marina Valentine',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s',
    level: 24,
    itemsPublished: 5,
    badgeColors: ['#eab308', '#7750f8', '#22c55e', '#3b82f6'],
    moreBadges: 9,
  },
  details: [
    { label: 'Updated', value: 'October 13th, 2019' },
    { label: 'Created', value: 'August 17th, 2019' },
    { label: 'Category', value: 'HTML Templates' },
    { label: 'Files Included', value: 'HTML Files, CSS Files, JS Files, Layered PSD' },
    { label: 'Layout', value: 'Responsive' },
  ],
  tags: ['Gaming', 'Magazine', 'Web', 'eSports', 'Template'],
  description: {
    intro: {
      heading: 'The Best eSports and Gaming Magazine Template!',
      paragraphs: [LOREM, LOREM],
    },
    features: {
      heading: '356+ HTML Elements Library included',
      paragraphs: [LOREM],
    },
    included: ['64 HTML Files', '48 CSS Files', 'Layered PSD Files', 'Full Documentation', 'Free Lifetime Updates'],
  },
  comments: [
    {
      author: 'James Spiegel',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s',
      time: '2 days ago',
      content: 'Great template, super easy to customize!',
    },
    {
      author: 'Alex Turner',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s',
      time: '5 days ago',
      content: 'Exactly what I needed for my esports blog.',
    },
  ],
  reviews: [
    {
      author: 'Nina Cole',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s',
      rating: 5,
      content: 'Clean code and great support from the author.',
    },
    {
      author: 'Marco Diaz',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s',
      rating: 4,
      content: 'Solid template, saved me a lot of time.',
    },
  ],
}

export type MarketplaceItem = typeof marketplaceItem
