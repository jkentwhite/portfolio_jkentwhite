import './index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreativeCode from './components/c_code';
import WorkDetails from './components/workDetails';
import Writing from './components/writing';
import Games from './components/games';
import Art from './components/art';

function App() {


  return (
    <Router>
    <div className="App">
      <div className="sticky">
        <Navbar />
        </div>
        <div className="content">
        <Switch>
          <Route exact path="/portfolio">
            <Home />
          </Route>
          <Route path="/portfolio/c_code">
            <CreativeCode />
          </Route>
          <Route path="/portfolio/writing">
            <Writing />
          </Route>
          <Route path="/portfolio/games">
            <Games />
          </Route>
          <Route path="/portfolio/art">
            <Art />
          </Route>
          <Route path="/portfolio/workList/:id">
            <WorkDetails />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
