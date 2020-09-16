import React, { Component } from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import Booklist from './Booklist/Booklist';
// import FilterByBookType from './FilterByBookType/FilterByBookType';
// const apikey = 'AIzaSyBt2AhESZXZEPvoQprGd9emLd3M28cRs-s';

export default class App extends Component {
  state = {
    loading: false,
    error: null,
    books: [],
    searchTerm: "",
    mediaFilter: 'All',
    type: "ebooks",
  }
  

  inputChangeHandler = ({ target }) => {    
    this.setState({
      [target.name]: target.value,
    })
  }

  // onChangeHandler = (e) => {
  //   e.preventDefault()
  //   this.setState ({
  //     mediaFilter: e.target.value
  //   })

  

  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('handle form submit ran.')
    
    // const searchValue = e.target['book-search'].value
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&filter=${this.state.type}&printType=${this.state.mediaFilter}`   
    
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }        
        return res.json();
      })
      .then(data => {
        this.setState({
          books: data.items,
          error: null
        });
      })
      // .catch(err => {
      //   this.setState({
      //     error: err.message
      //   });
      // });
      this.setState({
        searchTerm: '',
      })
      
  };

  render() {

    return (
      <div>
        <Header />
        <Search
          fetchBooks={this.handleFormSubmit}
          inputChange={this.inputChangeHandler}
          reset={this.state.searchTerm}                 
         />
        <Booklist 
        bookData={this.state.books}/>
      </div>
    )

  }

}
