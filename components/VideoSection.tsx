'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { BUSINESS_DATA } from '@/lib/constants';

export function VideoSection() {
  const t = useTranslations('gallery');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-tap2eat-orange mb-6 text-center">
        {t('myVideo')}
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                 onClick={() => setIsPlaying(true)}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-tap2eat-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white">Play Video</p>
              </div>
            </div>
          ) : (
            <video
              className="absolute inset-0 w-full h-full object-contain"
              controls
              autoPlay
              src={BUSINESS_DATA.videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
