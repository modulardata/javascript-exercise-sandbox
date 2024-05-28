//! using better  comments.tags in comments
//  ?Lesson https://hyperskill.org/learn/step/27939
/*
?WebSocket Server locally for tests are hard to manage.
You will need to choose a base framework, a websocket library and then cope with the particularities of such combination.

?For example, you can use

* node.js and socket.io : https://github.com/vtortola/WebSocketListener/wiki/Mono-support
* Mono and WebSocketListener : https://github.com/vtortola/WebSocketListener/wiki/Mono-support
* Java and its WebSocket: https://blog.idrsolutions.com/2013/12/websockets-an-introduction/
* PHP/Apache and Ratchet: http://socketo.me/
* Of, if you have already a TCP service, you can use WebSockify to provide the same service through WebSockets: https://github.com/kanaka/websockify
*/



const socket = new WebSocket('wss://address/endpoint');


// readyState property
// In order to get the state of the WebSocket connection, we can use the additional readyState property.It has the following values:

// 0 - "CONNECTING" means the connection is not yet established
// 1 - "OPEN" is for data exchange
// 2 - "CLOSING" means the connection is currently being closed
// 3 - "CLOSED" means the connection is already closed.


socket.onopen = function (event) {
  console.log('Connection established!');
}


// Using the WebSocket constructor-object allows you to open a connection and use WebSocket methods
let socket = new WebSocket("wss://address/endpoint");

// Event that fires when a WebSocket connection is opened
socket.onopen = function (event) {
  console.log('Connection established!')
};

// Event that fires when the WebSocket connection get new data
socket.onmessage = function (event) {
  console.log('Data received!');
  console.log(event.data);
};

// Event that fires when the WebSocket connection is closed
socket.onclose = function (event) {
  console.log('Connection interrupted!');
};

// Event that fires when the WebSocket connection gets an error
socket.onerror = function (event) {
  console.log('An error has occurred!');
};

// WebSocket method that allows you to send data to the server
socket.send('Hello world!');

// WebSocket method that allows you to close WebSocket connection
socket.close();
