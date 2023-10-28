import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import NotFoundPage from 'pages/NotFoundPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
      </Route>
      
      
    </Route>
       <Route path = "*" element = {<NotFoundPage/>}/>
    </Routes>
     
    
  );
};
