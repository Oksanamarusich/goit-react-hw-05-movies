import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { fetchCast } from 'services/api';

export default function Cast() {

    const params = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
         if (!params.movieId) {
            return;
        };

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


    return (
        <div>
             {loading && <Loader />}
         {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )} 
            <ul>
                {cast.map(elem => (
                    <li key={elem.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${elem.profile_path}`} width = {150} alt={elem.name} />
                        <h3>{elem.name}</h3>
                        <p>Character: {elem.character}</p>

                    </li>
                ))}
                
        </ul>
               
            
      </div>
    )
}


