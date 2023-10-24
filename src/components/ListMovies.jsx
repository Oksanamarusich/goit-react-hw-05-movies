

export const ListMovies = ({ movies }) => {

    return (
        <div>
           
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <a href=" ">{movie.title}</a></li>
                ))}
                
            </ul>
        </div>
    )
};