export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
      {label}
    </span>
  );
}

