const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();


// dotenv config
dotenv.config({ path: "config.env" });

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// connect db
connectDB();

// log request
app.use(morgan('tiny'));

// view engine
app.set('view engine', 'ejs');

// load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.use('/', require('./server/router/route'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`))