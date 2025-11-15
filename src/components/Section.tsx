export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-10">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
