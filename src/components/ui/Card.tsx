import React from 'react';
import { cn } from '../../lib/cn';

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn('rounded-lg border bg-card text-card-foreground shadow-card p-6', className)}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={cn('text-lg font-semibold mb-2', className)}>{children}</h3>;
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>;
}
