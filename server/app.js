const express = require('express');

const app = express();

const addAndDelete = require('./database/addAndDelete');

const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', addAndDelete);

app.listen(3001, () => {
  console.log('app listening on port 3001');
});
