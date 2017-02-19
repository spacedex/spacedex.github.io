	// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import Searchbox from './search.jsx'
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');

// NAVBAR COMPONENT ---------------------------------------------------------------------------------------------------------
var Navbar = React.createClass({
	
	// COMPONENT DID MOUNT
	openSearchBox() {
		
		$('.searchbar').click(function() {
			$('.searchbox').css({'height':'300px', 'transition':'.4s', 'background-color':'#1a1a1a', 'padding-top':'80px'})
			$('.searchtext').css({'display':'initial'})
		})

	},

	// OPEN NAVBAR
	openNavbar() {  

	       if ($(window).width() < 500 ) {

				$('#navnav').click(function() {
					$('#navnav').css({'height':'300px', 'transition':'.4s'})
					$('.navlist').css({'text-align':'left', 'transition':'.4s'})			
				})

	       }

	},

	// CLOSE NAVBAR 
	closenavbar() {
		$('.closenav').click(function() {
			$('#navnav').click(function() {
				$('#navnav').css({'height':'65px', 'transition':'.4s'})			
			})
		})
	},

	// THE RENDER FUNCTION
    render: function() {
    return (
      <div className="navbar navbar-fixed-top" id="navnav" onClick={this.openNavbar}>

   
        <div className="row">
		  <div className="col-md-3">
		  	<Link to="/"><h3 id="logo">SPACE-DEX</h3></Link>
		  	<span className="glyphicon glyphicon-menu-hamburger" id="ham"></span>
		  </div>

		  {
		  	// ------------------------THE NAVBAR COMPONENT------------------------
		  }
		  
		  <div className="col-md-9">    
			  <center>
		        <ul className="navlist">
		        	<li className="listitem"><Link to="/asteroids" className="links">ASTEROIDS</Link></li>
		        	<li className="listitem"><Link to="/mars" className="links">MARS</Link></li>
		        	<li className="listitem"><Link to="/live" className="links"><span id="spacespace">SPACE</span>STATION</Link></li>
		        	<li className="listitem"><Link to="/discuss" className="links">DISCUSS</Link></li>
		        	<h1 className="closenav" onClick={this.closenavbar}>X</h1>
		        </ul>
	          </center>
	          <input type="text" placeholder="Search here" className="searchbar" onClick={this.openSearchBox} />
	          <br />
	          <span className="glyphicon glyphicon-search" id="searchlogo"></span>
          </div>

		</div>

      </div>
    )
  }
})

// EXPORT THE NAVBAR COMPONENT ------------------------------------------------------------------------------------------------
export default Navbar;