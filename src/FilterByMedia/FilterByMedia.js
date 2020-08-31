import React from 'react';

class FilterByMedia extends React.Component {


  render() {
    return (
      <select>
        <option value="ebooks">E-Books</option>
        <option value= "free-ebooks">Free E-Books</option>
        <option value= "full">Full</option>
        <option value="paid-ebooks">Paid E-Books</option>
        <option value= "partial">Partial</option>
      </select>
    )
  }
}

export default FilterByMedia;