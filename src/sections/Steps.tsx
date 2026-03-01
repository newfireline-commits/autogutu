import { useTranslation } from 'react-i18next';
import { Search, ClipboardCheck, Gavel, Truck, TrendingUp } from 'lucide-react';

export default function Steps() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Search,
      number: '01',
      title: t('steps.step1'),
      description: t('steps.step1Desc')
    },
    {
      icon: ClipboardCheck,
      number: '02',
      title: t('steps.step2'),
      description: t('steps.step2Desc')
    },
    {
      icon: Gavel,
      number: '03',
      title: t('steps.step3'),
      description: t('steps.step3Desc')
    },
    {
      icon: Truck,
      number: '04',
      title: t('steps.step4'),
      description: t('steps.step4Desc')
    },
    {
      icon: TrendingUp,
      number: '05',
      title: t('steps.step5'),
      description: t('steps.step5Desc')
    }
  ];

  return (
    <section id="steps" className="py-20 bg-slate-50 bg-texture">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              {t('steps.title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('steps.subtitle')}
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <step.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-3xl font-black text-slate-100 group-hover:text-blue-100 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
