import { Link } from 'react-router-dom';

export const CardMovie = ({movie}) => {
   
 return (
        <div>
            {movie && (
                <><img src={movie.poster_path} alt={movie.title} />
                 <h2>{movie.title}</h2>
                 <p>User Score: {movie.vote_average}</p>
            <h3>Overview</h3>
                 <p>{movie.overview}</p>
            <h3>Genres</h3>
                 {/* <p>{movie.genres[0].name}</p> */}
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