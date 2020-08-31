import React from 'react';
import FilterByMedia from '../FilterByMedia/FilterByMedia';
import FilterByBookType from '../FilterByBookType/FilterByBookType';


function Search (props) {

  
    return (
      <div>
        <form onSubmit={props.fetchBooks} className= "boomark-search-form"> 
        <label for= "search for a book" />
        <input name= "book-search" type= "text" placeholder = "your book" /> 
        <button type= 'submit'>Search</button>
        </form>
        <FilterByMedia />
        <FilterByBookType />
      </div>
    )
  }


export default Search;