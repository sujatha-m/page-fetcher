


const request = require('request');
const fs = require('fs');

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error : ', error);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log('error: ', error);
    } else {
      console.log("File written successfully\n");
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});



// // CHANGE 1: Moved the console.log into a new function:
// const printOutCatBreed = (cat) => {
//   console.log('Return Value:' , cat);// => print out details correctly.
// };
  
// // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile('Bombay', printOutCatBreed);