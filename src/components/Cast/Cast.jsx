import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { fetchCast } from 'services/api';

import { Container, Card, Title, Text } from 'components/Cast/Cast.styled';

export default function Cast() {

    const params = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    useEffect(() => {
         if (!params.movieId) {
            return;
        };

        async function getCast() {
            setLoading(true);
             setError(false);
            try {
                const cast = await fetchCast(params.movieId, params.cast);
                
                setCast(cast);
            } catch (error) {
        
                 setError(true);
                
            } finally {
        
                 setLoading(false);
      }
        };
        getCast();
    }, [params.movieId, params.cast]);


    return (
        <div>
             {loading && <Loader />}
         {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )} 
            <Container>
                {cast.map(elem => (
                    <Card key={elem.id}>
                            <img src={elem.profile_path
                            ? `https://image.tmdb.org/t/p/w500${elem.profile_path}`
                            : defaultImg} width={300} height={100} alt={elem.name} />
                            <Title>{elem.name}</Title>
                            <Text>Character: {elem.character}</Text>
                        
                         </Card>
                ))};
                
        </Container>
               
            
      </div>
    )
}


