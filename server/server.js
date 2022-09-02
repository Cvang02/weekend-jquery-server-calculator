// Express app
const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
const bodyParser = require('body-parser');

console.log('This means that server.js is working')













// To start app by running `.listen()`
app.listen(PORT, () => {
    console.log(`server is listening for requests on port ${PORT}.`)
  })