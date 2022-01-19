import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/create" component={Create} />

            <Route exact path="/blogs/:id" component={BlogDetails} />

            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;