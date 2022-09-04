// This is just to make sure client.js is running on the browser for visual.  
console.log('This means that client.js is working!!!');

$(document).ready(onReady);
console.log('jquery is loaded'); // this is just to make sure ready DOC is loading.

function onReady () {
    $('#equalButton').on('click', numberInput);
    $('#addButton').on('click', add);
    $('#subtractionButton').on('click', sub);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
    $('#clearButton').on('click', clearInputs);
    $('#deleteButton').on('click', deleteHistory);
} // end of onReady-function. 

// For this function, we want to send the input numbers 
// and operator to the server side. 
// We will then recieved a message indicating that server has recieved 
// and collected information. 
function numberInput () {
    let number1 = $('#firstNumberInput').val();
    let number2 = $('#secondNumberInput').val();
    let total = 0;

    if (!number1 || !number2) {
        alert('HEY 🐷, THATS NOT HOW A CALCULATOR WORKS!!!')
        alert('PLEASE TRY AGAIN!!!!!')
        alert('WITH NUMBERS THIS TIME!!!')
        return;
    }

    $.ajax({
        type: 'POST',
        url: '/calculation',
        data: {number1, operator, number2, total}
    }).then(function(response) {
        console.log('info collected');
    })

    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');

    numberOutput ()

} //end of numberInput-function. 

// FOR THIS FUNCTION, WE WANT TO 'GET' REQUESTED THE COLLECTED INPUT
// WE WILL THEN WANT TO RECIEVED ANOTHER MESSAGE FROM SERVER SIDE 
// THEN WE WANT TO APPENED THE TOTAL CALCULATION AND CALCULATION HISTORY. 

function numberOutput () {
    $.ajax({
        type: 'GET',
        url: '/calculation'
    }).then(function(response){
        console.log(response);
        $('#historyOutputList').empty();
        for (let calHist of response) {
            $('#totalOutput').empty();
            $('#totalOutput').append(`
            <h2 id="totalOutput">${calHist.total}</h2>
            `)
            $('#historyOutputList').append(`
            <li>${calHist.number1} 
                ${calHist.operator} 
                ${calHist.number2}
                = 
                ${calHist.total}
            </li>
        `)
        }
    })
} // END OF NUMBEROUTPUT-FUNCTION. 

// GLOBAL OPERATOR WITH NO SET VALUE.
// THE VALUE OF OPERATOR WILL DEPEND ON WHICH BUTTON IS BEING CLICKED ON. 
let operator;

function add () {
    operator = ($('#addButton').val())
} //END OF ADD-FUNCTION.
function sub () {
    operator = ($('#subtractionButton').val())
} // END OF SUB-FUNCTION.
function multiply () {
    operator = ($('#multiplyButton').val())
} // END OF MULTIPLY-FUNCTION.
function divide () {
    operator = ($('#divideButton').val())
} // END OF DIVIDE-FUNCTION.

function clearInputs () {
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');
} //END OF CLEARINPUTS-FUNCTION. 

// THIS FUNCTION WILL SEND A REQUESTED TO DELETE ALL THE INFORMATION 
// DATA HAS COLLECTED AND STORED ON THE SERVER SIDE,
// WHENEVER WE CLICKED ON DELETE BUTTON. 
function deleteHistory () {
    $.ajax({
        type: 'Delete',
        url: '/calculation'
    }).then(function(response){
        console.log('History has been wiped!!!')
        $('#historyOutputList').empty()
        $('#totalOutput').empty();
    })
} //END OF DELETEHISTORY-FUNCTION.