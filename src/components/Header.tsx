'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-gradient-to-r from-black/70 via-transparent to-black/70 px-4 py-3 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/"><span className="text-xl font-bold">StreamLite</span></Link>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <a>Movies</a>
        </div>
      </div>
    </nav>
  );
}
