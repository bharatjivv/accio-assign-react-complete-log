import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";

function App() {
  return (
    <main>
      <div>
        <h3>Index</h3>
<Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/women" component={Women} />
        </Switch>
      </Router>
      </div>
      
    </main>
  );
}

export default App;
