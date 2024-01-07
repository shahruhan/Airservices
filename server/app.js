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
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET'],
    credentials: true
  }
));

// app.use(express.static(path.join(__dirname, './client/build')));

// app.get('*', (res, req) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

if( process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname, './client/build')));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

// ************ Link the router file ************
app.use(require('./router/auth'));


const PORT = process.env.PORT || 5000;


// *************Routers of express******************


app.listen(PORT, () => {
  console.log(`Server running on localhost ${PORT}`);
});
