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

  for (let cal of calculationHistory) {
    if (cal.operator === '+') {
      cal.total = Number(cal.number1) + Number(cal.number2)
      console.log('result is:', Number(cal.total))
    }
    if (cal.operator === '-') {
      cal.total = Number(cal.number1) - Number(cal.number2)
      console.log('result is:', cal.total)
    }
    if (cal.operator === '*') {
      cal.total = Number(cal.number1) * Number(cal.number2)
      console.log('result is:', cal.total)
    }
    if (cal.operator === '/') {
      cal.total = Number(cal.number1) / Number(cal.number2)
      console.log('result is:', cal.total)
    }
  }
  
  res.sendStatus(201);
}) // END OF POST FUNCTION. 

app.delete('/calculation', (req, res) => {
  calculationHistory = [];
  res.send(calculationHistory);
}) //END OF DELETE FUNCTION. 


app.get('/calculation', (req, res) => {
  res.send(calculationHistory);
}) // END OF GET FUNCTION.

// To start app by running `.listen()`
app.listen(PORT, () => {
    console.log(`server is listening for requests on port ${PORT}.`)
  }) //END OF LISTEN FUNCTION. 