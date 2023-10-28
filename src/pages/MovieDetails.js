import { useParams, Link,  Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovie } from 'services/api';
import { CardMovie } from 'components/CardMovie/CardMovie.jsx';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { BsArrowLeft } from "react-icons/bs";

export default function MovieDetails() {
    const params = useParams();
    // console.log('params', params)

    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!params.movieId) {
            return;
        };

        async function getMovie() {
            setLoading(true);
             setError(false);
            try {
                const movie = await fetchMovie(params.movieId);
                console.log('MOVIE', movie)
                setMovie(movie);
            } catch (error) {
        
                 setError(true);
                
            } finally {
        
                 setLoading(false);
      }
        };
        getMovie();
    }, [params.movieId]);

    console.log('LOCATION', location)
    return (
        <div>
            <Link to={location.state?.from ?? '/'} ><BsArrowLeft/>  Go back</Link>
             {loading && <Loader />}
         {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )} 
            <CardMovie movie={movie} />
            
            <Outlet/>
            
        </div>
    )
}





    

    

    