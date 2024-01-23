import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa';

const imagesUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showlink = true}) => {
    return (
        <div className="movieCard">
            <img src={imagesUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showlink && <Link to={`/movie/${movie.id}`}>Details</Link>}
        </div>
    )
}

export default MovieCard;