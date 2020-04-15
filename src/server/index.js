const dotenv = require('dotenv');
dotenv.config();

let path = require('path')
const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
//require the aylien npm package
let aylien = require("aylien_textapi");

const app = express()
app.use(express.static('dist'))

app.use(cors())

/* Middleware*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/user',(req, res)=>{

    console.log(req.body.theText);
    textapi.sentiment({
        'text':request.body.theText
      }, function(error, data) {
        if (error === null) {
          res.send(data);
        }
      });
  });

// set aylien API credentias
let textapi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
}); 