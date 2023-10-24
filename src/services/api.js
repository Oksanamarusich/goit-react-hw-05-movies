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
  console.log('fetch', data.results);
  return data.results;

}





  


  //information about film

  // const options = {
  // method: 'GET',
  // url: 'https://api.themoviedb.org/3/movie/movie_id',
  // params: {language: 'en-US'},
  // headers: {
  //   accept: 'application/json',
  //   Authorization: 'Bearer 58ad02d642bc4327ab0be53b23f95385'
  // }
//};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

  //about actors

//   const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/movie_id/credits',
//   params: {language: 'en-US'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 58ad02d642bc4327ab0be53b23f95385'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

  //огляд

//   const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/movie_id/reviews',
//   params: {language: 'en-US', page: '1'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 58ad02d642bc4327ab0be53b23f95385'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });