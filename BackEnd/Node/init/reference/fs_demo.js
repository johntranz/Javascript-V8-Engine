const fs = require('fs');
const path = require('path');

console.info(path.join(__dirname, '/test'));

// Create folder
/*fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
  console.log('Folder created ....');
});*/

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World !\n',
//   (err) => {
//     if (err) throw err;
//     console.log('File written to ...');

//     // File append
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       'I love Node.js',
//       (err) => {
//         if (err) throw err;
//         console.log('File written to ...');
//       }
//     );
//   }
// );

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('Reading file ...');
//   console.info(data);
// });

// Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'hello_world.txt'),
  (err) => {
    if (err) throw err;
    console.log('Rename file ...');
  }
);
