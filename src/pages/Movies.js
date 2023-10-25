import { useState, useEffect } from 'react';

import { SearchMovies } from 'components/SearchMovies';
import toast from 'react-hot-toast';
import { fetchWord } from '../services/api';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage.styled';
import { ListMovies } from 'components/ListMovies';

export default function Movies({ handelSearch }) {
    const [value, setValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

     useEffect(() => {
        if (value === '') {
      return;
    }
        async function searchWord(value) {
             setLoading(true);
             setError(false);
           
            try {
                const movies = await fetchWord(value);
                console.log('movies', movies)
                setMovies(movies);
                
           
            } catch (error) {
        
                 setError(true);
                
            } finally {
        
                 setLoading(false);
      }
    };
        searchWord();
    }, [value]);

    const handlerChange = evt => {
        setValue(evt.target.value);
    }

     const handlerSubmit = evt => {
        evt.preventDefault();
        if (value.trim() === '') {
            return toast.success('Please enter a search word.', { position: 'top-right' });
        }
         setValue(evt.target.value);
        // handelSearch(value);
         
        reset();
    };
    
  const  reset = () => {
         setValue('');
    }
    
    
    return (<div>
         {loading && <Loader />}
         {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )} 
        <SearchMovies
            onSubmit={handlerSubmit}
            value={value}
             onChange={handlerChange} />
         <ListMovies movies={movies} /> 
        
    </div>)
}