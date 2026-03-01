import { useTranslation } from 'react-i18next';
import { Star, Users, Car, DollarSign } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { value: '5', label: t('instructor.experience'), icon: Star },
    { value: '50+', label: t('instructor.graduates'), icon: Users },
    { value: '482+', label: t('instructor.cars'), icon: Car },
    { value: '$672K+', label: t('instructor.saved'), icon: DollarSign }
  ];

  return (
    <section id="about" className="py-20 bg-white bg-texture">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
              {t('instructor.title')}
            </h2>
          </div>

          <div className="gradient-border p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/photo.jpg" 
                    alt="Андрій Ковальчук"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-blue-600 font-semibold mb-2">
                  {t('instructor.role')}
                </p>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                  {t('instructor.name')}
                </h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {t('instructor.description')}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <stat.icon className="w-6 h-6 text-blue-600 mx-auto lg:mx-0 mb-2" />
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
