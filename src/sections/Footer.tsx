import { useTranslation } from 'react-i18next';
import { Send, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Send,
      label: 'Telegram',
      url: 'https://t.me/kovalchuk133',
      color: 'bg-[#0088cc] hover:bg-[#0077b3]'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/kovalchuk_autazusa',
      color: 'bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90'
    }
  ];

  return (
    <footer className="bg-slate-900 py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center">
              <span className="text-2xl font-black text-white tracking-tight">AUTO</span>
              <span className="mx-1 text-2xl font-black text-blue-500 tracking-tight">USA</span>
              <span className="text-2xl font-black text-white tracking-tight">GURU</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center text-white transition-all`}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm mb-2">
              {t('footer.copyright')}
            </p>
            <p className="text-slate-500 text-xs">
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
