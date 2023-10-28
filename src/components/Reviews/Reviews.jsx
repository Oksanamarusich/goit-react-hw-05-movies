import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { fetchReviews } from 'services/api';
import{Message} from './Reviews.styled'


export default function Reviews() {

    const params = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

     useEffect(() => {
        if (!params.movieId) {
            return;
        };

        async function getReviews() {
            setLoading(true);
             setError(false);
            try {
                const reviews = await fetchReviews(params.movieId,params.reviews);
                console.log('Reviews', reviews);
                setReviews(reviews);
            } catch (error) {
        
                 setError(true);
                
            } finally {
        
                 setLoading(false);
      }
        };
        getReviews()
    }, [params.movieId]);



    return (
        <div>
            {loading && <Loader />}
         {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
            )} 
            {reviews.length !== 0 ? 
            <ul>
              {reviews.map(elem => (
                    <li key={elem.id}>
                        <h3>{elem.author}</h3>
                      <p>{elem.content }</p>

                    </li>
                ))}
                
            </ul>
            : <Message>We don't have any reviews for this movie.</Message>}
            
        
        </div >)
}