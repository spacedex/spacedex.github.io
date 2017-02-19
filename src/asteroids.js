// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
import ReactVideo from 'react.video';
var $ = require('jquery');
/* eslint-disable */

// THE ASTEROIDS COMPONENT -------------------------------------------------------------------------------------------------------
var Asteroids = React.createClass({
	// GET THE INITIAL STATE
	getInitialState() {
		return({source: [], asteroid: [], roverPics: [], thisAsteroidName: null, diameter: null, perSecond: null, info: '', astSpeed: null, missDist: null})		
	},

	// COMPONENT WILL MOUNT 
	componentWillMount() {
		return({placeHolder: null})			
	},

	// COMPONENT DID MOUNT 

	// THIS IS WHAT ACTUALLY LOADS THE INFORMATION ONTO THE PAGE
	componentDidMount(event) {
		 
		// MY API KEY
		var myApi = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti';
		var that = this;
		//console.log(this.state.asteroid)

		// FIRST AJAX CALL THAT WILL RETURN THE LIST/ ARRAY OF ASTEROIDS
		$.ajax({
			url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=' + myApi,
			success: function(data) {
				// console.log()
				// LOGS THIS SPECIFIC ARRAY (OUT OF THE 2 THAT WERE RETURNED) 
				//console.log(data.near_earth_objects['2015-09-07'][0].name)
				
				data.near_earth_objects['2015-09-07'].map(function(element, index) {
					return (that.setState({asteroid: that.state.asteroid.concat(element.name)}));
				})

				// STORES THAT ARRAY INTO THIS VARIABLE
				var asteroidListOne = data.near_earth_objects['2015-09-07'];
  
				// that.setState({asteroid: asteroidListOne})
				// console.log(that.state.asteroid)

				// that.setState(function(previousState, currentProps) {
    //       		return ({asteroid: previousState.asteroid.concat(asteroidListOne.concat(data.near_earth_objects['2015-09-07']))})
    //     		})
			}
		})

	}, //												 ______________
	// THE FUNCTION THAT WILL EXECUTE UPON -------------| BUTTON PRESS |-------------
	searchAsteriods() {// 								 ______________
		event.preventDefault();
		// MY API KEY
		var myApi = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti';
		var that = this;
		console.log(this.state.asteroid)

		// FIRST AJAX CALL THAT WILL RETURN THE LIST/ ARRAY OF ASTEROIDS
		$.ajax({
			url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=' + myApi,
			success: function(data) {
				console.log(data)
				// LOGS THIS SPECIFIC ARRAY (OUT OF THE 2 THAT WERE RETURNED) 
				console.log(data.near_earth_objects['2015-09-07'])
				
				// data.near_earth_objects['2015-09-07'].map(function(element, index) {

				// 	return (that.setState({asteroid: that.state.asteroid.concat(<li key={index}>{element.name}</li>)}))
				// })

				// STORES THAT ARRAY INTO THIS VARIABLE
				var asteroidListOne = data.near_earth_objects['2015-09-07'];

				// that.setState({asteroid: asteroidListOne})
				// console.log(that.state.asteroid)

				// that.setState(function(previousState, currentProps) {
    //       		return ({asteroid: previousState.asteroid.concat(asteroidListOne.concat(data.near_earth_objects['2015-09-07']))})
    //     		})
    			console.log(data.near_earth_objects['2015-09-07'][0].estimated_diameter.feet.estimated_diameter_max)
        
			}
		})
	   //									   __________________
	}, // ----------------------------------- | END BUTTON PRESS | -------------------------
	   //									   __________________
	// FUNCTIONALITY FOR THE DROPDOWN
	getAsteroidDetails(e){

		// THIS STORES WHAT EVER YOU SELECT ON IN THE DROPDOWN (NAME) INTO THIS VARIABLE
		var asteroidName = e.target.value;
		console.log(asteroidName) // THIS IS WHATEVER YOU SELECT ON FROM THE DROPDOWN
		
		// SET THE STATE OF THIS-ASTEROID-NAME TO WHATEVER WE SELECT(OUR VARIABLE)
		this.setState({thisAsteroidName: asteroidName});
		console.log(this.state.thisAsteroidName)

		// MY API KEY
		var myAapi = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti';
		var thaat = this;

		// AJAX CALL
		$.ajax({
			url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=' + myAapi,
			success: function(data) {

				if (asteroidName === '(2015 RG2)') {
					thaat.setState({thisAsteroidName: asteroidName});
					var astDiameter = data.near_earth_objects['2015-09-07'][0].estimated_diameter.feet.estimated_diameter_max
					var speedPerSec = data.near_earth_objects['2015-09-07'][0].close_approach_data[0].relative_velocity.kilometers_per_second
					var moreInfo = data.near_earth_objects['2015-09-07'][0].nasa_jpl_url
					var speed = data.near_earth_objects['2015-09-07'][0].close_approach_data[0].relative_velocity.miles_per_hour
					var distance = data.near_earth_objects['2015-09-07'][0].close_approach_data[0].miss_distance.miles
				} else if(asteroidName === '(2015 RL35)') {
					thaat.setState({thisAsteroidName: asteroidName});
					var astDiameter = data.near_earth_objects['2015-09-07'][1].estimated_diameter.feet.estimated_diameter_max
					var speedPerSec = data.near_earth_objects['2015-09-07'][1].close_approach_data[0].relative_velocity.kilometers_per_second
					var moreInfo = data.near_earth_objects['2015-09-07'][1].nasa_jpl_url
					var speed = data.near_earth_objects['2015-09-07'][1].close_approach_data[0].relative_velocity.miles_per_hour
					var distance = data.near_earth_objects['2015-09-07'][1].close_approach_data[0].miss_distance.miles
				} else if(asteroidName === '(2015 RX83)') {	
					thaat.setState({thisAsteroidName: asteroidName});
					var astDiameter = data.near_earth_objects['2015-09-07'][2].estimated_diameter.feet.estimated_diameter_max
					var speedPerSec = data.near_earth_objects['2015-09-07'][2].close_approach_data[0].relative_velocity.kilometers_per_second
					var moreInfo = data.near_earth_objects['2015-09-07'][2].nasa_jpl_url
					var speed = data.near_earth_objects['2015-09-07'][2].close_approach_data[0].relative_velocity.miles_per_hour
					var distance = data.near_earth_objects['2015-09-07'][2].close_approach_data[0].miss_distance.miles
				} else if(asteroidName === '(2015 RY83)') {
					thaat.setState({thisAsteroidName: asteroidName});
					var astDiameter = data.near_earth_objects['2015-09-07'][3].estimated_diameter.feet.estimated_diameter_max
					var speedPerSec = data.near_earth_objects['2015-09-07'][3].close_approach_data[0].relative_velocity.kilometers_per_second
					var moreInfo = data.near_earth_objects['2015-09-07'][3].nasa_jpl_url
					var speed = data.near_earth_objects['2015-09-07'][3].close_approach_data[0].relative_velocity.miles_per_hour
					var distance = data.near_earth_objects['2015-09-07'][3].close_approach_data[0].miss_distance.miles
				} else if(asteroidName === '(2016 RN41)') {
					thaat.setState({thisAsteroidName: asteroidName});
					var astDiameter = data.near_earth_objects['2015-09-07'][4].estimated_diameter.feet.estimated_diameter_max
					var speedPerSec = data.near_earth_objects['2015-09-07'][4].close_approach_data[0].relative_velocity.kilometers_per_second
					var moreInfo = data.near_earth_objects['2015-09-07'][4].nasa_jpl_url
					var speed = data.near_earth_objects['2015-09-07'][4].close_approach_data[0].relative_velocity.miles_per_hour
					var distance = data.near_earth_objects['2015-09-07'][4].close_approach_data[0].miss_distance.miles
				} else if(asteroidName === '440012 (2002 LE27)') {
					thaat.setState({thisAsteroidName: asteroidName});
					var astDiameter = data.near_earth_objects['2015-09-07'][5].estimated_diameter.feet.estimated_diameter_max
					var speedPerSec = data.near_earth_objects['2015-09-07'][5].close_approach_data[0].relative_velocity.kilometers_per_second
					var moreInfo = data.near_earth_objects['2015-09-07'][5].nasa_jpl_url
					var speed = data.near_earth_objects['2015-09-07'][5].close_approach_data[0].relative_velocity.miles_per_hour
					var distance = data.near_earth_objects['2015-09-07'][5].close_approach_data[0].miss_distance.miles
				} else if(asteroidName === '(2015 FC35)') {
					thaat.setState({thisAsteroidName: asteroidName});
					var astDiameter = data.near_earth_objects['2015-09-07'][6].estimated_diameter.feet.estimated_diameter_max
					var speedPerSec = data.near_earth_objects['2015-09-07'][6].close_approach_data[0].relative_velocity.kilometers_per_second
					var moreInfo = data.near_earth_objects['2015-09-07'][6].nasa_jpl_url
					var speed = data.near_earth_objects['2015-09-07'][6].close_approach_data[0].relative_velocity.miles_per_hour
					var distance = data.near_earth_objects['2015-09-07'][6].close_approach_data[0].miss_distance.miles
				} else if(asteroidName === '(2015 RH36)') {
					thaat.setState({thisAsteroidName: asteroidName});
					var astDiameter = data.near_earth_objects['2015-09-07'][7].estimated_diameter.feet.estimated_diameter_max
					var speedPerSec = data.near_earth_objects['2015-09-07'][7].close_approach_data[0].relative_velocity.kilometers_per_second
					var moreInfo = data.near_earth_objects['2015-09-07'][7].nasa_jpl_url
					var speed = data.near_earth_objects['2015-09-07'][7].close_approach_data[0].relative_velocity.miles_per_hour
					var distance = data.near_earth_objects['2015-09-07'][7].close_approach_data[0].miss_distance.miles
				} else if(asteroidName === '(2016 RU33)') {
					thaat.setState({thisAsteroidName: asteroidName});
					var astDiameter = data.near_earth_objects['2015-09-07'][8].estimated_diameter.feet.estimated_diameter_max
					var speedPerSec = data.near_earth_objects['2015-09-07'][8].close_approach_data[0].relative_velocity.kilometers_per_second
					var moreInfo = data.near_earth_objects['2015-09-07'][8].nasa_jpl_url
					var speed = data.near_earth_objects['2015-09-07'][8].close_approach_data[0].relative_velocity.miles_per_hour
					var distance = data.near_earth_objects['2015-09-07'][8].close_approach_data[0].miss_distance.miles
				}

    			thaat.setState({diameter: astDiameter, perSecond: speedPerSec, info: moreInfo, astSpeed: speed, missDist: distance})
    			console.log("State of Haz: " + thaat.state.haz)
        
			}
		})
				// console.log("State of Haz: " + this.state.haz)


	},


	// THE RENDER FUNCTION
	render: function() {
		return (
		<div>

			<div className="astBanner">

				<center><p id="neo"><span className="neotag">Near-Earth Asteroids look up</span></p></center>
				<center><hr id="searchasthr" /></center>
				<center><h1><span className="glyphicon glyphicon-menu-down" id="spanarrow"></span></h1></center>
			</div>

			<div className="homediv">			
				<div className="planetsdiv">
					<center><h1>Search for Asteroids</h1></center>
					
					<center>

					{
						// THIS IS THE ACTUAL DROPDOWN MENU THAT IS CREATED 
					}
						<select className="asteroidMenu" onChange={this.getAsteroidDetails}>	
							{
								this.state.asteroid.map(function(name, i) {

									return(<option key={i} value={name}  className="aslist">{name}</option>)
								})						
							}
						</select>

					{
						// THIS IS THE HTML TABLE WHERE ALL THE INFORMATION WILL RENDER DEPENDING ON WHICH ONE YOU CLICK
					}

						<center>
							<div className="asteroidInfo">
								<h2>Info</h2>

								<table id="infoTable">
									<tbody>
										<tr>
											<th id="heading">Name</th>
											<th id="heading">Diameter</th>
											<th id="heading">Speed per-Second</th>
											<th id="heading" className="fall">Distance from Earth</th>
											<th id="heading" className="fall">Velocity/ Speed</th>
											<th id="heading" className="fall">More info</th>
										</tr>

										<tr>
											<td id="data">{this.state.thisAsteroidName}</td>
											<td id="data">{Math.ceil(this.state.diameter) + ' Feet'}</td>
											<td id="data">{Math.ceil(this.state.perSecond) + ' KiloMeters'}</td> 
											<td id="data" className="fall">{Math.ceil(this.state.missDist) + ' Miles'}</td>
											<td id="data" className="fall">{Math.ceil(this.state.astSpeed) + ' MPH'}</td>
											<td id="data" className="fall"><a href={this.state.info} target="_blank">Link</a></td>
										</tr>
									</tbody>
								</table>

					<center><button id="searchast" onClick={this.searchAsteriods}>DevTools</button></center>


							</div>
						</center>

					</center>
				</div>

			</div>
		  <img src="http://twitrheaders.com/wp-content/uploads/2014/05/Earth-from-space.jpg" className="img-responsive" role="presentation"/>
		
		  <div className="infoDiv">
		  	<center><h1 id="whatareast">What are Asteroids?</h1></center>
		  	<hr id="datahr" />
			  	<center>
			  		<div className="row">
					  	<div className="container">
						  <div className="col-md-6" id="leftboxdata">
						  	<h4 id="astdes">
						  		Asteroids are rocky, airless worlds that orbit our sun, but are too small to be called planets. 
						  		Tens of thousands of these minor planets are gathered in the main asteroid belt, a vast doughnut-shaped
						  		ring between the orbits of Mars and Jupiter. Asteroids that pass close to Earth are called near-earth objects.
						  	</h4>
						  	<img src="http://i.dailymail.co.uk/i/pix/2011/07/25/article-2018477-0D208ED300000578-337_634x598.jpg" className="img-responsive" role="presentation" id="asteroidpicone"/>
						  	<p><em><a href="http://www.dailymail.co.uk/ushome/index.html" target="_blank">Photo Credit- DailyMail.Co.UK</a></em></p>
						  </div>

						  <div className="col-md-6" id="rightboxdata">
						  	<h4 id="astdes">
						  		Space is a rocky place. The biggest space rocks are asteroids. Asteroids are made up of rock and
						  		iron like the four planets closest to our sun, but they are much smaller. All the asteroids put 
						  		together would be smaller than our moon. Asteroids are different from comets, which are mostly rock 
						  		and ice. Comets have tails. Asteroids are more like planets and moons. Scientists often call asteroids 
						  		minor planets. Some asteroids even have moons. When the Galileo spacecraft flew past asteroid 'Ida' 
						  		in 1993, scientists were surprised to find it had a little buddy. They named the tiny moon Dactyl.
								Most asteroids orbit the sun between Mars and Jupiter. This area is called the asteroid belt.
								There are millions of asteroids -- and one dwarf planet, Ceres. Ceres was the first object discovered
							    in the asteroid belt. It was found in the course of careful position measurements of stars, one of 
							    which turned out to be moving slowly instead of being fixed in the sky like the other stars. Ceres is 
							    about 600 miles (960 km) across. This is smaller than our moon, which is 2,159 miles (3,475 km) around. 
							    But it is still big enough for its gravity to pull it into a spherical shape so that if fits 
							    the definition of a dwarf planet.
						  	</h4>
						  	<blockquote>
							  <p><em><a href="http://solarsystem.nasa.gov/planets/asteroids/basic" target="_blank">Solarsystem.NASA.Gov</a></em></p>
							</blockquote>
						  </div>
						</div>
					</div>
			  	</center>
		  </div>

		  {
		  	// ASTERANK 3D INTERACTIVE IFRAME
		  }

		  <div className="redbanner">
		  	<p>Asterank 3D Asteroid map</p>
		  	<hr id="asthr" />
		  </div>

		  <iframe src="http://www.asterank.com/3d/" className="asterank">
		  </iframe>

		</div>
		)
	}
})

export default Asteroids;