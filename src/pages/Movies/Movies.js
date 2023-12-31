import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import toast from 'react-hot-toast';
import { fetchWord } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { ListMovies } from 'components/ListMovies/ListMovies';


export default function Movies() {
    const [params, setParams] = useSearchParams();
    const value = params.get('value') ?? '';
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

   useEffect(() => {
        if (value === '') {
          
            return;
    }
        async function searchWord() {
             setLoading(true);
             setError(false);
           
            try {

                const movies = await fetchWord(value);
            
                setMovies(movies);
                
                 if (movies.length === 0) {
                     return toast.success('Sorry, no movies found.');
                };
                
           
            } catch (error) {
        
                 setError(true);
                
            } finally {
        
                 setLoading(false);
      }
    };
        searchWord();
    }, [value]);

    
 const handleSubmit = e => {
    e.preventDefault();
     const form = e.currentTarget;
    
        setParams({ value: form.elements.value.value });
        if (form.elements.value.value === '') {
            return toast.success('Please, enter a word to search for. ');
     }
     
    };
    
    
    return (<div>
         {loading && <Loader />}
         {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )} 
        <SearchMovies
            onSubmit={handleSubmit}
            value={value}
            
         />
         <ListMovies movies={movies} /> 
        
    </div>)
}