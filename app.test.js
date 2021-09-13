var app = require('./app');

// initialises a new server
var server = app.listen();

// starts a new server
server;

// checks if there is any error
server.on('error', onError);
// checks if server started succesfully
server.on('listening', onSuccess);

// function that runs in case there is an error
function onError(error) {
    throw error;
}

// stops the server in case it succesfully started
function onSuccess() {
    console.log("successfully ran");
    server.close();
}
