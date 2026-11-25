import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { getMovieById } from "../../api/movie"
import type { MovieDetail } from "../../types/Movie"

const MovieDetailPage = () => {
    const [movie, setMovie] = useState<MovieDetail | null>(null)

    const { id } = useParams()

    const initializeMovie = async () => {
        const data = await getMovieById(id)
        setMovie(data)
    }

    useEffect(() => {
        initializeMovie()
    }, [id])

    if (movie === null) return <div>Nessun movie con questo ID</div>

    return (
        <div>
            <Link className="back-link" to="/">
                ← Torna all'elenco
            </Link>

            <article className="detail">
                <div>
                    <div className="detail__poster">
                        {movie.poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        ) : (
                            "Poster"
                        )}
                    </div>
                </div>

                <div>
                    <h1 className="detail__title">{movie.title}</h1>
                    <p className="detail__tagline">{movie.tagline}</p>

                    <ul className="detail__meta">
                        <li>Uscita: {movie.release_date}</li>
                        <li>Durata: {movie.runtime} min</li>
                        <li>Voto: {movie.vote_average}</li>
                        <li>Voti: {movie.vote_count}</li>
                        <li>Stato: {movie.status}</li>
                        <li>Lingua: {movie.original_language}</li>
                    </ul>

                    <div className="detail__genres">
                        {movie.genres.map((genre) => (
                            <span className="genre" key={genre.id}>
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    <p className="detail__overview-label">Trama</p>
                    <p className="detail__overview">{movie.overview}</p>

                    <p className="card__meta">
                        Produzione:{" "}
                        {movie.production_companies.map((c) => c.name).join(" · ")}
                    </p>
                </div>
            </article>
        </div>
    )
}

export default MovieDetailPage