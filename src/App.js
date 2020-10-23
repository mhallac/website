import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home";

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
