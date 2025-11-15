import Image from 'next/image';
import { fetchMovieById } from '../../../lib/omdb';


export default async function MoviePage({ params }: { params: { id: string } }) {
const data = await fetchMovieById(params.id);


// OMDb returns a field named "Poster" which may be "N/A"
const poster = data?.Poster && data.Poster !== 'N/A' ? data.Poster : '/fallback.jpg';


return (
<div className="max-w-5xl mx-auto px-4">
<div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-neutral-800">
{/* use unoptimized because posters come from external hosts */}
<Image src={poster} alt={data?.Title ?? 'Poster'} fill priority unoptimized style={{ objectFit: 'cover' }} />


<div className="absolute bottom-4 left-4 text-white max-w-2xl">
<h1 className="text-2xl md:text-4xl font-bold">{data?.Title}</h1>
<p className="mt-1 text-sm text-neutral-200">{data?.Released} • {data?.Genre}</p>
</div>
</div>


<section className="mt-6 grid md:grid-cols-3 gap-6">
<div className="md:col-span-2">
<h2 className="text-xl font-semibold">Overview</h2>
<p className="mt-2 text-neutral-200">{data?.Plot}</p>


<div className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-300">
<div>
<p className="font-medium">Director</p>
<p>{data?.Director}</p>
</div>
<div>
<p className="font-medium">Runtime</p>
<p>{data?.Runtime}</p>
</div>
<div>
<p className="font-medium">Actors</p>
<p>{data?.Actors}</p>
</div>
<div>
<p className="font-medium">IMDB Rating</p>
<p>{data?.imdbRating}</p>
</div>
</div>
</div>


<aside className="bg-neutral-800 p-4 rounded">
<h3 className="font-semibold">Quick info</h3>
<ul className="mt-3 text-sm text-neutral-300 space-y-2">
<li><strong>Type:</strong> {data?.Type}</li>
<li><strong>Language:</strong> {data?.Language}</li>
<li><strong>Country:</strong> {data?.Country}</li>
<li><strong>Awards:</strong> {data?.Awards}</li>
</ul>
</aside>
</section>
</div>
);
}