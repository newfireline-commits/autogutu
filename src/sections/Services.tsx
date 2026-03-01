import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Gavel, Ship, FileCheck, Truck, ClipboardCheck, Check, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Services() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const features = [
    { icon: Search, text: t('services.features.0') },
    { icon: Gavel, text: t('services.features.1') },
    { icon: Ship, text: t('services.features.2') },
    { icon: FileCheck, text: t('services.features.3') },
    { icon: Truck, text: t('services.features.4') },
    { icon: ClipboardCheck, text: t('services.features.5') }
  ];

  return (
    <section id="services" className="py-20 bg-[#0d0d0d]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                {t('services.title')}
              </h2>
              <p className="text-xl text-[#c9ff3b] font-bold mb-4">
                {t('services.subtitle')}
              </p>
              <p className="text-white/60 text-lg mb-8">
                {t('services.description')}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]"
                  >
                    <div className="w-10 h-10 bg-[#c9ff3b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#c9ff3b]" />
                    </div>
                    <span className="text-white/80 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-[#2a2a2a]">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{t('services.formTitle')}</h3>
                    <p className="text-white/60">Залиште заявку і ми зв'яжемося з вами</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-white/80">{t('training.name')}</Label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-[#0d0d0d] border-[#2a2a2a] text-white placeholder:text-white/30 focus:border-[#c9ff3b] focus:ring-[#c9ff3b]"
                        placeholder="Введіть ваше ім'я"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white/80">{t('training.phone')}</Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-[#0d0d0d] border-[#2a2a2a] text-white placeholder:text-white/30 focus:border-[#c9ff3b] focus:ring-[#c9ff3b]"
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white/80">{t('training.telegram')}</Label>
                      <Input
                        type="text"
                        value={formData.telegram}
                        onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                        className="bg-[#0d0d0d] border-[#2a2a2a] text-white placeholder:text-white/30 focus:border-[#c9ff3b] focus:ring-[#c9ff3b]"
                        placeholder="@username"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#c9ff3b] text-black hover:bg-[#b8eb35] font-bold text-lg py-6"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t('services.submit')}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#c9ff3b] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('training.success')}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
