import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import BookHere from './pages/bookhere';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/bookhere' component={BookHere} exact />
      </Switch>
    </Router>
  );
}

export default App;
