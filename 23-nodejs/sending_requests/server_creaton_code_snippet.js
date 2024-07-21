// Server creation code snippet

const http = require('node:http');
const url = require('node:url');
const port = 8080;

// Create a server that can handle your request at 'animals' endpoint
http.createServer((request, response) => {
  if (url.parse(request.url).pathname === '/animals') {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // Parse the request params in the query using URL module
    const requestQueries = url.parse(request.url).query?.split('&') || [];
    const requestParams = Object.fromEntries(requestQueries.map((query) => query.split('=')));

    // Check that the request query is not empty to send back as a response to the request query
    // Incase it is empty, it will return the "animals" array.
    if (requestQueries.length) response.write(JSON.stringify(requestParams));
    else response.write(JSON.stringify([
      'cat', 'dog', 'bird', 'elephant'
    ]));

    response.end();

  };
}).listen(port);

// const options = {
//   hostname: 'localhost',
//   port: 8080,
//   path: '/animals',
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };


const query = {
  drink: 'coffee',
  isNeedSugar: false,
  type: 'batch brew'
};

const searchParams = new URLSearchParams(query).toString();

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/animals?' + searchParams,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};


http.request(options, (res) => {
  let fullResponse = '';
  res.on('data', (dataChunk) => { fullResponse += dataChunk; });
  res.on('end', () => { console.log(JSON.parse(fullResponse)); });
}).end();
