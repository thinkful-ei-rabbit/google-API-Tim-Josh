import React from 'react';

function Book(props) {


    return (
        props.bookData.map(book => {
            console.log(book)
            return (
                <li key={book.id}>
                    {book.volumeInfo.title} by
                    {book.volumeInfo.authors} cost:
                </li>
            )
        })
    )


}


export default Book;