import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Pages/Home';
//import MainNav from './component/nav';
import About from './Pages/About';
import Profile from './Pages/Profile'
import BlogPage from './Pages/BlogPage'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
          {/* <MainNav>
          <Link to="/">Home</Link>
          </MainNav> */}
            <main>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/aboutus" component={About} />
                <Route path="/profile"  component={Profile} />
                <Route path="/blog"  component={BlogPage} />
                {/* <Route path="/login" component={LogIn} /> */}
              </Switch>
            </main>
          </div>
        </Router>

      </div>
    )
  }

}

export default App;
