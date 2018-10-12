import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <SearchForm />
        <ArticleDisplay />
        <Notes />
      </React.Fragment>
    );
  }
}

export default App;
