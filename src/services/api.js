import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a374ad49295f660bd4b75eba44704cf2';

export const  fetchTrending = async () => {
  const  {data}  = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
      language: 'en-US'
      
    },
  });
  
  return data.results;
  
};
 
// пошук за ключовим словом

export const fetchWord = async (value)=> {
  const { data } = await axios.get('search/movie', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query:'value'
    }
  });
  return data.results;

}


//information about film

  export const fetchMovie = async (movieId)=> {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US'
     
    }
  });
  
  return data;

}

  // cast

export const fetchCast = async (movieId)=> {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US'
     
    }
  });
  console.log('fetchCast', data.cast);
  return data.cast;

}

  // Reviews

export const fetchReviews = async (movieId)=> {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US'
     
    }
  });
  console.log('fetchReviews', data.results);
  return data.results;

}