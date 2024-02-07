const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const express = require("express");
const app = express();
require('./db/conn');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors(
  {
    origin: ['https://airservices-root.vercel.app','http://localhost:3000'],
    methods: ['POST', 'GET'],
    credentials: true
  }
));

router.get('/hello', (req, res) =>{
  res.send("Hello world at port 5000");
});

app.use(express.static(path.join(__dirname, './client/build')));

 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, './client/build/index.html'));
 });

// ************ Link the router file ************
app.use(require('./router/auth'));


const PORT = process.env.PORT || 5000;


// *************Routers of express******************


app.listen(PORT, () => {
  console.log(`Server running on localhost ${PORT}`);
});
