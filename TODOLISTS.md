TO DO LISTS:

##### ADD ALL FILES

✅ 1. ADD ALL FILES INTO APPROPRIATE FOLDERS. 
    <SERVER>
        - SERVER.JS
        - <PUBLIC>
            -INDEX.HTML
            <SCRIPTS>
                - CLIENT.JS
                - JQUERY.JS
            <STYLES>

✅ 2. INSTALL NPM EXPRESS AND BODY PARSER.
✅ 3. INSTALL NODE MODULES
✅ 4. MAKE SURE ALL FILES ARE LINKED AND WORKING. 

#####  

✅ 1. BUILT BASIC INPUT OF DOM FOR VISUALIZATION.
✅ 2. CLIENT SIDE POST REQUESTED DATA/INPUT TO SERVER SIDE. 
✅ 3. SERVER SIDE COLLECTED INFORAMTION AND SEND BACK A (201)RESPONSE MESSAGE. 
✅ 4. CLIENT SIDE GET REQUEST FOR INPUT INFORMATION COLLECTED ON SERVER SIDE. 
✅ 5. SERVER SIDE WILL RESPONSED AND SEND BACK INFORAMTION/INPUT. 


##### 

Calculator

Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. When the submit (= button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST. There should also be a 'C' button that will clear the user input fields.

Build out the server-side logic to compute the numbers as appropriate. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, send back the OK. You should do a GET request after the POST to get the actual calculation.

History
Keep a historical record of all math operations and solutions on the server. Display a list of all previous calculations on the page when it loads using a GET request. Update the list when a new calculation is made.

NOTE: History should exist even after refreshing the page. It's expected that the history will go away after restarting the server. We'll talk about long term data storage next week.