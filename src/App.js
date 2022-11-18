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
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/c_code">
            <CreativeCode />
          </Route>
          <Route path="/writing">
            <Writing />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/workList/:id">
            <WorkDetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
