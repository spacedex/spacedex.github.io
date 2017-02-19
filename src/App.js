// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import Home from './home.js'
import Navbar from './navbar.js';
import Asteroids from './asteroids.js';
import Mars from './mars.js';
import LiveEarth from './live.js';
import Sounds from './sounds.js';
import Footer from './footer.js';
import Searchbox from './search.jsx';
import Discuss from './discuss.jsx';
import ReactVideo from 'react.video';

import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');


// THE PARENT COMPONENT -----------------------------------------------------------------------------------------------------
var Parent = React.createClass({
  render: function() {
    return ( 
      <div>
	      <Navbar />
        <Searchbox />
	      {this.props.children}
	      <Footer />
      </div>
    )
  }
})

// THIS IS WHERE WE WILL RENDER EVERYTHING-----------------------------------------------------------------------------------
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Parent}>
      <IndexRoute component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/asteroids' component={Asteroids} />
      <Route path='/mars' component={Mars} />
      <Route path='/live' component={LiveEarth} />
      <Route path='/sounds' component={Sounds} />
      <Route path='/discuss' component={Discuss} />
    </Route>
  </Router>,
  document.getElementById('root')
);








