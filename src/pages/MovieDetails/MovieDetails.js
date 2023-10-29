import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import { fetchMovie } from 'services/api';
import { CardMovie } from 'components/CardMovie/CardMovie.jsx';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { BsArrowLeft } from "react-icons/bs";
import {LinkBack} from "pages/MovieDetails/MovieDetails.styled"

export default function MovieDetails() {
    const params = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');
    
    useEffect(() => {
        if (!params.movieId) {
            return;
        };

        async function getMovie() {
            setLoading(true);
             setError(false);
            try {
                const movie = await fetchMovie(params.movieId);
                
                setMovie(movie);
            } catch (error) {
        
                 setError(true);
                
            } finally {
        
                 setLoading(false);
      }
        };
        getMovie();
    }, [params.movieId]);

    
    return (
        <div>
            <LinkBack to={backLinkLocationRef.current} ><BsArrowLeft /> Go back</LinkBack>
             {loading && <Loader />}
         {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )} 
            <CardMovie movie={movie} />
            
            <Outlet/>
            
        </div>
    )
}





    

    

    