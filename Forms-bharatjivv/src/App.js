import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Form from "./pages/Form";
import FormRef from "./pages/FormRef";
import FormState from "./pages/FormState";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link id="form-link" to="/form">Form (use layout only)</Link></li>
          <li><Link id="form-ref-link" to="/form-ref">Form with useRef</Link></li>
          <li><Link id="form-state-link" to="/form-state">Form with useState</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/form" component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
        <Route path="/" exact component={Form} />
      </Switch>
    </Router>
  );
}

export default App;