

export const CardMovie = ({movie}) => {
    
 return (
        <div>
            {movie && (
                <><img src={movie.poster_path} alt={movie.original_title} />
                 <h2>{movie.original_title}</h2>
                 <p>User Score: {movie.vote_average}</p>
            <h3>Overview</h3>
                 <p>{movie.overview}</p>
            <h3>Genres</h3>
                 <p>{movie.genres[0].name} {movie.genres[1].name} {movie.genres[2].name}</p>
            <h2>Additional information</h2>
            <ul>
                <li key = {movie.id}>
                    <a href =" ">Cast</a></li>
                    
                <li>
                    <a href =" ">Reviews</a></li>
            </ul></>
        )}  
        </div>
    )
}