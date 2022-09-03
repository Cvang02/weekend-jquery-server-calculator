// This is just to make sure client.js is running on the browser for visual.  
console.log('This means that client.js is working!!!');

$(document).ready(onReady);
console.log('jquery is loaded'); // this is just to make sure ready DOC is loading.

function onReady () {
    $('#equalButton').on('click', numberInput);
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
        data: {number1, number2}
    }).then(function(response) {
        console.log('info collected');
    })

    $('input').val('');

} //end of numberInput-function. 

