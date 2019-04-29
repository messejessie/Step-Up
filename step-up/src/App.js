import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import { Button } from 'reactstrap';
//import MainNav from "../src/component/nav"
// import Home from '../src/component/Jumbotron';
import HomePage from './Pages/Home';
import MainNav from './component/nav';
// import LogIn from './Pages/login';
// import SignUp from './Pages/SignUp';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
          <MainNav>
          <Link to="/">Home</Link>
          {/* <Link to="/login">Log in</Link> */}
          </MainNav>
            <main>
              <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/login" component={LogIn} /> */}
              </Switch>
            </main>
          </div>
        </Router>

      </div>
    )
  }

}

// function App() {
//   return (

//   // <div>hello world</div>
//     <Router>
//     {/* <div>
//       <ul>
//           <li>
//           <Link to="/signup">Sign Up</Link>
//         </li>
//         <li>
//           <Link to="/Profile">Topics</Link>
//         </li>
//       </ul>

//       <hr /> */}

//       <Route exact path="/" page={Home} />
//       {/* <Route path="/signup" component={About} />
//       <Route path="/topics" component={Topics} /> */}

//   </Router>
//   );
// }

export default App;
