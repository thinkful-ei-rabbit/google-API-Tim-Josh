import React from 'react';

function FilterByMedia (props) {
    
    return(
      <select className="filterMedia" defaultValue="All" name="filterMedia" onChange={(ev) => props.inputChange(ev)}>
        <option value= "All">All</option>
        <option value= "Books">Books</option>
        <option value= "Magazines">Magazines</option>
      </select>
    )
}


export default FilterByMedia;