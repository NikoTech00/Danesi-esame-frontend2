import type { MovieDetail, TypeMovieSearchResponse, TypeMovieSummary } from "../types/Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const getMovies = async (): Promise<TypeMovieSummary[]> => {

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`)

    const data: TypeMovieSearchResponse = await response.json()

    return data.results
}

export const getMovieById = async (
    id: string | undefined
): Promise<MovieDetail> => {
    if (id === undefined) throw new Error("id mancante");

    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)

    const data: MovieDetail = await response.json()


    return data
}
