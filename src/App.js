import React, { Component } from 'react';
import Header from './Header/Header'
import Search from './Search/Search'

export default class App extends Component {
  state = {
    books : [],
  }



  render() {

    return (
      <div>
        <Header />
        <Search />
      </div>
    )

  }

}
