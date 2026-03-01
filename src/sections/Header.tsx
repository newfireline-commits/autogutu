import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const openTelegram = () => {
    window.open('https://t.me/kovalchuk133', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight">
              AUTO
            </span>
            <span className="mx-1 text-xl lg:text-2xl font-black text-blue-600 tracking-tight">
              USA
            </span>
            <span className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight">
              GURU
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {t('header.about')}
            </button>
            <button
              onClick={() => scrollToSection('program')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {t('header.program')}
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {t('header.reviews')}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {t('header.faq')}
            </button>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => changeLanguage('ua')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  i18n.language === 'ua'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                UA
              </button>
              <button
                onClick={() => changeLanguage('ru')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  i18n.language === 'ru'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                RU
              </button>
            </div>
            <Button
              onClick={openTelegram}
              className="bg-[#0088cc] text-white hover:bg-[#0077b3] font-semibold text-sm"
            >
              <Send className="w-4 h-4 mr-2" />
              {t('header.telegram')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-slate-100">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-3 text-left text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {t('header.about')}
              </button>
              <button
                onClick={() => scrollToSection('program')}
                className="px-4 py-3 text-left text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {t('header.program')}
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="px-4 py-3 text-left text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {t('header.reviews')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="px-4 py-3 text-left text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {t('header.faq')}
              </button>
            </nav>
            <div className="px-4 py-4 border-t border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => changeLanguage('ua')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    i18n.language === 'ua'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Українська
                </button>
                <button
                  onClick={() => changeLanguage('ru')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    i18n.language === 'ru'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Русский
                </button>
              </div>
              <Button
                onClick={openTelegram}
                className="w-full bg-[#0088cc] text-white hover:bg-[#0077b3] font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                {t('header.telegram')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
