import { Layout } from './Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
       <Route path = "*" element = {<Navigate to = "/" />} />
    </Routes>
     
    );
};
