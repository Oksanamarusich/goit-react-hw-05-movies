
import {
    ContainerCard,
    Poster,
    PosterContainer,
    TitleMovie,
    Title,
    Span,
    ContainerInfo,
    LinkCast,
    LinkPreviews,
    List
} from 'components/CardMovie/CardMovie.styled'

export const CardMovie = ({movie, cast, reviews}) => {
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
 return (
        <>
            {movie && (
             <><ContainerCard>
                 <PosterContainer>
                     < Poster src={movie.poster_path
                         ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                         : defaultImg} width={500} alt={movie.title} />
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
                 
                 <ContainerInfo>
                 <Span>Additional information</Span>
            <List>
                <li>
                         <LinkCast to="cast">Cast</LinkCast>
                </li>
                    
                <li>
                         <LinkPreviews  to="reviews">Reviews</LinkPreviews>
                </li>
                     </List>
                 </ContainerInfo>   
            
             </>
        )}  
        </>
    )
}