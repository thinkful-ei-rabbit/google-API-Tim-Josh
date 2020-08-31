import React from 'react';

class FilterByBookType extends React.Component{
    render() {
        return(<select>
            <option value="All">All</option>
            <option value= "Books">Books</option>
            <option value= "Magazines">Magazines</option>
        </select>)
    }
}

export default FilterByBookType;