import { useState } from "react";
import Form from "./components/Form";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/form" exact>
            <Form isLoggedIn={isLoggedIn} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
