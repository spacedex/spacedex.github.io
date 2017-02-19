// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');

// THE FOOTER COMPONENT -----------------------------------------------------------------------------------------------------
var Footer = React.createClass({
	render: function() {
		return (
				<div>	
					<div className="footer">
		              <center>
							<div className="row">
								  <div className="col-md-4">
								  	<h4 id="footerleft"></h4>
								  </div>


								  <div className="col-md-4">
								  	<h2 id="footercenter">SPACE-DEX</h2>
								  </div>
								  

								  <div className="col-md-4">
								  	<blockquote id="blockquote">
									  <p id="quote">Information is distinction. Distinction between things</p>
									  <footer>Leonard Susskind<cite title="Source Title"> -World Science Fair</cite></footer>
									</blockquote>
								  </div>
							</div>
					   </center>
					</div>
					
					<div className="creditdiv">
						<center><h4 id="parthj">Designed & developed by Parth J | Space-dex 2016 ©</h4></center>
					</div>
				</div>
		)
	}
})

export default Footer;