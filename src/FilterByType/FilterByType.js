import React from 'react';

function FilterByType (props) {


 
    return (
      <select onChange={(ev) => props.inputChange(ev)} className="filterType" name="type" defaultValue="">
        <option value="ebooks">E-Books</option>
        <option value= "free-ebooks">Free E-Books</option>
        <option value= "full">Full</option>
        <option value="paid-ebooks">Paid E-Books</option>
        <option value= "partial">Partial</option>
      </select>
    )
  }


export default FilterByType;