// Express app
const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
const bodyParser = require('body-parser');

// This is just to make sure server is running when connected for visual on terminal. 
console.log('server.js is working and working');













// To start app by running `.listen()`
app.listen(PORT, () => {
    console.log(`server is listening for requests on port ${PORT}.`)
  })