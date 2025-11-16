import { Card, CardDescription, CardTitle } from './ui/Card';
import { TechBadge } from './TechBadge';
import { MockupImage } from './MockupImage';

type ServiceCardProps = {
  title: string;
  description: string;
  tools: string[];
  mockupType?: 'mobile' | 'desktop' | 'dashboard' | 'workflow' | 'playlist';
  mockupAlt?: string;
  mockupSrc?: string;
  features?: string[];
};

export function ServiceCard({
  title,
  description,
  tools,
  mockupType = 'desktop',
  mockupAlt,
  mockupSrc,
  features,
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6 space-y-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        {mockupAlt && (
          <div className="py-4">
            <MockupImage src={mockupSrc} alt={mockupAlt} type={mockupType} />
          </div>
        )}

        {features && features.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Key Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-4">
          <h4 className="text-sm font-semibold mb-2">Tools & Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <TechBadge key={tool} label={tool} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
