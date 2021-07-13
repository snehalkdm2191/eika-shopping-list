import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StartPage from "./components/ShoppingMain";

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
