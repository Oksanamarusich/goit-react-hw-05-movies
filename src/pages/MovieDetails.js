import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovie } from 'services/api';
import { CardMovie } from 'components/CardMovie.jsx';

export default function MovieDetails() {
    const params = useParams()
    console.log('params', params)

    const [movie, setMovie] = useState();

    useEffect(() => {
        async function getMovie() {
            try {
                const movie = await fetchMovie(params.movieId);
                console.log('MOVIE', movie)
                setMovie(movie);
            } catch (error) {
                
            }
        }
        getMovie()
    }, [params.movieId]);
    
    return (
        <div>
            <CardMovie movie={movie} />
        </div>
    )
}





    

    

    