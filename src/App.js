import HomePage from "./pages/HomePage";
import About from "./pages/About"
import NotFound  from "./pages/404";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={About}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/project' component={Project}/>
            <Route path='/404' component={NotFound}/>
            <Redirect to="/404" />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
