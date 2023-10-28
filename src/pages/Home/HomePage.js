import { useState, useEffect } from 'react';

import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { fetchTrending } from '../../services/api';
import { ListMovies } from 'components/ListMovies/ListMovies';
import { Title } from 'pages/Home/HomePage.styled';



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
         <Title>Trending today</Title>
        <ListMovies movies={movies} />

    </main>)
}