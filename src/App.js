// import logo from './logo.svg';
import './App.css';
import WhatsChat from "./pages/WhatsChat";
import InfiniteScroll from "./pages/InfiniteScroll";
import ErrorBoundary from "./pages/ErrorBoundary"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Position from './pages/Position';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <ErrorBoundary>
              <WhatsChat />
            </ErrorBoundary>
          </Route>
          <Route exact path="/list">
              <InfiniteScroll />
          </Route>
          <Route path="/position">
            <Position />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
