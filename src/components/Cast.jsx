export const Cast = ({ cast }) => {
    
    return (
        <div>
            <ul>
                {cast.map(elem => (
                    <li key={elem.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${elem.profile_path}`} width = {150} alt={elem.name} />
                        <h3>{elem.name}</h3>
                        <p>Character: {elem.character}</p>

                    </li>
                ))}
                
        </ul>
               
            
      </div>
    )
}


