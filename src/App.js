import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Tutorial from './components/Tutorial';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/tutorial" component={Tutorial}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;