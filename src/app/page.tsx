import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import { fetchMovies } from '../lib/omdb';
import type { Movie } from '../types/movie';


export default async function HomePage() {
// OMDb has search by text only. We'll use keywords to create "rows".
const popular: Movie[] = await fetchMovies('Avengers');
const action: Movie[] = await fetchMovies('Batman');
const sciFi: Movie[] = await fetchMovies('Star');


const hero = popular?.[0] ?? null;


return (
<div className="max-w-7xl mx-auto px-4">
{hero && <HeroBanner movie={hero} />}


<section className="space-y-8 mt-8">
<MovieRow movies={popular} categoryTitle="Popular" />
<MovieRow movies={action} categoryTitle="Action" />
<MovieRow movies={sciFi} categoryTitle="Sci-Fi" />
</section>


<footer className="mt-12 pb-12 text-center text-sm text-neutral-400">
Built with OMDb • Demo project
</footer>
</div>
);
}