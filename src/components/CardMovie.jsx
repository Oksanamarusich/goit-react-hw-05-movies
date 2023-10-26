import { Link } from 'react-router-dom';

export const CardMovie = ({movie}) => {
   const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
 return (
        <div>
            {movie && (
             <>
                 <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={250} alt={movie.title}
/>
                 <h2>{movie.title}({movie.release_date.split('-')[0]})</h2>
                 <p>User Score: {movie.vote_average}</p>
            <h3>Overview</h3>
                 <p>{movie.overview}</p>
            <h3>Genres</h3>
                 <p>{movie.genres.map(el => el.name).join(' / ')}</p>
            <h2>Additional information</h2>
            <ul>
                <li key = {movie.id}>
                         <Link to="cast">Cast</Link>
                </li>
                    
                <li>
                         <Link to="reviews">Reviews</Link>
                </li>
            </ul></>
        )}  
        </div>
    )
}