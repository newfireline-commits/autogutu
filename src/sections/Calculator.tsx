import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Calculator as CalculatorIcon, ChevronDown, ChevronUp, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AUCTIONS,
  AUCTION_SITES,
  VEHICLE_TYPES,
  ENGINE_TYPES,
  calculateAuctionFee,
  calculateCommission,
  calculateExcise,
  calculateDuty,
  calculateVAT,
  DELIVERY_OCEAN,
  INSURANCE_RATE,
  INFO_SUPPORT,
  EXPEDITER,
  PARKING
} from '@/types/calculator';

interface CalculationResult {
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

export default function Calculator() {
  const { t } = useTranslation();
  const [showInvoices, setShowInvoices] = useState(false);
  
  // Form state
  const [lotPrice, setLotPrice] = useState<string>('');
  const [auction, setAuction] = useState<string>('');
  const [auctionSite, setAuctionSite] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('passenger');
  const [engineType, setEngineType] = useState<string>('petrol');
  const [engineVolume, setEngineVolume] = useState<string>('2000');
  const [year, setYear] = useState<string>('2020');

  // Calculation result
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Get available sites for selected auction
  const availableSites = useMemo(() => {
    if (!auction) return [];
    return AUCTION_SITES[auction] || [];
  }, [auction]);

  // Calculate results
  useEffect(() => {
    const price = parseFloat(lotPrice) || 0;
    const volume = parseInt(engineVolume) || 0;
    const vehicleYear = parseInt(year) || 2020;
    
    const selectedSite = availableSites.find(s => s.value === auctionSite);
    const deliveryUSA = selectedSite?.deliveryUSA || 500;

    const auctionFee = calculateAuctionFee(price, auction || 'copart');
    const commission = calculateCommission(price);
    const insurance = price * INSURANCE_RATE;
    const excise = calculateExcise(engineType, volume, vehicleYear);
    const duty = calculateDuty(price, deliveryUSA, vehicleType);
    const vat = calculateVAT(price, deliveryUSA, duty, excise);

    const total = price + 
      auctionFee + 
      commission + 
      deliveryUSA + 
      DELIVERY_OCEAN + 
      insurance + 
      INFO_SUPPORT + 
      EXPEDITER + 
      duty + 
      excise + 
      vat + 
      PARKING;

    setResult({
      lotPrice: price,
      auctionFee,
      commission,
      deliveryUSA,
      deliveryOcean: DELIVERY_OCEAN,
      insurance,
      infoSupport: INFO_SUPPORT,
      expediter: EXPEDITER,
      customs: duty + excise + vat,
      excise,
      duty,
      vat,
      parking: PARKING,
      total
    });
  }, [lotPrice, auction, auctionSite, vehicleType, engineType, engineVolume, year, availableSites]);

  // Invoice calculations
  const invoices = useMemo(() => {
    if (!result) return null;
    return {
      invoice1: result.lotPrice + result.auctionFee,
      invoice2: result.deliveryUSA + result.deliveryOcean + result.commission + result.insurance,
      invoice3: result.expediter,
      invoice4: result.excise + result.duty + result.vat,
      invoice5: result.infoSupport + result.parking
    };
  }, [result]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('uk-UA', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="calculator" className="py-20 bg-[#0d0d0d]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] rounded-full px-4 py-2 mb-4">
            <CalculatorIcon className="w-5 h-5 text-[#c9ff3b]" />
            <span className="text-sm font-medium text-white/80">{t('calculator.title')}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Калькулятор
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Form */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-8 border border-[#2a2a2a]">
            <h3 className="text-xl font-bold text-white mb-6">{t('calculator.title')}</h3>
            
            <div className="space-y-6">
              {/* Lot Price */}
              <div className="space-y-2">
                <Label className="text-white/80">{t('calculator.lotPrice')}</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    type="number"
                    value={lotPrice}
                    onChange={(e) => setLotPrice(e.target.value)}
                    placeholder="0"
                    className="pl-10 bg-[#0d0d0d] border-[#2a2a2a] text-white placeholder:text-white/30 focus:border-[#c9ff3b] focus:ring-[#c9ff3b]"
                  />
                </div>
              </div>

              {/* Auction */}
              <div className="space-y-2">
                <Label className="text-white/80">{t('calculator.auction')}</Label>
                <Select value={auction} onValueChange={(value) => {
                  setAuction(value);
                  setAuctionSite('');
                }}>
                  <SelectTrigger className="bg-[#0d0d0d] border-[#2a2a2a] text-white">
                    <SelectValue placeholder="Виберіть аукціон" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                    {AUCTIONS.map((a) => (
                      <SelectItem key={a.value} value={a.value} className="text-white hover:bg-[#2a2a2a]">
                        {a.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Auction Site */}
              <div className="space-y-2">
                <Label className="text-white/80">{t('calculator.auctionSite')}</Label>
                <Select value={auctionSite} onValueChange={setAuctionSite} disabled={!auction}>
                  <SelectTrigger className="bg-[#0d0d0d] border-[#2a2a2a] text-white">
                    <SelectValue placeholder="Виберіть майданчик" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                    {availableSites.map((site) => (
                      <SelectItem key={site.value} value={site.value} className="text-white hover:bg-[#2a2a2a]">
                        {site.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Vehicle Type */}
              <div className="space-y-2">
                <Label className="text-white/80">{t('calculator.vehicleType')}</Label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger className="bg-[#0d0d0d] border-[#2a2a2a] text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                    {VEHICLE_TYPES.map((v) => (
                      <SelectItem key={v.value} value={v.value} className="text-white hover:bg-[#2a2a2a]">
                        {v.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Engine Type */}
              <div className="space-y-2">
                <Label className="text-white/80">{t('calculator.engineType')}</Label>
                <Select value={engineType} onValueChange={setEngineType}>
                  <SelectTrigger className="bg-[#0d0d0d] border-[#2a2a2a] text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                    {ENGINE_TYPES.map((e) => (
                      <SelectItem key={e.value} value={e.value} className="text-white hover:bg-[#2a2a2a]">
                        {e.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Engine Volume */}
              <div className="space-y-2">
                <Label className="text-white/80">{t('calculator.engineVolume')}</Label>
                <Input
                  type="number"
                  value={engineVolume}
                  onChange={(e) => setEngineVolume(e.target.value)}
                  className="bg-[#0d0d0d] border-[#2a2a2a] text-white focus:border-[#c9ff3b] focus:ring-[#c9ff3b]"
                />
              </div>

              {/* Year */}
              <div className="space-y-2">
                <Label className="text-white/80">{t('calculator.year')}</Label>
                <Input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  min="1990"
                  max={new Date().getFullYear()}
                  className="bg-[#0d0d0d] border-[#2a2a2a] text-white focus:border-[#c9ff3b] focus:ring-[#c9ff3b]"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Main Result */}
            <div className="bg-gradient-to-br from-[#c9ff3b]/20 to-[#c9ff3b]/5 rounded-2xl p-6 lg:p-8 border border-[#c9ff3b]/30">
              <h3 className="text-lg font-medium text-white/80 mb-2">{t('calculator.total')}</h3>
              <div className="text-4xl lg:text-5xl font-black text-[#c9ff3b]">
                {result ? formatCurrency(result.total) : '$0'}
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-8 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-6">{t('calculator.calculation')}</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.lotPriceLabel')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.lotPrice) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.auctionFee')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.auctionFee) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.commission')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.commission) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.deliveryUSA')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.deliveryUSA) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.deliveryOcean')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.deliveryOcean) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.insurance')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.insurance) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.infoSupport')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.infoSupport) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.expediter')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.expediter) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.excise')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.excise) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.duty')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.duty) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a2a2a]">
                  <span className="text-white/60">{t('calculator.vat')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.vat) : '$0'}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">{t('calculator.parking')}</span>
                  <span className="text-white font-medium">{result ? formatCurrency(result.parking) : '$0'}</span>
                </div>
              </div>
            </div>

            {/* Payment Steps */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-8 border border-[#2a2a2a]">
              <button
                onClick={() => setShowInvoices(!showInvoices)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-xl font-bold text-white">{t('calculator.paymentSteps')}</h3>
                {showInvoices ? (
                  <ChevronUp className="w-5 h-5 text-white/60" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/60" />
                )}
              </button>

              {showInvoices && invoices && (
                <div className="mt-6 space-y-4">
                  <div className="bg-[#0d0d0d] rounded-xl p-4 border border-[#2a2a2a]">
                    <h4 className="text-sm font-medium text-[#c9ff3b] mb-2">{t('calculator.invoice1')}</h4>
                    <p className="text-white font-bold">{formatCurrency(invoices.invoice1)}</p>
                    <p className="text-xs text-white/40 mt-1">{t('calculator.lotPriceLabel')} + {t('calculator.auctionFee')}</p>
                  </div>
                  <div className="bg-[#0d0d0d] rounded-xl p-4 border border-[#2a2a2a]">
                    <h4 className="text-sm font-medium text-[#c9ff3b] mb-2">{t('calculator.invoice2')}</h4>
                    <p className="text-white font-bold">{formatCurrency(invoices.invoice2)}</p>
                    <p className="text-xs text-white/40 mt-1">{t('calculator.deliveryUSA')} + {t('calculator.deliveryOcean')} + {t('calculator.commission')} + {t('calculator.insurance')}</p>
                  </div>
                  <div className="bg-[#0d0d0d] rounded-xl p-4 border border-[#2a2a2a]">
                    <h4 className="text-sm font-medium text-[#c9ff3b] mb-2">{t('calculator.invoice3')}</h4>
                    <p className="text-white font-bold">{formatCurrency(invoices.invoice3)}</p>
                    <p className="text-xs text-white/40 mt-1">{t('calculator.expediter')}</p>
                  </div>
                  <div className="bg-[#0d0d0d] rounded-xl p-4 border border-[#2a2a2a]">
                    <h4 className="text-sm font-medium text-[#c9ff3b] mb-2">{t('calculator.invoice4')}</h4>
                    <p className="text-white font-bold">{formatCurrency(invoices.invoice4)}</p>
                    <p className="text-xs text-white/40 mt-1">{t('calculator.excise')} + {t('calculator.duty')} + {t('calculator.vat')}</p>
                  </div>
                  <div className="bg-[#0d0d0d] rounded-xl p-4 border border-[#2a2a2a]">
                    <h4 className="text-sm font-medium text-[#c9ff3b] mb-2">{t('calculator.invoice5')}</h4>
                    <p className="text-white font-bold">{formatCurrency(invoices.invoice5)}</p>
                    <p className="text-xs text-white/40 mt-1">{t('calculator.infoSupport')} + {t('calculator.parking')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
