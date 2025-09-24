
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require ('./routes/index');
const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.router
 const port = 3000;

// app.listen(port,() => {
//     console.log(`app running on http://localhost:${port}`)
// })



module.exports = app;
