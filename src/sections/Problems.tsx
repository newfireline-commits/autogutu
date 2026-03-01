import { useTranslation } from 'react-i18next';
import { PackageX, TrendingUp, FileWarning, Clock } from 'lucide-react';

export default function Problems() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: PackageX,
      title: t('problems.problem1Title'),
      description: t('problems.problem1Desc'),
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: TrendingUp,
      title: t('problems.problem2Title'),
      description: t('problems.problem2Desc'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileWarning,
      title: t('problems.problem3Title'),
      description: t('problems.problem3Desc'),
      color: 'text-amber-500',
      bgColor: 'bg-amber-50'
    },
    {
      icon: Clock,
      title: t('problems.problem4Title'),
      description: t('problems.problem4Desc'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="problems" className="py-20 bg-white bg-texture">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              {t('problems.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('problems.subtitle')}
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="gradient-border p-6 lg:p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 ${problem.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <problem.icon className={`w-7 h-7 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-slate-600">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600">
              {t('problems.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
