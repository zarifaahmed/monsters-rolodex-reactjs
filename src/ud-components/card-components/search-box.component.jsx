import React from 'react';
import './search-box.styles.css'


const SearchBox = ({placeholder, onSearchChange}) => {
    return(
        <input  
        className='search'
        type='search' 
        placeholder={placeholder}
        // value={this.state.searchField}
        onChange={onSearchChange} />
    )
}

export default SearchBox