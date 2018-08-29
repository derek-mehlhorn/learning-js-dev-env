import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();
app.use(express.static('dist')); // Load files from 'dist' folder
app.use(compression()); // Enable GZip in express.

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hard code data for demo.
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName":"Tammy", "lastName":"Norton", "email":"tnorton@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
