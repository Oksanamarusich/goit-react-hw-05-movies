import { useLocation } from 'react-router-dom';
import { Item, LinkItem } from 'components/ListMovies/ListMovies.styled';

export const ListMovies = ({ movies }) => {
    const location = useLocation();
    console.log('LISTLOCATION', location)
    return (
        <div>
           
            <ul>
                {movies.map(movie => (
                    <Item key={movie.id}>
                        <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</LinkItem></Item>
                ))}
                
            </ul>
        </div>
    )
};