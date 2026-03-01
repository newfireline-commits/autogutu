import { useTranslation } from 'react-i18next';
import { Play, Clock } from 'lucide-react';

export default function Program() {
  const { t } = useTranslation();

  const modules = [
    { num: '01', title: t('program.module1'), time: '15 хв', free: true },
    { num: '02', title: t('program.module2'), time: '45 хв', free: false },
    { num: '03', title: t('program.module3'), time: '35 хв', free: false },
    { num: '04', title: t('program.module4'), time: '50 хв', free: false },
    { num: '05', title: t('program.module5'), time: '25 хв', free: false },
    { num: '06', title: t('program.module6'), time: '40 хв', free: false },
    { num: '07', title: t('program.module7'), time: '30 хв', free: false },
    { num: '08', title: t('program.module8'), time: '45 хв', free: false },
    { num: '09', title: t('program.module9'), time: '40 хв', free: false },
    { num: '10', title: t('program.module10'), time: '35 хв', free: false },
    { num: '11', title: t('program.module11'), time: '50 хв', free: false },
    { num: '12', title: t('program.module12'), time: '30 хв', free: false },
    { num: '13', title: t('program.module13'), time: '35 хв', free: false },
    { num: '14', title: t('program.module14'), time: '20 хв', free: false },
  ];

  return (
    <section id="program" className="py-20 bg-slate-50 bg-texture">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              {t('program.title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('program.subtitle')}
            </p>
          </div>

          {/* Modules List */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 lg:p-5 ${
                  index !== modules.length - 1 ? 'border-b border-slate-100' : ''
                } hover:bg-slate-50 transition-colors`}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">{module.num}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{module.title}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-slate-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{module.time}</span>
                  </div>
                  {module.free && (
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                      {t('program.free')}
                    </span>
                  )}
                  {!module.free && (
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Play className="w-4 h-4 text-slate-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
