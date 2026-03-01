import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ClipboardCheck, Gavel, Truck, TrendingUp, Users, Star, DollarSign, Check, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Training() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend
    setIsSubmitted(true);
  };

  const steps = [
    {
      icon: Search,
      number: '01',
      title: t('training.step1'),
      description: t('training.step1Desc')
    },
    {
      icon: ClipboardCheck,
      number: '02',
      title: t('training.step2'),
      description: t('training.step2Desc')
    },
    {
      icon: Gavel,
      number: '03',
      title: t('training.step3'),
      description: t('training.step3Desc')
    },
    {
      icon: Truck,
      number: '04',
      title: t('training.step4'),
      description: t('training.step4Desc')
    },
    {
      icon: TrendingUp,
      number: '05',
      title: t('training.step5'),
      description: t('training.step5Desc')
    }
  ];

  const stats = [
    { value: '5', label: t('training.experience'), icon: Star },
    { value: '50+', label: t('training.graduates'), icon: Users },
    { value: '482+', label: t('training.carsImported'), icon: Truck },
    { value: '$72M+', label: t('training.clientsSaved'), icon: DollarSign }
  ];

  return (
    <section id="training" className="py-20 bg-[#0d0d0d]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            {t('training.title')}
          </h2>
          <p className="text-xl lg:text-2xl text-[#c9ff3b] font-bold mb-4">
            {t('training.subtitle')}
          </p>
          <p className="text-white/60 text-lg">
            {t('training.description')}
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#c9ff3b]" />
              <span className="text-white">50+ {t('training.students')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#c9ff3b]" />
              <span className="text-white">4.9/5 {t('training.rating')}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#c9ff3b]" />
              <span className="text-white">$2M+ {t('training.saved')}</span>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {t('training.stepsTitle')}
            </h3>
            <p className="text-white/60">{t('training.stepsSubtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#c9ff3b]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <step.icon className="w-8 h-8 text-[#c9ff3b]" />
                  <span className="text-3xl font-black text-white/10 group-hover:text-[#c9ff3b]/20 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructor Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl p-8 lg:p-12 border border-[#2a2a2a]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#c9ff3b] mb-2">{t('training.instructor')}</h3>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-[#c9ff3b] to-[#a8e063] flex items-center justify-center flex-shrink-0">
                <span className="text-4xl lg:text-6xl font-black text-black">АК</span>
              </div>

              <div className="text-center lg:text-left">
                <h4 className="text-2xl lg:text-3xl font-black text-white mb-2">
                  {t('training.instructorName')}
                </h4>
                <p className="text-white/60 mb-6">{t('training.instructorDesc')}</p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-6 h-6 text-[#c9ff3b] mx-auto mb-2" />
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-[#2a2a2a]">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('training.formTitle')}</h3>
                  <p className="text-white/60">{t('training.formSubtitle')}</p>
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
                    {t('training.submit')}
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
    </section>
  );
}
