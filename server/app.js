const dotenv = require('dotenv');
const express = require("express");
const app = express();
dotenv.config({path: './config.env'});
require('./db/conn');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors(
  {
    origin: ['https://airservices.vercel.app'],
    methods: ['POST', 'GET'],
    credentials: true
  }
));


// ************ Link the router file ************
app.use(require('./router/auth'));


const PORT = process.env.PORT || 5000;

// const PORT = 'airservices-server.vercel.app';


// *************Routers of express******************


app.listen(PORT, () => {
  console.log(`Server running on localhost ${PORT}`);
});
