import React from 'react';
import Book from '../Book/Book';

function Booklist (props) {        
      
    
    return (
        <ul>
            <Book 
            bookData={props.bookData}/>
        </ul>
    )
}  

export default Booklist;


