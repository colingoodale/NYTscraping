import React, { Component } from 'react';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
// import ArticleDisplay from './components/ArticleDisplay';
// import Notes from './components/Notes'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <SearchForm />
        {/* <ArticleDisplay /> */}
        {/* <Notes /> */}
      </React.Fragment>
    );
  }
}

export default App;
