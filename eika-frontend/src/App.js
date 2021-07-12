import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StartPage from "./components/StartShopping";

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
