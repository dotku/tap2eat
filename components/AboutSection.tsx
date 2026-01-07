import { useTranslations } from 'next-intl';
import { Card } from './ui/Card';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-tap2eat-orange mb-6 text-center">
        {t('title')}
      </h2>
      <Card>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('description')}
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            {t('mission')}
          </p>
        </div>
      </Card>
    </section>
  );
}
