import type { TypeMovieSearchResponse, TypeMovieSummary } from "../types/Movie";

export const getMovies = async (): Promise<TypeMovieSummary[]> => {
    const response = await fetch("https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=131f99014a6419901d3b475a81399f47")

    const data: TypeMovieSearchResponse = await response.json()

    return data.results
} 