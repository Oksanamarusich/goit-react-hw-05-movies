//import { useState, useEffect } from 'react';
//import {ListMovies} from 'components/ListMovies'

export const SearchMovies = ({ onSubmit, value, onChange }) => {
    
   
    return (<div>
        <form onSubmit = {onSubmit}>
            <input
             type="text"
             value={value}
             onChange={ onChange}></input>
        <button type = "submit">Search</button>
     </form>
       
        
        {/* <ListMovies/> */}
        
    </div>)
}