import { useTranslation } from 'react-i18next';
import { Send, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { t } = useTranslation();

  const openTelegram = () => {
    window.open('https://t.me/kovalchuk133', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-texture pt-20">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span className="text-sm font-medium text-slate-700">{t('hero.title')}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
            {t('hero.subtitle')}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            {t('hero.description')}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 edge-highlight">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">50+ {t('hero.students')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 edge-highlight">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-slate-700 font-medium">4.9/5 {t('hero.rating')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 edge-highlight">
              <span className="text-green-600 font-bold">$</span>
              <span className="text-slate-700 font-medium">{t('hero.saved')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={openTelegram}
              size="lg"
              className="bg-[#0088cc] text-white hover:bg-[#0077b3] font-semibold text-base px-8 py-6 rounded-xl"
            >
              <Send className="w-5 h-5 mr-2" />
              {t('hero.ctaTelegram')}
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-white/80 font-semibold text-base px-8 py-6 rounded-xl"
            >
              {t('hero.ctaConsult')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
