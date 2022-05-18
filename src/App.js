import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/contacts" component={ Contact } />
        <Route path="/projects" component={ Projects } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
