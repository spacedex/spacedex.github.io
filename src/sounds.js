// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');

// PLANET SOUNDS ---------------------------------------------------------------------------------------------------------------
var Sounds = React.createClass({


	// GET INITIAL STATE
	getInitialState() {
		return ({ sounds: {} })
	},

	// COMPONENT DID MOUNT
	componentDidMount() {
		var apiKey = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti';
		var thiss = this;

		// AJAX CALL
		var url = "https://api.nasa.gov/planetary/sounds?q=apollo&api_key=" + apiKey;
		console.log(url);
		fetch(url , {
			mode: 'no-cors',
			credentials: 'include'
		})
		.then(function (response) {
			
			console.log(response);
			
		})
		.then(function (result) {
			console.log("result:", result);
		})
		// $.ajax({
		// 	url: "http://api.nasa.gov/planetary/sounds?q=apollo&api_key=" + apiKey,
		// 	crossDomain: true,
		// 	success: function(data) {
		// 		var dataSounds = data;
		// 		thiss.setState({sounds: dataSounds})
		// 		console.log(thiss.state.sounds)
		// 	}
		// })
	},

	// THE RENDER FUNCTION
	render: function() {
		return (
			<div>
				<img src="http://www.nasa.gov/sites/default/files/thumbnails/image/jsc2016e096370.jpg" className="img-responsive" role="presentation" id="earthpic"/>
			
				<div className="soundsContent">

						<center><h1 id="head">PLANETARY SOUNDS</h1></center>

					<div className="hoverdiv">

						<center><img src="http://pluto.jhuapl.edu/Mission/Spacecraft/images/NewHorizonsSatelliteB.jpg" className="img-responsive" role="presentation" id="craft"/></center>
						
						<div className="funfactdiv">
							<br/>
							<center><h3><span id="ff">FUN FACT:</span><br/><br/>The <strong>Voyager 1 SpaceCraft</strong><br/>is the farthest Man-made object<br/>in the Universe</h3></center>

							<div className="detaildiv">
								
									<ul className="detaillist">
										<li><strong>Launched:</strong><span id="detdata">Sept. 5th, 1977</span></li>
										<li><strong>Max- speed:</strong><span id="detdata">38,610 MPH.</span></li>
										<li><strong>Cost:</strong><span id="detdata">250 Million USD</span></li>
										<li><strong>Current location:</strong><span id="detdata">Past Pluto</span></li>
									</ul>
								
							</div>
						</div>

					</div>


				</div>

				<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Veil_Nebula_-_NGC6960.jpg" className="img-responsive" role="presentation" id="galaxy"/>

				<div className="soundsdiv">
					
				</div>

			</div>
		)
	}
})

export default Sounds;