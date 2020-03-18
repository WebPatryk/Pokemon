import React from 'react';

import Welcome from './Welcome';
import DetailsPokemos from './DetailsPokemons';
import '../styles/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>


        <div className="one-page">


          <Route exact path="/" component={Welcome} />

        </div>


        <Route path="/pokemon/:id" component={DetailsPokemos} />


      </Router>


    </>
  );
}

export default App;
