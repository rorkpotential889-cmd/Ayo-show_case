import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border bg-card text-card-foreground shadow-card p-6">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold mb-2">{children}</h3>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

