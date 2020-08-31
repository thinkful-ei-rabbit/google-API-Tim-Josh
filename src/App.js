import React, { Component } from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import Booklist from './Booklist/Booklist';

const apikey = 'AIzaSyBt2AhESZXZEPvoQprGd9emLd3M28cRs-s';

export default class App extends Component {
  state = {loading : false, error : null, 
    books : [],
  }

fetchBooks(e) {
e.preventDefault()
  console.log(e.target['book-search'].value)
/*const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`
fetch(url)
.then((res)=> console.log (res) ) */
}

  render() {

    return (
      <div>
        <Header />
        <Search
        fetchBooks = {this.fetchBooks} />
        <Booklist />
      </div>
    )

  }

}
