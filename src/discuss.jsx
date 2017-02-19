	// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import Searchbox from './search.jsx'
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');


var Discuss = React.createClass({

	// GET THE INITIAL STATE
	getInitialState() {
		return({author: '', email: '', indpost: '', posts: [], confirmation: 'Thank you for your submission!'})
	},

	// COMPONENT DID MOUNT TO LOAD THE EXISTING POSTS FROM THE DATABASE
	componentDidMount() {

		// API CALL TO GET THE POSTS FROM THE DATABASE
	    $.ajax({
	      url: '/discuss?',
	      type: 'GET'
	    })
	    .done((data) => {
	      console.log('ajax data from PostsList',data)
	      this.setState({posts: data});
	    })
	},

	//-------------- THIS CREATES A NEW POST ---------------

	// HANDLE CHANGE
	 handleChange(input) {
	    this.setState({author: input.target.value})

	    // STORE THE AUTHOR IN VARIABLE	
	    var authorName = this.state.author;

	    // SET THE STATE
	    this.setState({author: input.target.value})

	  },

	// HANDLE CHANGE FOR EMAIL
	handleChangeEmail(e) {
		
		this.setState({email: e.target.value})

		// STORE THE EMAIL IN VARIABLE
		var emailAddress = this.state.email;

		this.setState({email: e.target.value})
	},

	// HANDLE CHANGE FOR POST
	handleChangePost(event) {
		
		this.setState({indpost: event.target.value})

		// STORE THE INDIVIDUAL POST IN VARIABLE
		var individualPost = this.state.indpost;

		this.setState({indpost: event.target.value})
	},


	// SUBMIT A NEW POST
	  newPost() {
	    $.ajax({
	      url: '/discuss',
	      type: 'POST',
	      data: {
	        author: this.state.author,
	        email: this.state.email,
	        post: this.state.indpost
	      }
	    })

	  },

	// THE RENDER FUNCTION
	render: function() {
		return (
			<div>
				<div className="rocket">
					<img src="https://static.pexels.com/photos/2159/flight-sky-earth-space.jpg" className="img-responsive" role="presentation"/>
				</div>

				<div className="discussdiv">	
					<div className="container">
						<center><h1 id="join">Join the discussion!</h1></center>

						<center><span className="glyphicon glyphicon-menu-down" id="downarrow"></span></center>

						<div className="row">

						  <div className="col-md-6" id="discussLeft">
						  	
						  	<form className="formform">
						  		<input type="text" placeholder="Enter your name..." className="nameinput" onChange={this.handleChange}/>
						  		
						  		<input type="text" placeholder="E-Mail address" className="emailinput" onChange={this.handleChangeEmail}/>	
						  	
						  		<h4><strong>Comment:</strong></h4>
						  		<textarea type="text" onChange={this.handleChangePost} id="entercomment" className="expanding"/>

						  		<button className="submitbutton" onClick={this.newPost}>Submit</button>
						  	</form>
						  	<br />
						  	<h2 className="subcon"><em>{this.state.confirmation}</em></h2>

						  </div>

						  <div className="col-md-6" id="discussRight">
						  	<div id="discussRightbox">

						  		{
						  			// SAMPLE POST ----------------------
						  		}

						  		<div className="postdiv">
							  		<h3><strong>Under Construction</strong></h3>
							  		<h5><em>Under@Construction.com</em></h5>
							  		<hr id="namehr" />
							  		<h4>This is a sample post which is under construction</h4>
						  		</div>

						  		{
						  			// DYNAMIC POSTS --------------------
						  		} 

						  		<div className="postdiv">
							  		<h3><strong>{this.state.author}</strong></h3>
							  		<h5><em>{this.state.email}</em></h5>
							  		<hr id="namehr" />
							  		<h4>{this.state.indpost}</h4>
						  		</div>

						  	</div>
						  </div>

						</div>
					</div>
				</div>
			</div>
		)
	}
})

export default Discuss;