export const Cast = ({ cast }) => {
    
    return (
        <div>
            <ul>
                {cast.map(elem => (
                    <li key={elem.id}>
                        <img src={elem.profile_path} alt={elem.name} />
                        <h3>{elem.name}</h3>
                        <p>Character: {elem.character}</p>

                    </li>
                ))}
                
        </ul>
               
            
      </div>
    )
}


