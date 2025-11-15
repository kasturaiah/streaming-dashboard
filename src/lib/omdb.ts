const BASE = 'https://www.omdbapi.com/';
const API_KEY = process.env.OMDB_API_KEY;


if (!API_KEY) {
// Throwing at import time will make it obvious during dev if env var missing
throw new Error('OMDB_API_KEY is required in .env.local');
}


export async function fetchMovies(query: string) {
const res = await fetch(`${BASE}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
if (!res.ok) throw new Error('Failed to fetch movies');
const json = await res.json();
// OMDb returns { Search: [...], totalResults, Response }
return json.Search ?? [];
}


export async function fetchMovieById(id: string) {
const res = await fetch(`${BASE}?apikey=${API_KEY}&i=${encodeURIComponent(id)}&plot=full`);
if (!res.ok) throw new Error('Failed to fetch movie details');
const json = await res.json();
return json;
}