import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

/import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Happy</Link>
        </li>
        <li>
          <Link to="/about">Sleepy</Link>
        </li>
        <li>
          <Link to="/topics">Guilty</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Happy} />
      <Route path="/about" component={Sleepy} />
      <Route path="/topics" component={Guilty} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Happy</h2>
  </div>
);

const About = () => (
  <div>
    <h2>Sleepy</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Guilty</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;