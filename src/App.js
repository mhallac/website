import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import { Route, Switch } from 'react-router-dom';
import { Account } from './components/login/Accounts';

function App() {
  return (
    <Account>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Account>
  );
}

export default App;
