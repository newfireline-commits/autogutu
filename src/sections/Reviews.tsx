import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = [
    {
      text: t('reviews.review1'),
      name: t('reviews.review1Name'),
      city: t('reviews.review1City'),
      result: t('reviews.review1Result'),
      initial: 'О'
    },
    {
      text: t('reviews.review2'),
      name: t('reviews.review2Name'),
      city: t('reviews.review2City'),
      result: t('reviews.review2Result'),
      initial: 'М'
    },
    {
      text: t('reviews.review3'),
      name: t('reviews.review3Name'),
      city: t('reviews.review3City'),
      result: t('reviews.review3Result'),
      initial: 'Д'
    },
    {
      text: t('reviews.review4'),
      name: t('reviews.review4Name'),
      city: t('reviews.review4City'),
      result: t('reviews.review4Result'),
      initial: 'А'
    },
    {
      text: t('reviews.review5'),
      name: t('reviews.review5Name'),
      city: t('reviews.review5City'),
      result: t('reviews.review5Result'),
      initial: 'І'
    },
    {
      text: t('reviews.review6'),
      name: t('reviews.review6Name'),
      city: t('reviews.review6City'),
      result: t('reviews.review6Result'),
      initial: 'Н'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white bg-texture">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              {t('reviews.title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('reviews.subtitle')}
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="gradient-border p-6 hover:shadow-lg transition-shadow"
              >
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{review.initial}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{review.name}</h4>
                    <p className="text-sm text-slate-500">{review.city}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-semibold text-amber-600">{review.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
