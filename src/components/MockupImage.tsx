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
  const isSvg = imageSrc.endsWith('.svg') || !imageSrc;

  // If className includes !h-full or !w-full, use absolute positioning
  const isAbsolute = className.includes('!h-full') || className.includes('!w-full');

  // If no src provided, or image error, or SVG - show default mockup
  if (!src || imageError || isSvg) {
    if (isAbsolute) {
      return (
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full bg-muted">
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
    return (
      <div className={`w-full ${className}`}>
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
  if (isAbsolute) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full bg-muted">
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

  return (
    <div className={`w-full ${className}`}>
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
