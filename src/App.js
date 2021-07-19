import HomePage from "./pages/HomePage";
import About from "./pages/About"
import NotFound  from "./pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path='/home' component={HomePage}/>
            <Route path='/about' component={About}/>
            <Route path='/*' component={NotFound}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
