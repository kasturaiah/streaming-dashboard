'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { Movie } from '../types/movie';


export default function MovieRow({ movies, categoryTitle }: { movies: Movie[]; categoryTitle: string }) {
return (
<section>
<h3 className="text-lg font-semibold mb-3">{categoryTitle}</h3>


<div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
{movies?.length ? (
movies.map((m) => (
<Link key={m.imdbID} href={`/movie/${m.imdbID}`} className="min-w-[140px] group">
<div className="min-w-[140px]">
<Image
src={m.Poster !== 'N/A' ? m.Poster : '/poster-fallback.png'}
alt={m.Title}
width={200}
height={300}
unoptimized
className="rounded-md transform group-hover:scale-105 transition"
/>
<p className="mt-2 text-sm text-neutral-300">{m.Title}</p>
<p className="text-xs text-neutral-500">{m.Year}</p>
</div>
</Link>
))
) : (
<p className="text-neutral-400">No results</p>
)}
</div>
</section>
);
}