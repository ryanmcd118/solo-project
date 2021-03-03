const express = require('express');
const app = express();
const path = require('path');

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/html; charset=UTF-8')
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/styles.css', (req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/html; charset=UTF-8')
    .sendFile(path.resolve(__dirname, '../client/styles.css'));
});

app.listen(3000, () => console.log('testing: ', process.env.NODE_ENV));
