// This is just to make sure client.js is running on the browser for visual.  
console.log('This means that client.js is working!!!');

$(document).ready(onReady);
console.log('jquery is loaded'); // this is just to make sure ready DOC is loading.

function onReady () {
    $('#equalButton').on('click', numberInput);
    $('#addButton').on('click', add);
    $('#subtractionButton').on('click', sub);
} // end of onReady-function. 

// For this function, we want to send the input numbers 
// and operator to the server side. 
// We will then recieved a message indicating that server has recieved 
// and collected information. 
function numberInput () {
    let number1 = $('#firstNumberInput').val();
    let number2 = $('#secondNumberInput').val();

    $.ajax({
        type: 'POST',
        url: '/calculation',
        data: {number1, number2, operator}
    }).then(function(response) {
        console.log('info collected');
    })

    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');

} //end of numberInput-function. 




// GLOBAL OPERATOR WITH NO SET VALUE.
// THE VALUE OF OPERATOR WILL DEPEND ON WHICH BUTTON IS BEING CLICKED ON. 
let operator;

function add () {
    operator = ($('#addButton').val())
} //END OF ADD-FUNCTION.
function sub () {
    operator = ($('#subtractionButton').val())
} // END OF SUB-FUNCTION.