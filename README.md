- Unit 34.1 - Express.js
- Express can be used as a server in JavaScript
- To implement in a file:
    - const express = require('express');

    - const app = express();

    - app.listen(3000, function () {
    - console.log('App on port 3000');
    - })

- Route Handling Callbacks
    - request - information about request (query string, url parameters, form data)
    - response - methods for sending a response (html, text, json etc.)
    - req and res

- Route Methods
    - app.get(path, callback)
    - app.post(path, callback)
    - app.put(path, callback)
    - app.patch(path, callback)
    - app.delete(path, callback)

- To use Express:
    - npm init -y
    - npm install express

- Nodemon
    - Used to restart the Express server
    - Install: $ npm install --global nodemon
    - Run: $ nodemon app

_______________________________________________-
- Assignment:
- Express Calculator - Can calculate mean, median and mode
- app.js
    - Run: $ nodemon app.js
        - This will run that app on specified localhost ex localhost:3000
        - Note: "/" is a dead page for the assingment
        - Follow instructions in app.js which tell how to use mean, median, and mode features
- operations.js
    - Used to create functions that are linked in app.js
- expressError.js
    - Error page - when you go to an unknown link, you will see an error.

__________________________________________________________________________
- Made with Express.js, Node.js, and JavaScript