'use strict'
require('dotenv').config({ silent: true });
const express       = require('express');
const logger        = require('morgan');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const app           = express();
const PORT          = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(cookieParser());

app.use(bodyParser.json());

app.use('/', require('./routes/main'));

app.listen(PORT, () => console.log('server is listening on ', PORT));
