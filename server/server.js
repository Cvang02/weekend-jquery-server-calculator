// Express app
const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))

// This is just to make sure server is running when connected for visual on terminal. 
console.log('server.js is working and running!!!');

let calculationHistory = [];

// GET AND POST ROUTES GOES HERE. 
app.post('/calculation', (req, res) => {
  calculationHistory.push(req.body);
  console.log('req.body is:', (req.body));
  console.log(calculationHistory);
  





  res.sendStatus(201);
})

app.get('/calculation', (req, res) => {
  res.send(calculationHistory);
})









// To start app by running `.listen()`
app.listen(PORT, () => {
    console.log(`server is listening for requests on port ${PORT}.`)
  })