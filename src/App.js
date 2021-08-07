import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';


import About from './pages/About/About';
import Home from './pages/Home/Home';
import Testimonial from './pages/Testimonial/Testimonial';
import Contact from './pages/Contact/Contact';
import Services from './pages/Service/Services';


const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/service" exact>
            <Services />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/testimonial" exact>
            <Testimonial />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
