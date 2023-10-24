
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage.styled';
import { fetchTrending } from '../services/api';
import { ListMovies } from 'components/ListMovies';

import { useState, useEffect } from 'react';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
       
        async function popularMovies() {
             setLoading(true);
             setError(false);
           
            try {
                const data = await fetchTrending(); 
                setMovies(data);
           
            } catch (error) {
        
                 setError(true);
                
            } finally {
        
                 setLoading(false);
      }
    };
        popularMovies();
    }, []);
    
    return (<main>
        {loading && <Loader />}
         {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )} 
         <h1>Trending today</h1>
        <ListMovies movies={movies} />

    </main>)
}