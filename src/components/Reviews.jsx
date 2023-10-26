
export const Reviews = ({reviews}) => {
    return (
        <div>
            <ul>
              {reviews.map(elem => (
                    <li key={elem.id}>
                        <h3>{elem.author}</h3>
                      <p>{elem.content }</p>

                    </li>
                ))}
                
            </ul>
        
        </div >)
}