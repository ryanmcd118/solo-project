const express = require('express');
const path = require('path');

const app = express();

const apiRouter = require('./routes/api');

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * serve the bundle file
 */
app.use('/build', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build'));
});
// app.use('/build', express.static(path.join(__dirname, '../build')));

/**
 * handle requests for static files
 */
app.get('/api/updateUnit', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/update/updateUnit.html'));
});

// app.get('/api/updateUnit/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/update/updateUnit.html'));
// });

app.get('/api/styles.css', (req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/html; charset=UTF-8')
    // .sendFile(path.resolve(__dirname, '../client/update/updateStyles.css'));
    .sendFile(path.resolve(__dirname, '../client/update/styles.css'));
});

// app.use(express.static(path.resolve(__dirname, '../client')));
// app.use('/updateUnit', express.static(path.resolve(__dirname, '../client/update')));

// app.use('/updateUnit', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/update'));
// });

// app.use('/updateUnit', express.static(path.resolve(__dirname, '../client/updateUnit')));

/**
 * define route handlers
 */
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

/**
 * express error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(3000);

module.exports = app;
