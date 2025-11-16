import Image from 'next/image';

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
  const imageSrc = src || defaultImages[type] || defaultImages.desktop;
  const containerClass = {
    mobile: 'w-48 mx-auto',
    desktop: 'w-full max-w-4xl mx-auto',
    dashboard: 'w-full max-w-5xl mx-auto',
    workflow: 'w-full max-w-3xl mx-auto',
    playlist: 'w-64 mx-auto',
  }[type];

  return (
    <div className={`${containerClass} ${className}`}>
      <div className="relative rounded-lg overflow-hidden border shadow-lg bg-muted">
        {imageSrc.endsWith('.svg') ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageSrc} alt={alt} className="w-full h-auto object-contain" loading="lazy" />
        ) : (
          <Image
            src={imageSrc}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
