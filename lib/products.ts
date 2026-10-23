export type Product = {
  id: string;
  name: string;
  price: string;
  oldPrice: string;
  image: string;
  badge?: string;
  discount: string;
  category: string;
  rawPrice?: number;
};

export const products: Product[] = [
  {
    id: '30846',
    name: 'GARDENIA ORCHIDEA ACQUERELLI LILLA 41X41 (STOCK DPF)',
    price: '10.98 €/m²',
    oldPrice: '12.20 €/m²',
    discount: 'Save 10%',
    badge: 'Online only',
    image: 'https://www.fissore.com/98973-home_default/gardenia-orchidea-acquerelli-lilla-41x41-stock-dpf.jpg',
    category: 'Other effects',
    rawPrice: 10.98,
  },
  {
    id: '30186',
    name: 'ARIOSTEA PASTEL LEVIGATO 30X30 (STOCK)',
    price: '13.51 €/m²',
    oldPrice: '15.01 €/m²',
    discount: 'Save 10%',
    badge: 'Online only',
    image: 'https://www.fissore.com/112322-home_default/ariostea-pastel-levigato-30x30-stock.jpg',
    category: 'Marble effect',
    rawPrice: 13.51,
  },
  {
    id: '30844',
    name: 'GARDENIA ORCHIDEA ACQUERELLI TABACCO 41X41 (STOCK DPF)',
    price: '10.80 €/m²',
    oldPrice: '12.00 €/m²',
    discount: 'Save 10%',
    badge: 'Online only',
    image: 'https://www.fissore.com/98965-home_default/gardenia-orchidea-acquerelli-tabacco-41x41-stock-dpf.jpg',
    category: 'Other effects',
    rawPrice: 10.80,
  },
  {
    id: '35077',
    name: 'VERTICAL VERDE 33X33',
    price: '11.26 €/m²',
    oldPrice: '12.50 €/m²',
    discount: 'Save 10%',
    badge: 'Online only',
    image: 'https://www.fissore.com/112012-home_default/vertical-verde-33x33.jpg',
    category: 'White',
    rawPrice: 11.26,
  },
  {
    id: '30975',
    name: 'IMOLA CREACON 36W 30X60 RECTIFIED',
    price: '16.20 €/m²',
    oldPrice: '18.00 €/m²',
    discount: 'Save 10%',
    badge: 'Online only',
    image: 'https://www.fissore.com/99529-home_default/imola-creacon-36w-30x60-rectified.jpg',
    category: 'Stone effect',
    rawPrice: 16.20,
  },
  {
    id: '30976',
    name: 'IMOLA NEWTON 36B 30X60 Rectified',
    price: '15.29 €/m²',
    oldPrice: '16.99 €/m²',
    discount: 'Save 10%',
    badge: 'Online only',
    image: 'https://www.fissore.com/99531-home_default/imola-newton-36b-30x60-rectified.jpg',
    category: 'Wood effect',
    rawPrice: 15.29,
  },
  {
    id: '30991',
    name: 'IMOLA KOSHI 60T 60X60 (STOCK)',
    price: '14.40 €/m²',
    oldPrice: '16.00 €/m²',
    discount: 'Save 10%',
    badge: 'Online only',
    image: 'https://www.fissore.com/99585-home_default/imola-koshi-60t-60x60-stock.jpg',
    category: 'Stone effect',
    rawPrice: 14.40,
  },
  {
    id: '40432',
    name: 'Koshi 60DG 60x60 Rectified',
    price: '14.40 €/m²',
    oldPrice: '16.00 €/m²',
    discount: 'Save 10%',
    badge: 'Online only',
    image: 'https://www.fissore.com/134611-home_default/koshi-60dg-60x60-rectified.jpg',
    category: 'Decorated',
    rawPrice: 14.40,
  },
];

export const categories = [
  { name: 'Floors', href: '/products?category=Floors', image: 'https://www.fissore.com/img/cms/categoria-pavimenti-fissore-ceramiche-2.jpg' },
  { name: 'Coverings', href: '/products?category=Coverings', image: 'https://www.fissore.com/img/cms/categoria-rivestimenti-fissore-ceramiche-2.jpg' },
  { name: 'Wellness and Spa', href: '/products?category=Wellness and Spa', image: 'https://www.fissore.com/img/cms/categoria-wellness-e-spa-fissore-ceramiche-2.jpg' },
  { name: 'Shower Boxes', href: '/products?category=Shower Boxes', image: 'https://www.fissore.com/img/cms/categoria-box-doccia-fissore-ceramiche.jpg' },
  { name: 'Sanitary Ware', href: '/products?category=Sanitary Ware', image: 'https://www.fissore.com/img/cms/categoria-sanitari-fissore-ceramiche.jpg' },
  { name: 'Faucets', href: '/products?category=Faucets', image: 'https://www.fissore.com/img/cms/categoria-rubinetteria-fissore-ceramiche.jpg' },
  { name: 'Bathroom Furniture', href: '/products?category=Bathroom Furniture', image: 'https://www.fissore.com/img/cms/categoria-arredo-bagno-fissore-ceramiche.jpg' },
  { name: 'Heating', href: '/products?category=Heating', image: 'https://www.fissore.com/img/cms/categoria-riscaldamento-fissore-ceramiche.jpg' },
  { name: 'Furniture INTERNI', href: '/products?category=Furniture INTERNI', image: 'https://www.fissore.com/img/cms/categoria-arredo-interni-fissore-ceramiche.jpg' },
  { name: 'Frames', href: '/products?category=Frames', image: 'https://www.fissore.com/img/cms/categoria-serramenti-fissore-ceramiche.jpg' },
];

export const brands = [
  { name: 'Marazzi', image: 'https://www.fissore.com/img/cms/brand-marazzi-fissore-2.jpg' },
  { name: 'GSG', image: 'https://www.fissore.com/img/cms/gsg-ceramiche-fissore-2.jpg' },
  { name: 'Jacuzzi', image: 'https://www.fissore.com/img/cms/jacuzzi-brand-fissore-2.jpg' },
  { name: 'SCIC', image: 'https://www.fissore.com/img/cms/scic-brand-fissore-2.jpg' },
  { name: 'Castelvetro Ceramiche', image: 'https://www.fissore.com/img/cms/castelvetro-logo-fissore-2.jpg' },
  { name: 'Florim', image: 'https://www.fissore.com/img/cms/logo-florim-fissore-2.jpg' },
  { name: 'Novellini', image: 'https://www.fissore.com/img/cms/brand-novellini-fissore-2.jpg' },
  { name: 'Mariner', image: 'https://www.fissore.com/img/cms/mariner-brand-fissore-2.jpg' },
];

export const productCategories = [
  'All products',
  'Other effects',
  'Marble effect',
  'Stone effect',
  'Wood effect',
  'White',
  'Decorated',
];
