//import { useState, useEffect } from 'react';
//import {ListMovies} from 'components/ListMovies'
import {SearchContainer, SearchInput, Button} from 'components/SearchMovies/SearchMovies.styled'

export const SearchMovies = ({ onSubmit, value, onChange }) => {
    
   
    return (<SearchContainer>
        <form onSubmit = {onSubmit}>
            <SearchInput
             type="text"
             value={value}
             onChange={ onChange}></SearchInput>
        <Button type = "submit">Search</Button>
     </form>
       
        
        {/* <ListMovies/> */}
        
    </SearchContainer>)
}