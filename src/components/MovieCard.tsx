import { useNavigate } from "react-router"
import type { TypeMovieCardProps } from "../types/Movie"

const MovieCard = ({ movie }: TypeMovieCardProps) => {
    const navigate = useNavigate()

    const navigaDettaglio = () => {
        navigate('/movies/${moviee.id}')
    }


    return (
        <article className="card">
            <div className="card__poster">
                {movie.poster_path ? (
                    <img src={""} alt={movie.title} />
                ) : (
                    "Poster"
                )}
            </div>
            <div className="card__body">
                <h2 className="card__title">
                    {movie.title}
                </h2>
                <p className="card__meta">
                    Uscita: {movie.release_date} · Voto: {movie.vote_average}
                </p>
                <p className="card_overview">
                    {movie.overview}
                </p>
                <button className="card__cta" onClick={navigaDettaglio}>Dettaglio</button>
            </div>
        </article>
    )
}

export default MovieCard