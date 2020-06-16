import React from 'react';
import { NavLink } from 'react-router-dom'

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    render(){
        return(
           
        <ul className="right">
           <h1>Ovo je searchbar</h1>
       </ul>
           
        )
    }
}

export default SearchBar;