// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');


// LIVE EARTH ---------------------------------------------------------------------------------------------------------------
var LiveEarth = React.createClass({

	// GET THE INITIAL STATE
	getInitialState() {
		return({lat: '', long: '', astOne: '', astTwo: '', astThree: '', astFour: '', astFive: '', astSix: ''})
	},

	// WHERE IS THE SPACE STATION RIGHT NOW?
	componentDidMount() {

		// WHO ARE THE CURRENT ASTRONAUTS IN SPACE?
		var whothat = this;

		$.ajax({
			url: 'http://api.open-notify.org/astros.json',
			success: function(whodata) {
				// console.log(whodata)
				var sergey = whodata.people[0].name;
				var andrey = whodata.people[1].name;
				var shane = whodata.people[2].name;
				var oleg = whodata.people[3].name;
				var thomas = whodata.people[4].name;
				var peggy = whodata.people[5].name;

				whothat.setState({astOne: sergey, astTwo: andrey, astThree: shane, astFour: oleg, astFive: thomas, astSix: peggy})


			}
		})


		var that = this;

		$.ajax({
			url: 'http://api.open-notify.org/iss-now.json',
			success: function(stationdata) {

				// SET THE LATITUDE AND LONGITUDE OF THE SPACE STATION INTO VARIABLES
				var latitude = stationdata.iss_position.latitude;
				var longitude = stationdata.iss_position.longitude;

				// LOG IT JUST TO DOUBLE CHECK
				console.log(latitude, longitude)

				// SET THE STATE APPROPRIATELY
				that.setState({lat: latitude, long: longitude})
			}	

		})

		var mymap = L.map('mapid').setView([this.state.lat, this.state.long], 13);
		// new Map(options: Object)
		L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFydGhqaGF2ZXJpIiwiYSI6ImNpeGNxNWN6azAwYXMyeWxmb2kzZHFuaHUifQ.IEhU6FLL_DdjRAQ1VD_PSA', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		    maxZoom: 30,
		    accessToken: 'pk.eyJ1IjoicGFydGhqaGF2ZXJpIiwiYSI6ImNpeGNxNWN6azAwYXMyeWxmb2kzZHFuaHUifQ.IEhU6FLL_DdjRAQ1VD_PSA'
		}).addTo(mymap);

		// map.addControl(new mapboxgl.GeolocateControl({
		//     positionOptions: {
		//         enableHighAccuracy: true
		//     }
		// }));

		// var nav = new mapboxgl.NavigationControl();
		// map.addControl(nav, 'top-left');

		// var map = new mapboxgl.Map({
		//     container: 'map', // container id
		//     style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
		//     center: [this.state.lat, this.state.long], // starting position
		//     zoom: 3 // starting zoom
		// });

	 
	var track = (function moveISS () {
	    $.getJSON('http://api.open-notify.org/iss-now.json?', function(data) {
	        var lat = data['iss_position']['latitude'];
	        var lon = data['iss_position']['longitude'];

	        // See leaflet docs for setting up icons and map layers
	        // The update to the map is done here:
	        iss.setLatLng([lat, lon]);
	        isscirc.setLatLng([lat, lon]);
	        map.panTo([lat, lon], animate=true);
	    });
	    setTimeout(moveISS, 5000); 
	})

	console.log(track)

	},

	// THE RENDER FUNCTION
	render: function() {
		return (
			<div>

				<div className="liveheader">
					<center><p id="liveheadtext"><strong><span id="headerwrap">International Space Station</span></strong></p></center>
					<center><h1 id="liveheading">The Earth- Live from the International Space Station</h1></center>
					<center><h1><span className="glyphicon glyphicon-chevron-down" id="arrow"></span></h1></center>
				</div>
				
				{
					// WHERE IS THE INTERNATIONAL SPACE STATION RIGHT NOW?-----------------------------
				}

				<div className="info">
					<center><h1>Where is the Space Station right now?</h1></center>
					
					<center>
						<div className="row">

						  <div className="col-md-6">
						  		
						  		{
						  			// THIS IS WHERE THE MAP WILL BE
						  		}

						  		{
						  		 // <div id="mapid">
						  		 // 	{
						  		 // 		this.track
						  		 // 	}
						  		 // </div>
						  		}

						  		<div className="framewrapper">
						  			<iframe src="http://open-notify.org/Open-Notify-API/" className="trackframe"></iframe>
						  		</div>

						  </div>

						  <div className="col-md-6">
						  		
						  		<center>
						  			<table className="latlongtable">
						  				<tbody className="tablebody">

										  <tr className="tablerows">
										    <th className="tablehead">Latitude</th>
										    <th className="tablehead">Longitude</th> 
										  </tr>
										
										  <tr className="tablerows">
										    <td className="tabledata">{this.state.lat}</td>
										    <td className="tabledata">{this.state.long}</td> 
										  </tr>

									  </tbody>
									</table>
						  		</center>
						  		
						  		<br />

						  		<p className="sstext">
						  			The table above in conjuction with the Map
						  			are current trajectories of where the International Space Station is 
						  			above us in orbit. <p><u><em>(<strong>Credit</strong>- <a href="http://open-notify.org/Open-Notify-API/" target="_blank">Open Notify</a>)</em></u></p>
						  		</p>
						  </div>

						</div>
					</center>



				</div>

				{
					// WHAT IS THE INTERNATIONAL SPACE STATION?---------------------------------------------
				}

				<div className="whosupthere">
					<center><h1><strong>Who's up there?</strong></h1></center>

					<center>
						<div className="row">

						  <div className="col-md-6" id="currentlyleft">
						  	<p id="currentlytext">
						  		Currently, there are a total of <span id="six"><strong>6</strong></span> Astronauts up in
						  		the International Space Station- from varying Space Agencies around the World.
						  	</p>
						  </div>
						  
						  <div className="col-md-6" id="currentlyright">
						  	<center>
						  		<ul className="astlist">
						  			<a href="https://www.nasa.gov/mission_pages/station/expeditions/expedition50/index.html" target="_blank"><li><span className="astname">{this.state.astOne}</span></li></a>
						  			<a href="https://www.nasa.gov/mission_pages/station/expeditions/expedition50/index.html" target="_blank"><li><span className="astname">{this.state.astTwo}</span></li></a>
						  			<a href="https://www.nasa.gov/mission_pages/station/expeditions/expedition50/index.html" target="_blank"><li><span className="astname">{this.state.astThree}</span></li></a>
						  			<a href="https://www.nasa.gov/mission_pages/station/expeditions/expedition50/index.html" target="_blank"><li><span className="astname">{this.state.astFour}</span></li></a>
						  			<a href="https://www.nasa.gov/mission_pages/station/expeditions/expedition50/index.html" target="_blank"><li><span className="astname">{this.state.astFive}</span></li></a>
						  			<a href="https://www.nasa.gov/mission_pages/station/expeditions/expedition50/index.html" target="_blank"><li><span className="astname">{this.state.astSix}</span></li></a>
						  		</ul>
						  	</center>
						  </div>

						</div>
					</center>

				</div>

				<div className="imagediv">
					<center><img src="https://static.pexels.com/photos/23870/pexels-photo.jpg" className="img-responsive" role="presentation" /></center>
				</div>

				<div className="whatisit">
					<div className="container">
						<center><h1>Okay, but what <strong>really</strong> is the International Space Station all about?</h1></center>
						<center><h4><em>Source: <a href="https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-the-iss-k4.html" target="_blank">NASA</a></em></h4></center>
						<center>
						<hr id="whatishr" />
							<p id="whatisitone">
								<em>(This article is part of the NASA Knows! (Grades K-4) series.)</em> The International Space Station is a large spacecraft. 
								It orbits around Earth.<br /> It is a home where astronauts live. The space station is also a science lab. Many countries 
								worked together to build it. They also work together to use it. The space station is made of many pieces. The 
								pieces were put together in space by astronauts. The space station's orbit is about 220 miles above Earth. NASA 
								uses the station to learn about living and working in space. These lessons will help NASA explore space.
							</p>

							<center>
								<div className="row">

								  <div className="col-md-6" id="leftwhatis">
								 
								  <strong><h3>How Old Is the Space Station?</h3></strong>
								  <hr id="whatishr" />
								  <p className="whatispara">
								  	The first piece of the International Space Station was launched in 1998. A Russian rocket launched that piece. 
								  	After that, more pieces were added. Two years later, the station was ready for people. The first crew arrived 
								  	on November 2, 2000. People have lived on the space station ever since. Over time more pieces have been added. 
								  	NASA and its partners around the world finished the space station in 2011.
 								  </p>

								  <strong><h3>What Are the Parts of the Space Station?</h3></strong>
								  <hr id="whatishr" />
								  <p className="whatispara">
								  	The space station has many parts. The parts are called modules. The first modules had parts needed to make the 
								  	space station work. Astronauts also lived in those modules. Modules called "nodes" connect parts of the station 
								  	to each other. Labs on the space station let astronauts do research. On the sides of the space station are 
								  	solar arrays. These arrays collect energy from the sun. They turn sunlight into electricity. Robot arms are 
								  	attached outside. The robot arms helped to build the space station. They also can move astronauts around 
								  	outside and control science experiments. Airlocks on the space station are like doors. Astronauts use them to 
								  	go outside on spacewalks. Docking ports are like doors, too. The ports allow visiting spacecraft to connect 
								  	to the space station. New crews and visitors enter the station through the docking ports. Astronauts fly to 
								  	the space station on the Russian Soyuz. The crew members use the ports to move supplies onto the station.
 								  </p> 	

								  </div>

								  <div className="col-md-6" id="rightwhatis">

								  <strong><h3>How Big Is the Space Station?</h3></strong>
								  <hr id="whatishr" />
								  <p className="whatispara">
								  	The space station is as big inside as a house with five bedrooms. It has two bathrooms, a gymnasium and a big 
								  	bay window. Six people are able to live there. It weighs almost a million pounds. It is big enough to cover a 
								  	football field including the end zones. It has science labs from the United States, Russia, Japan and Europe.
 								  </p>

								  <strong><h3 id="whyisimportant">Why Is the Space Station Important?</h3></strong>
								  <hr id="whatishr" />
								  <p className="whatispara">
									The space station is a home in orbit. People have lived in space every day since the year 2000. The space 
									station's labs are where crew members do research. This research could not be done on Earth. Scientists study 
									what happens to people when they live in space. NASA has learned how to keep a spacecraft working for a long 
									time. These lessons will be important in the future. NASA has a plan to send humans deeper into space than ever 
									before. The space station is one of the first steps. NASA will use lessons from the space station to get 
									astronauts ready for the journey ahead.
 								  </p> 
 								  <br />
 								  <blockquote>
 								  	<h4>Info source: <a href="https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-the-iss-k4.html" target="_blank">NASA</a></h4>
 								  </blockquote>

								  </div>

								</div>
							</center>

						</center>
					</div>
				</div>

				

			</div>
		)
	}
})

// EXPORT THE LIVE EARTH MODULE ----------------------------------------------------------------------------------------------
export default LiveEarth;