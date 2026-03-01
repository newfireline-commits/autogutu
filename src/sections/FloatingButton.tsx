import { Send } from 'lucide-react';

export default function FloatingButton() {
  const openTelegram = () => {
    window.open('https://t.me/kovalchuk133', '_blank');
  };

  return (
    <button
      onClick={openTelegram}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0088cc] text-white rounded-full shadow-lg hover:bg-[#0077b3] hover:shadow-xl transition-all flex items-center justify-center animate-pulse-soft"
      aria-label="Написати в Telegram"
    >
      <Send className="w-6 h-6" />
    </button>
  );
}
