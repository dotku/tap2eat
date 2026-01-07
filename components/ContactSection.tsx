import { useTranslations } from 'next-intl';
import { Card } from './ui/Card';
import { BUSINESS_DATA } from '@/lib/constants';

export function ContactSection() {
  const t = useTranslations('contact');

  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t('phone'),
      value: BUSINESS_DATA.phone,
      href: `tel:${BUSINESS_DATA.phone}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      label: t('office'),
      value: BUSINESS_DATA.office,
      href: `tel:${BUSINESS_DATA.office}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t('email'),
      value: BUSINESS_DATA.email,
      href: `mailto:${BUSINESS_DATA.email}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      label: t('website'),
      value: BUSINESS_DATA.website.replace('https://', ''),
      href: BUSINESS_DATA.website,
      external: true,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('address'),
      value: t('addressValue'),
      href: BUSINESS_DATA.mapLink,
      external: true,
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-tap2eat-orange mb-6 text-center">
        {t('title')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactItems.map((item, index) => (
          <Card key={index} hover className="group">
            <a
              href={item.href}
              className="flex flex-col items-center text-center gap-3"
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <div className="p-3 bg-tap2eat-orange/10 rounded-full text-tap2eat-orange group-hover:bg-tap2eat-orange group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                <div className="font-medium text-foreground group-hover:text-tap2eat-orange transition-colors">
                  {item.value}
                </div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
