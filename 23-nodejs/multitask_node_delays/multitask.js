// process.env.UV_THREADPOOL_SIZE = 12;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();
function doRequest() {
  https
    .request('https://google.com', (res) => {
      res.on('data', () => { });
      res.on('end', () => {
        console.log(`Https request took ${Date.now() - start} milliseconds`);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 5112, 'sha512', () => {
    console.log('Hashing took', Date.now() - start, 'milliseconds');
  });
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
  console.log('Reading file took', Date.now() - start, 'milliseconds');
});

doHash();
doHash();
doHash();
doHash();
