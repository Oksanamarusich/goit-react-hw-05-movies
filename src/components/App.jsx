import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/movies" element={<Movies />}/>
      <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<MovieDetails />} />
          <Route path="/movies/:movieId/reviews" element={<MovieDetails />} />
      </Route>
      </Route>

    </Routes>
     
    
  );
};
