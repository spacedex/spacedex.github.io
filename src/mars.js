// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');


// THE MARS COMPONENT -------------------------------------------------------------------------------------------------------
var Mars = React.createClass({

	// GET INITIAL STATE
	getInitialState() {
		return({roverPics: [], spirit: [], opportunity: [], carbon: ''})
	},

	// COMPONENT WILL MOUNT 
	componentWillMount() {
		return({placeHolder: null})			
	},
	
	// COMPONENT DID MOUNT
	componentDidMount() {

		//---------------------------------------------------------+
		// FIRST AJAX CALL TO GET PICS FROM THE CURIOSITY ROVER ---+
		//---------------------------------------------------------+

		var myApi = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti'; // MY API KEY
		var that = this;

		$.ajax({
			url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=375&page=1&api_key=" + myApi,
			success: function(data) {

				// THIS LOGS THE ENTIRE DATA OBJECT THAT WE WE GETTING BACK
				console.log(data)

				// THIS LOGS THE EXACT PICTURE FROM THAT DATA OBJECT THAT WE WANT
				// console.log(data.photos[0].img_src)	
				// console.log(data.photos[1].img_src)	

				// STORE THE FIRST PIC OF THE FIRST ELEMENT 
				//const picOne = data.photos[0].img_src

				// SET THE STATE OF THE ROVER PICS ARRAY
				data.photos.map(function(element, index) {
					return (that.setState({roverPics: [...that.state.roverPics, element.img_src]}))
           			
				})

			}
		    // console.log(this.state.roverPics)
		})

		//---------------------------------------------------------+
		// AJAX CALL #2 TO GET PICS FROM THE SPIRIT ROVER ---------+
		//---------------------------------------------------------+

		// API KEY
		var myApiKey = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti';
		var thatt = this;

		// THE AJAX CALL 
		$.ajax({
			url: "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=110&camera=rhaz&api_key=" + myApiKey,
			success: function(myData) {
				console.log(myData)

				// SET THE STATE OF THE SPIRIT ARRAY
				myData.photos.map(function(elem, ind) {
				return (thatt.setState({spirit: [...that.state.spirit, elem.img_src]}))
			})
		  }
		})

		//---------------------------------------------------------+
		// AJAX CALL #3 TO GET PICS FROM THE OPPORTUNITY ROVER ----+
		//---------------------------------------------------------+

		// API KEY
		var myApk = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti';
		var thattt = this;

		// THE AJAX CALL 
		$.ajax({
			url: "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100?&camera=navcam&api_key=" + myApk,
			success: function(myData) {
				console.log(myData)

				// SET THE STATE OF THE OPPORTUNITY ARRAY
				myData.photos.map(function(e, i) {
				return (thattt.setState({opportunity: [...that.state.opportunity, e.img_src]}))
			})
		  }
		})

		//---------------------------------------------------------+
		// AJAX CALL #4 TO GET CARBON REMOVAL INFO ----------------+
		//---------------------------------------------------------+

		// API KEY
		var apiapi = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti';
		var thatthat = this;

		// AJAX CALL TO GET CARBON DATA
		$.ajax({
			url: 'http://data.nasa.gov/api/views/ivi4-5j5y',
			success: function(carbonData) {
				console.log(carbonData)

				var carbonDescription = carbonData.description
				// SET THE STATE OF CARBON DESCRIPTION
				thatthat.setState({carbon: carbonDescription})
			}
		})

		//---------------------------------------------------------+
		// AJAX CALL #4 TO GET MARS WEATHER INFO ------------------+
		//---------------------------------------------------------+
		
		var parthApi = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti';
		var thet = this;

		$.ajax({
			url: 'http://marsweather.ingenology.com/v1/',
			success: function(weathData) {
				console.log(weathData)
			}
		})

	},

	// THE RENDER FUNCTION
	render: function() {
		return (
			<div>

			<div className="marsMainDiv">

			<div className="buffer">
			</div>

			<div className="overlaydiv">
				<center><h1 id="titlemars">Mars Rover pictures</h1></center>
				<center><h2 id="rovers"><span className="yellowhighlight">Spirit, Curiosity & Opportunity</span></h2></center>
				<center><h1><span className="glyphicon glyphicon-chevron-down" id="arrow"></span></h1></center>
			</div>

			<div className="marspicdiv">

			</div>


			<div className="marsintrotext">

			<center><h2>Rover summary (NASA)</h2></center>
			<hr className="blockheadinghr" />
			<br />
				<center>
					<div className="row">
					  
					  <div className="col-md-4" id="textdivone">
					  <img src="https://spaceprob.es/resources/img/silhouette/curiosity.svg" className="img-responsive" role="presentation" id="roundrover"/>
					  	<p className="marstext">
						  	NASA's twin robot geologists, the Mars Exploration Rovers, launched toward Mars on 
						  	June 10 and July 7, 2003, in search of answers about the history of water on Mars. 
						  	They landed on Mars January 3 and January 24 PST, 2004 (January 4 and January 25 UTC, 2004).
							The Mars Exploration Rover mission is part of NASA's Mars Exploration Program, a long-term 
							effort of robotic exploration of the red planet. Primary among the mission's 
							scientific goals is to search for and characterize a wide range of rocks and soils 
							that hold clues to past water activity on Mars.<br /><br />The spacecraft are targeted to sites 
							on opposite sides of Mars that appear to have been affected by liquid water in the past. 
							The landing sites are at Gusev Crater, a possible former lake in a giant impact crater, and 
							Meridiani Planum, where mineral deposits (hematite) suggest Mars had a wet past.
							After the airbag-protected landing craft settled onto the surface and opened, the rovers 
							rolled out to take panoramic images. These images give scientists the information they 
							need to select promising geological targets that tell part of the story of water in Mars' 
							past. Then, the rovers drive to those locations to perform on-site scientific investigations.
					 	</p>
					 </div>

					  <div className="col-md-4" id="textdivtwo">
					  	<p className="marstext">
					  		
					  		<h3>These are the primary science instruments carried by the rovers:</h3>

					  		<br />
					  		<ul className="marsul">
					  			
					  			<li>
					  				<strong><span className="marstextspan">Panoramic Camera (Pancam):</span></strong>
					  				<br />
					  				For determining the mineralogy, texture, 
					  				and structure of the local terrain.
					  			</li>
					  			<br />
					  			<li>
					  				<strong><span className="marstextspan">Miniature Thermal Emission Spectrometer (Mini-TES):</span></strong>
					  				<br />
					  				For identifying promising rocks and soils for closer examination and for 
					  				determining the processes that formed Martian rocks. The instrument is 
					  				designed to look skyward to provide temperature profiles of the Martian 
					  				atmosphere.
					  			</li>
					  			<br />
					  			<li>
					  				<strong><span className="marstextspan">Mössbauer Spectrometer (MB):</span></strong> 
					  				<br />
					  				For close-up investigations of the 
					  				mineralogy of iron-bearing rocks and soils.
					  			</li>
					  			<br />
					  			<li>
					  				<strong><span className="marstextspan">Alpha Particle X-Ray Spectrometer (APXS):</span></strong>
					  				<br />
					  				For close-up analysis of the abundances of elements that make up rocks and soils.
					  			</li>
					  			<br />
					  			<li>
					  				<strong><span className="marstextspan">Magnets:</span></strong>
					  				<br />
					  				For collecting magnetic dust particles. The Mössbauer Spectrometer and the Alpha Particle X-ray Spectrometer are 
					  				designed to analyze the particles collected and help determine the ratio of 
					  				magnetic particles to non-magnetic particles. They can also analyze the 
					  				composition of magnetic minerals in airborne dust and rocks that have been 
					  				ground by the Rock Abrasion Tool.
					  			</li>
					  			<br />
					  			<li>
					  				<strong><span className="marstextspan">Microscopic Imager (MI):</span></strong>
					  				<br />
					  				For obtaining close-up, high-resolution 
					  				images of rocks and soils.
					  			</li>
					  			<br />
					  			<li>
					  				<strong><span className="marstextspan">Rock Abrasion Tool (RAT):</span></strong>
					  				<br />
					  				For removing dusty and weathered rock 
					  				surfaces and exposing fresh material for examination by instruments onboard.
					  			</li>
					  		</ul>
					  	</p>
					  </div>
					  
					  <div className="col-md-4" id="textdivthree">
					  	<p className="marstext">
					  		Before landing, the goal for each rover was to drive up to 40 meters 
					  		(about 44 yards) in a single day, for a total of up to one 1 kilometer 
					  		(about three-quarters of a mile). Both goals have been far exceeded! Where are 
					  		the rovers now? Moving from place to place, the rovers perform on-site geological 
					  		investigations. Each rover is sort of the mechanical equivalent of a geologist 
					  		walking the surface of Mars. The mast-mounted cameras are mounted 1.5 meters(5 feet) 
					  		high and provide 360-degree, stereoscopic, humanlike views of the terrain.<br /><br /> The robotic 
					  		arm is capable of movement in much the same way as a human arm with an elbow and wrist, 
					  		and can place instruments directly up against rock and soil targets of interest. In the 
					  		mechanical "fist" of the arm is a microscopic camera that serves the same purpose as a 
					  		geologist's handheld magnifying lens. The Rock Abrasion Tool serves the purpose of a 
					  		geologist's rock hammer to expose the insides of rocks.
					  	</p>
					  	<hr className="blockhr" />
					  	<blockquote className="block"> 
						  <h4><a href="http://mars.nasa.gov/mer/overview/" target="_blank">Courtesy of NASA</a></h4>
						</blockquote>


						<center><img src="http://seeklogo.com/images/N/NASA-logo-9411797223-seeklogo.com.gif" className="img-responsive" role="presentation" id="nasaLogo"/></center>

						<center><img src="http://eu-project-apex.com/JPL_logo.gif" className="img-responsive" role="presentation" id="jplLogo"/></center>


					  </div>

					</div>
				</center>
			</div>


				<div className="container">
					<h1 id="marstitle">Mars Rover Photos</h1>
					<hr id="marshr" />
				<center>	
					<div className="row" id="rowDiv">
					  
					  <div className="col-md-6">
					  	<img src="https://s-media-cache-ak0.pinimg.com/564x/a7/10/86/a710868c93604dae5e7d0862cbc566cc.jpg" className="img-responsive" role="presentation" id="rover"/>
					  </div>
					  
					  <div className="col-md-6" id="picsDiv">
					  
					  	<ul className="picsul">

					  	</ul>
					  
					  </div>


					</div>
				</center>

				</div>

				<div className="swiperight">
					<center><h1><span id="curi"><strong>Curiosity</strong></span>Scroll Right to see more pictures<span className="glyphicon glyphicon-chevron-right"></span></h1></center>
				</div>

				<div className="ajaxpics">
					<div className="container">
						<div className="picsbox">
							<center>
								<table className="ajaxpictures">
								    <tbody>
										<tr className="ajaxtr">
												{
													this.state.roverPics.map(function(name, i) {
														return(<td key={i} className="ajaxtabledata"><img src={name} height='100%' width='100%' id="marspic" role="presentation"/></td>)
													})	
												}
										</tr>
								    </tbody>
								</table>
							</center>
						</div>
					</div>
				</div>

				<div className="spiritopp">
					<center>

						<div className="spiritbox">
							<center><h1>Spirit</h1></center>
						</div>

						<div className="oppbox">
							<center><h1>Opportunity</h1></center>
						</div>

					</center>

					<center>
						<div className="row" id="spiritoppcontainer">
						  <center>

							  <div id="spirit" className="col-md-6">
								  	<ul>
								  		{
											this.state.spirit.map(function(nam, idx) {
												return(<li key={idx}><img src={nam} height='100%' width='100%' role="presentation"/></li>)
											})	
										}
								  	</ul>	
							  </div>
							  
							  <div id="opp" className="col-md-6">
							  		<ul>
								  		{
											this.state.opportunity.map(function(n, i) {
												return(<li key={i}><img src={n} height='100%' width='100%' role="presentation"/></li>)
											})	
										}
								  	</ul>	
							  </div>

						  </center>
						</div>
					</center>
				</div>

			</div>


				<div className="carbonRemovalDiv">
					<div className="container">

						<center><h1>CO2 Removal from Mars EMU Project</h1></center>

						<div className="row">

						  <div className="col-md-6" id="carbonleft">
								<br />
								<p>{this.state.carbon}</p>
								<blockquote>
								<a href="https://data.nasa.gov/external-dataset?datasetId=ivi4-5j5y" target="_blank">NASA Link <em>-Derived from API endpoint</em></a>
							</blockquote>
						  </div>
						 
						  <div className="col-md-6" id="carbonright">
						  		<center><img src="http://sciencenordic.com/sites/default/files/imagecache/620x/nasa-mars-2020-rover-instrument-selection-pia18405-br2.jpg.crop_display.jpg" className="img-responsive" role="presentation" id="moxie"/></center>
						  		<br />
						  		<p><em>NASA's Mars 2020 rover mission will carry an innovative instrument called MOXIE aimed at 
						  		demonstration the potential of resource utilization on the Red Planet. MOXIE ( Mars Oxygen ISRU Experiment) is designed to 
						  		create oxygen using Mars' native carbon dioxide.<br />(Credit- NASA)</em></p>
						  </div>

						</div>

					</div>
				</div>

		</div>
		)
	}
})


export default Mars;