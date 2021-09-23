//import express and axios 
const express = require('express')
const axios = require('axios')
//import and config dotenv library
require('dotenv').config()

const PORT = 4000
//define API key var
const omdbApiKey = process.env.OMDB_API_KEY  //how to access secured api key specifically through express

//declare an instance of app
const app = express()

//create a home route
app.get('/', (req, res) => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${omdbApiKey}`)
        .then((response) => {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(err => {console.log(err)})
})

//open up a port for the app to listen on + define port
app.listen(PORT, () => {
    console.log("youre listening to the smooth sounds of a movie app🎞")
})

//KEEP API KEYS(link in axios.get('http://)) PRIVATE!!
// create folder .env  
// CUT CODE IN URL AFTER apikey=
//paste in .env
//add a single line of just .env in .gitignore file