//import { Link } from 'react-router-dom';
import { Item, LinkItem } from 'components/ListMovies/ListMovies.styled';

export const ListMovies = ({ movies }) => {

    return (
        <div>
           
            <ul>
                {movies.map(movie => (
                    <Item key={movie.id}>
                        <LinkItem to={`/movies/${movie.id}`}>{movie.title}</LinkItem></Item>
                ))}
                
            </ul>
        </div>
    )
};