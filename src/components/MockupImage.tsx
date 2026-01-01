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
  const imageSrc = src || defaultImages[type] || defaultImages.desktop;
  const isSvg = imageSrc.endsWith('.svg');
  const containerClass = {
    mobile: 'w-48 mx-auto',
    desktop: 'w-full max-w-4xl mx-auto',
    dashboard: 'w-full max-w-5xl mx-auto',
    workflow: 'w-full max-w-3xl mx-auto',
    playlist: 'w-64 mx-auto',
  }[type];

  // If SVG file, display it directly
  if (isSvg && !imageError) {
    return (
      <div className={`${containerClass} ${className}`}>
        <div className="relative rounded-lg overflow-hidden border shadow-lg bg-muted h-full min-h-[200px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-contain p-4"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        </div>
      </div>
    );
  }

  // If image failed or no src provided, show placeholder
  if (imageError || !src) {
    return (
      <div className={`${containerClass} ${className}`}>
        <div className="relative rounded-lg overflow-hidden border shadow-lg bg-muted h-full min-h-[200px] flex items-center justify-center">
          <div className="text-center space-y-2 p-4">
            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-xs text-muted-foreground">Project Image</p>
          </div>
        </div>
      </div>
    );
  }

  // For non-SVG images, use Next.js Image
  return (
    <div className={`${containerClass} ${className}`}>
      <div className="relative rounded-lg overflow-hidden border shadow-lg bg-muted h-full min-h-[200px]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          loading="lazy"
          onError={() => setImageError(true)}
          unoptimized
        />
      </div>
    </div>
  );
}
