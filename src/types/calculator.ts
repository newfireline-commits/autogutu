export interface CalculatorState {
  lotPrice: number;
  auction: string;
  auctionSite: string;
  vehicleType: string;
  engineType: string;
  engineVolume: number;
  year: number;
}

export interface CalculationResult {
  lotPrice: number;
  auctionFee: number;
  commission: number;
  deliveryUSA: number;
  deliveryOcean: number;
  insurance: number;
  infoSupport: number;
  expediter: number;
  customs: number;
  excise: number;
  duty: number;
  vat: number;
  parking: number;
  total: number;
}

export interface InvoiceBreakdown {
  invoice1: number;
  invoice2: number;
  invoice3: number;
  invoice4: number;
  invoice5: number;
}

export const AUCTIONS = [
  { value: 'copart', label: 'Copart' },
  { value: 'iaai', label: 'IAAI' },
  { value: 'manheim', label: 'Manheim' },
  { value: 'adesa', label: 'ADESA' }
];

export const AUCTION_SITES: Record<string, { value: string; label: string; deliveryUSA: number }[]> = {
  copart: [
    { value: 'ca', label: 'Каліфорнія (CA)', deliveryUSA: 800 },
    { value: 'tx', label: 'Техас (TX)', deliveryUSA: 600 },
    { value: 'fl', label: 'Флорида (FL)', deliveryUSA: 400 },
    { value: 'ny', label: 'Нью-Йорк (NY)', deliveryUSA: 350 },
    { value: 'nj', label: 'Нью-Джерсі (NJ)', deliveryUSA: 350 },
    { value: 'ga', label: 'Джорджія (GA)', deliveryUSA: 450 },
    { value: 'il', label: 'Іллінойс (IL)', deliveryUSA: 550 },
    { value: 'wa', label: 'Вашингтон (WA)', deliveryUSA: 900 }
  ],
  iaai: [
    { value: 'ca', label: 'Каліфорнія (CA)', deliveryUSA: 800 },
    { value: 'tx', label: 'Техас (TX)', deliveryUSA: 600 },
    { value: 'fl', label: 'Флорида (FL)', deliveryUSA: 400 },
    { value: 'ny', label: 'Нью-Йорк (NY)', deliveryUSA: 350 },
    { value: 'nj', label: 'Нью-Джерсі (NJ)', deliveryUSA: 350 },
    { value: 'ga', label: 'Джорджія (GA)', deliveryUSA: 450 },
    { value: 'il', label: 'Іллінойс (IL)', deliveryUSA: 550 },
    { value: 'wa', label: 'Вашингтон (WA)', deliveryUSA: 900 }
  ],
  manheim: [
    { value: 'ca', label: 'Каліфорнія (CA)', deliveryUSA: 800 },
    { value: 'tx', label: 'Техас (TX)', deliveryUSA: 600 },
    { value: 'fl', label: 'Флорида (FL)', deliveryUSA: 400 },
    { value: 'ny', label: 'Нью-Йорк (NY)', deliveryUSA: 350 },
    { value: 'nj', label: 'Нью-Джерсі (NJ)', deliveryUSA: 350 },
    { value: 'ga', label: 'Джорджія (GA)', deliveryUSA: 450 },
    { value: 'il', label: 'Іллінойс (IL)', deliveryUSA: 550 },
    { value: 'wa', label: 'Вашингтон (WA)', deliveryUSA: 900 }
  ],
  adesa: [
    { value: 'ca', label: 'Каліфорнія (CA)', deliveryUSA: 800 },
    { value: 'tx', label: 'Техас (TX)', deliveryUSA: 600 },
    { value: 'fl', label: 'Флорида (FL)', deliveryUSA: 400 },
    { value: 'ny', label: 'Нью-Йорк (NY)', deliveryUSA: 350 },
    { value: 'nj', label: 'Нью-Джерсі (NJ)', deliveryUSA: 350 },
    { value: 'ga', label: 'Джорджія (GA)', deliveryUSA: 450 },
    { value: 'il', label: 'Іллінойс (IL)', deliveryUSA: 550 },
    { value: 'wa', label: 'Вашингтон (WA)', deliveryUSA: 900 }
  ]
};

export const VEHICLE_TYPES = [
  { value: 'passenger', label: 'Легковий автомобіль', dutyRate: 0.10 },
  { value: 'suv', label: 'Позашляховик', dutyRate: 0.10 },
  { value: 'motorcycle', label: 'Мотоцикл', dutyRate: 0.08 },
  { value: 'truck', label: 'Вантажівка', dutyRate: 0.10 }
];

export const ENGINE_TYPES = [
  { value: 'petrol', label: 'Бензин' },
  { value: 'diesel', label: 'Дизель' },
  { value: 'electric', label: 'Електро' },
  { value: 'hybrid', label: 'Гібрид' }
];

// Константи для розрахунку
export const DELIVERY_OCEAN = 1100; // Доставка океаном
export const INSURANCE_RATE = 0.015; // 1.5% від вартості авто
export const INFO_SUPPORT = 350; // Інформаційний супровід
export const EXPEDITER = 800; // Експедитор, автовоз, брокер
export const PARKING = 250; // Стоянки
export const EXCISE_RATES = {
  petrol: { base: 50, perCc: 0.05 }, // Базова ставка + за кожен см³
  diesel: { base: 75, perCc: 0.06 },
  electric: { base: 0, perCc: 0 },
  hybrid: { base: 25, perCc: 0.03 }
};
export const VAT_RATE = 0.20; // ПДВ 20%

// Функція розрахунку аукціонного збору
export function calculateAuctionFee(price: number, auction: string): number {
  if (auction === 'copart' || auction === 'iaai') {
    if (price <= 500) return 350;
    if (price <= 1000) return 450;
    if (price <= 1500) return 550;
    if (price <= 2000) return 600;
    if (price <= 3000) return 700;
    if (price <= 4000) return 750;
    if (price <= 5000) return 800;
    if (price <= 6000) return 850;
    if (price <= 8000) return 900;
    if (price <= 10000) return 1000;
    if (price <= 15000) return 1200;
    return price * 0.08;
  }
  // Manheim, ADESA
  return price * 0.05;
}

// Функція розрахунку комісії
export function calculateCommission(price: number): number {
  if (price <= 1000) return 400;
  if (price <= 2000) return 500;
  if (price <= 3000) return 600;
  if (price <= 5000) return 700;
  if (price <= 10000) return 800;
  return price * 0.08;
}

// Функція розрахунку акцизу
export function calculateExcise(engineType: string, engineVolume: number, year: number): number {
  const age = new Date().getFullYear() - year;
  const rate = EXCISE_RATES[engineType as keyof typeof EXCISE_RATES] || EXCISE_RATES.petrol;
  
  if (engineType === 'electric') return 0;
  
  const baseExcise = rate.base + (rate.perCc * engineVolume);
  const ageMultiplier = Math.max(1, age * 0.5);
  
  return baseExcise * ageMultiplier;
}

// Функція розрахунку ввізного мита
export function calculateDuty(price: number, delivery: number, vehicleType: string): number {
  const vehicle = VEHICLE_TYPES.find(v => v.value === vehicleType);
  const dutyRate = vehicle?.dutyRate || 0.10;
  return (price + delivery) * dutyRate;
}

// Функція розрахунку ПДВ
export function calculateVAT(price: number, delivery: number, duty: number, excise: number): number {
  return (price + delivery + duty + excise) * VAT_RATE;
}
