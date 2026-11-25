import { useEffect, useState } from "react"
import { getMovies } from "../../api/movie"
import type { TypeMovieSummary } from "../../types/Movie"
import MovieCard from "../MovieCard"

const MovieListPage = () => {
    const [movies, setMovies] = useState<TypeMovieSummary[]>([])

    const initializeMovies = async () => {
        const data = await getMovies()
        setMovies(data)
    }

    useEffect(() => {
        initializeMovies()
    }, [])

    return (
        <div>
            <h1 className="page-title">
                The Lord of the Rings
            </h1>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieListPage