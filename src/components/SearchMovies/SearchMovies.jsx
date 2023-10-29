import {SearchContainer, SearchInput, Button} from 'components/SearchMovies/SearchMovies.styled'

export const SearchMovies = ({value,  onSubmit}) => {
    
   
    return (<SearchContainer>
        <form onSubmit = {onSubmit}>
            <SearchInput type="text"
                name="value"
                
             
             />
        <Button type = "submit" >Search</Button>
     </form>
       
        
    </SearchContainer>)
}