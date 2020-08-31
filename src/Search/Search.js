import React from 'react';
import FilterByMedia from '../FilterByMedia/FilterByMedia';

class Search extends React.Component {

  render() {
    return (
      <div>
        <div>Search form</div>
        <FilterByMedia />
      </div>
    )
  }
}

export default Search;