// HERE, WE ARE IMPORTING THE POSTS ROUTER
const postsRouter= require('express').Router();

// WE CREATE A FUNCITON TO GET ALL THE POSTS 
const getAllPosts = (req,res) => {
    res.send('Getting all the posts')
}

// THIS USES THE POSTS ROUTER ROUTE OF '/', AND PERFORMS THE getAllPosts FUNCTION ON IT TO GET ALL THE POSTS
postsRouter.route('/')
    .get(getAllPosts)
   
