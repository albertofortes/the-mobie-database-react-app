import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

import './App.scss';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/templates/Landing';
import Movie from './components/templates/Movie';

function App() {
  return (
    <Provider store={store} className="App">
      <Router>
        <div>
          <Header />
          <div className="content">
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
