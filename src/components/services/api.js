import axios from 'axios';

//main-page
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 58ad02d642bc4327ab0be53b23f95385'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  //search word page film

  const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 58ad02d642bc4327ab0be53b23f95385'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  //information about film

  const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 58ad02d642bc4327ab0be53b23f95385'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  //about actors

  const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/credits',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 58ad02d642bc4327ab0be53b23f95385'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  //огляд

  const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/reviews',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 58ad02d642bc4327ab0be53b23f95385'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });