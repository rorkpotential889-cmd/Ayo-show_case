import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity"
    >
      <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Ayodev
      </span>
    </Link>
  );
}
