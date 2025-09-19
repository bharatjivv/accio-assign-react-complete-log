import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';
import './../styles/App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/users/:id" component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
