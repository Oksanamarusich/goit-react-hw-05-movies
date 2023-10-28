import { Link } from 'react-router-dom';
import {
    ContainerCard,
    Poster,
    PosterContainer,
    TitleMovie,
Title} from 'components/CardMovie/CardMovie.styled'

export const CardMovie = ({movie, cast, reviews}) => {
//    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
 return (
        <>
            {movie && (
             <><ContainerCard>
                 <PosterContainer>
                     < Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={500} alt={movie.title}/>
                 </PosterContainer>
                 
                 <div>
                     <TitleMovie>{movie.title}({movie.release_date.split('-')[0]})</TitleMovie>
                 <p>User Score: {movie.vote_average}</p>
            <Title>Overview</Title>
                 <p>{movie.overview}</p>
            <Title>Genres</Title>
                 <p>{movie.genres.map(el => el.name).join(' / ')}</p>
                </div>
             </ContainerCard>
                 
                
            <h2>Additional information</h2>
            <ul>
                <li>
                         <Link to="cast">Cast</Link>
                </li>
                    
                <li>
                         <Link to="reviews">Reviews</Link>
                </li>
            </ul></>
        )}  
        </>
    )
}