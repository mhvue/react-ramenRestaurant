import React from 'react';
import About from "./pages/About";
import Order from "./pages/Order";
import {ContactModal, orderModal} from "./component/Modal";
import NavBar from "./component/NavBar";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path = "/" component={About} />
        <Route exact path = "/Contact" component={ContactModal} />
        <Route exact path = "/Order" component={Order} />
        <Route exact path = "/orderModal" component={orderModal} />
      </div>
    </Router>
  );
}

export default App;
