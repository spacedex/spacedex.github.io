// THIS IS THE MODEL/ SCHEMA FOR THE POSTS TABLE

// HERE, WE IMPORT SEQUELIZE
const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// HERE, WE CREATE THE MODEL FOR EACH POST
const Post = sequelizeConnection.define('posts', {

	// THE BODY OF THE POST
    body: {
    		type: Sequelize.STRING,
            validate: {length:[1,1000], notEmpty:true
          }
    },
});

// NOW, WE EXPORT IT
module.exports = Post;