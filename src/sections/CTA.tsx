import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  const { t } = useTranslation();

  const openTelegram = () => {
    window.open('https://t.me/kovalchuk133', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            {t('cta.subtitle')}
          </p>

          <Button
            onClick={openTelegram}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-base px-10 py-6 rounded-xl shadow-lg"
          >
            <Send className="w-5 h-5 mr-2" />
            {t('cta.telegram')}
          </Button>
        </div>
      </div>
    </section>
  );
}
