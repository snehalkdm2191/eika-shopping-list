import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ShoppingMain from "./components/ShoppingMain";
import ViewCompleteOrder from "./components/ViewCompleteOrder";

function App() {
  return (
    <Router>
      <NavBar />
      <div>
      <Switch>
        <Route exact path="/">
          <ShoppingMain />
        </Route>

        <Route exact path="/order">
          <ViewCompleteOrder />
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
