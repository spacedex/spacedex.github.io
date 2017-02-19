// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');


// THE HOME COMPONENT -------------------------------------------------------------------------------------------------------
var Searchbox = React.createClass({
	// CLOSE BOX
	closeSearchBox() {
		
		$('.searchbox').click(function() {
			$('.searchbox').css({'display':'none', 'transition':'.4s'})
			$('.searchtext').css({'display':'none', 'transition':'.4s'})
		})

	},

	// THE RENDER FUNCTION
	render: function() {
		return (
			<div className="searchbox" onClick={this.closeSearchBox}>
				<div className="searchtext">
					<center><h2 id="search">What would you like to search for?</h2></center>
					<br />
					<center><input type="text" placeholder="Search..." className="searchboxsearch"/></center>
				</div>
			</div>
		)
	}
})

// EXPORT THE HOME MODULE ------------------------------------------------------------------------------------------------------
export default Searchbox;