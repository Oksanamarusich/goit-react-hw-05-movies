import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovie, fetchCast, fetchReviews } from 'services/api';
import { CardMovie } from 'components/CardMovie.jsx';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';

export default function MovieDetails() {
    const params = useParams();
    // console.log('params', params)

    const [movie, setMovie] = useState();
    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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

    useEffect(() => {
        // if (!cast.length) {
        //     return;
        // };

        async function getCast() {
            setLoading(true);
             setError(false);
            try {
                const cast = await fetchCast(params.movieId, params.cast);
                console.log('Cast', cast);
                setCast(cast);
            } catch (error) {
        
                 setError(true);
                
            } finally {
        
                 setLoading(false);
      }
        };
        getCast();
    }, [params.movieId, params.cast]);

     useEffect(() => {
        // if (!reviews.length) {
        //     return;
        // };

        async function getReviews() {
            setLoading(true);
             setError(false);
            try {
                const reviews = await fetchReviews(params.movieId,params.reviews);
                console.log('Reviews', reviews);
                setReviews(reviews);
            } catch (error) {
        
                 setError(true);
                
            } finally {
        
                 setLoading(false);
      }
        };
        getReviews()
    }, [params.movieId, params.reviews]);


    
    return (
        <div>
             {loading && <Loader />}
         {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )} 
            <CardMovie movie={movie} />
            <Cast cast={cast} />
            <Reviews reviews = {reviews} />
            
        </div>
    )
}





    

    

    