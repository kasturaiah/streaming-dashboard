import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '../types/movie';


export default function HeroBanner({ movie }: { movie: Movie | any }) {
const img = movie?.Poster && movie.Poster !== 'N/A' ? movie.Poster : '/fallback.jpg';


return (
<section className="relative h-64 md:h-[420px] rounded-lg overflow-hidden bg-neutral-800">
<Image src={img} alt={movie?.Title ?? 'Hero'} fill priority unoptimized style={{ objectFit: 'cover' }} />


<div className="absolute bottom-6 left-6 text-white max-w-xl">
<h2 className="text-2xl md:text-4xl font-bold">{movie?.Title}</h2>
<p className="mt-2 hidden md:block text-neutral-200 line-clamp-3">{movie?.Year} • {movie?.Type}</p>
<div className="mt-4">
<Link href={`/movie/${movie.imdbID}`} className="inline-block bg-white text-black px-4 py-2 rounded font-medium">Details</Link>
</div>
</div>
</section>
);
}