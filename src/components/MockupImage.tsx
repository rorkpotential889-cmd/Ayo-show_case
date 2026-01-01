'use client';

import Image from 'next/image';
import { useState } from 'react';

type MockupImageProps = {
  src?: string;
  alt: string;
  type?: 'mobile' | 'desktop' | 'dashboard' | 'workflow' | 'playlist';
  className?: string;
};

const defaultImages: Record<string, string> = {
  mobile: '/mockups/mobile-app.svg',
  desktop: '/mockups/website-design.svg',
  dashboard: '/mockups/ai-dashboard.svg',
  workflow: '/mockups/workflow-diagram.svg',
  playlist: '/mockups/playlist-cover.svg',
  comfyui: '/mockups/comfyui-workflow.svg',
};

export function MockupImage({ src, alt, type = 'desktop', className = '' }: MockupImageProps) {
  const [imageError, setImageError] = useState(false);
  const defaultMockup = defaultImages[type] || defaultImages.desktop;
  const imageSrc = src || defaultMockup;
  const isSvg = imageSrc.endsWith('.svg');
  const containerClass = {
    mobile: 'w-48 mx-auto',
    desktop: 'w-full max-w-4xl mx-auto',
    dashboard: 'w-full max-w-5xl mx-auto',
    workflow: 'w-full max-w-3xl mx-auto',
    playlist: 'w-64 mx-auto',
  }[type];

  // If no src provided, or image error, or SVG - show default mockup
  if (!src || imageError || isSvg) {
    return (
      <div className={`${containerClass} ${className}`}>
        <div className="relative rounded-lg overflow-hidden border shadow-lg bg-muted h-full min-h-[200px] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={defaultMockup}
            alt={alt}
            className="w-full h-full object-contain p-4"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  // For non-SVG images, try to load with fallback
  return (
    <div className={`${containerClass} ${className}`}>
      <div className="relative rounded-lg overflow-hidden border shadow-lg bg-muted h-full min-h-[200px] w-full">
        {/* Actual image */}
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className={`object-cover ${imageError ? 'hidden' : ''}`}
          loading="lazy"
          onError={() => setImageError(true)}
          unoptimized
        />
        {/* Fallback mockup - shows if image fails */}
        {imageError && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={defaultMockup}
              alt={alt}
              className="w-full h-full object-contain p-4"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
}
