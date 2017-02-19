// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');


// THE HOME COMPONENT -------------------------------------------------------------------------------------------------------
var Home = React.createClass({

	// GET THE INITIAL STATE
	getInitialState() {
		return ({pic: '', picTitle: '', picExplanation: ''})
	},

	// COMPONENT WILL MOUNT 
	componentWillMount() {
		return({placeHolder: null})			
	},

	// GET THE DAILY ASTRONOMY PIC
	componentDidMount(event) {
		
		var tthat = this;
		var picApi = '0VpXFz5QIP7qNCpCCatEfjMKVhIjc50aGD622Wti';

		$.ajax({
			url: 'https://api.nasa.gov/planetary/apod?api_key=' + picApi,
			success: function(data) {
				console.log(data)

				var picInfo = data.url;
				var picTitl = data.title;
				var picEx = data.explanation;
				tthat.setState({pic: picInfo, picTitle: picTitl, picExplanation: picEx})
			}
		})
		console.log('Pic State= ' + this.state.pic)	
	},

	// THE RENDER FUNCTION
	render: function() {
		return (
			<div>
				<div className="homediv">
					<div className="homedivbanner">
						<img src="https://static.pexels.com/photos/32237/pexels-photo.jpg" className="img-responsive" role="presentation" id="mainbanner"/>
					</div>	
						<br />
						<br />
						<br />
						<div id="spacepx">
						<center><h1><strong>NEVER BEFORE SEEN PICTURES <span id="neverbefore">FROM ALL THE MARS ROVERS</span></strong></h1></center>
						<br />
						<center><h2><em><span id="redtext">Search for Asteroids and join the crew <u>live</u> from the International Space Station!</span></em></h2></center>
						</div>
						<br />
						<br />
						<br />
						<br />
						<br />
						<center>
							<div className="row">
							  <div className="col-md-4" className="box" id="earth">
							  </div>
							  
							  <div className="col-md-4" className="box" id="sun">
							  </div>
							  
							  <div className="col-md-4" className="box" id="galaxy">
							  </div>
							</div>
						</center>
						<br />
				</div>

					{
						// ASTRONOMY PIC OF THE DAY
					}
					<div className="apod">
						<center><h1>Astronomy picture of the Day</h1></center>
						<hr id="apodhr" />
						<br />
						<center><h2><strong>{this.state.picTitle}</strong></h2></center>
						<br />
						<center><p id="explan">{this.state.picExplanation}</p></center>

					</div>
					
					<img src={this.state.pic} className="img-responsive" role="presentation" id="dailypic"/>


			</div>
		)
	}
})

// EXPORT THE HOME MODULE ------------------------------------------------------------------------------------------------------
export default Home;