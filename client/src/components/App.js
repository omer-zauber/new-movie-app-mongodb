import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from '../components/Header';
import MovieCreatePage from '../components/MovieCreatePage';
import MovieRatePage from '../components/MovieRatePage';
import SearchMovie from '../components/SearchMovie';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact={true} component={SearchMovie} />
            <Route path="/create" component={MovieCreatePage} />
            <Route path="/rate" component={MovieRatePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
