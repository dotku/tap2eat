import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ContactSection } from '@/components/ContactSection';
import { VideoSection } from '@/components/VideoSection';
import { GallerySection } from '@/components/GallerySection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { SocialLinks } from '@/components/SocialLinks';
import { GALLERY_IMAGES } from '@/lib/constants';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-card-bg">
      {/* Header with Language Switcher */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.jpg"
                alt="Tap2Eat Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-tap2eat-orange">
                {t('header.companyName')}
              </h1>
              <p className="text-sm text-gray-600">
                {t('header.tagline')}
              </p>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-[fadeIn_0.5s_ease-in-out]">
          <h2 className="text-5xl font-extrabold text-tap2eat-orange mb-4">
            {t('header.companyName')}
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
            {t('header.tagline')}
          </p>
        </div>

        {/* Contact Section */}
        <div className="animate-[slideUp_0.6s_ease-out]">
          <ContactSection />
        </div>

        {/* Video Section */}
        <div className="animate-[slideUp_0.6s_ease-out_0.1s]">
          <VideoSection />
        </div>

        {/* Gallery: Hot Items */}
        <div className="animate-[slideUp_0.6s_ease-out_0.2s]">
          <GallerySection
            title={t('gallery.hots')}
            images={GALLERY_IMAGES.hots}
          />
        </div>

        {/* Gallery: News */}
        <div className="animate-[slideUp_0.6s_ease-out_0.3s]">
          <GallerySection
            title={t('gallery.news')}
            images={GALLERY_IMAGES.news}
          />
        </div>

        {/* Gallery: More */}
        <div className="animate-[slideUp_0.6s_ease-out_0.4s]">
          <GallerySection
            title={t('gallery.more')}
            images={GALLERY_IMAGES.more}
          />
        </div>

        {/* About Section */}
        <div className="animate-[slideUp_0.6s_ease-out_0.5s]">
          <AboutSection />
        </div>

        {/* Services Section */}
        <div className="animate-[slideUp_0.6s_ease-out_0.6s]">
          <ServicesSection />
        </div>

        {/* Social Links */}
        <div className="animate-[slideUp_0.6s_ease-out_0.7s]">
          <SocialLinks />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {t('header.companyName')}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
