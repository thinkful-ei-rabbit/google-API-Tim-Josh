import React from 'react';
import FilterByMedia from '../FilterByMedia/FilterByMedia';
import FilterByType from '../FilterByType/FilterByType';


function Search (props) {

  
    return (
      <div>
        <form className= "boomark-search-form" name="searchForm"> 
          <label htmlFor= "search for a book" />
          <input 
            type='text'
            id= 'search-form'
            name='searchTerm'
            onChange={(ev) => props.inputChange(ev)}
            value={props.reset}/>           
          <button type='button' value='submit' onClick={props.fetchBooks}>Search</button>
        </form>
        <div className="filterBars">
          <FilterByMedia         
            inputChange={props.inputChange}/>
          <FilterByType        
            inputChange={props.inputChange}/>
        </div>
      </div>
    )
  }


export default Search;