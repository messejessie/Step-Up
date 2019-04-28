import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { Button } from 'reactstrap';
import Example from "../src/component/Jumbotron"
import MainNav from "../src/component/nav"


class App extends Component {
  render () {
    return (
      <div className="app">
      <MainNav />
      <Example />
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
