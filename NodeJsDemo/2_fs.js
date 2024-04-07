var fs = require('fs');

// SYNC
/* fs.writeFileSync('sample.txt', 'Node is awesome..3.')
console.log('Created File')
console.log('End')
 */

//// ASYNC
/* fs.writeFile('sample.txt', 'Node is awesome..3.', (err) => {
  if (err) throw err;
  console.log('Created File')
}) */

//// ASYNC  - APPEND File
/* fs.appendFile('sample.txt', '\nMore data appended 2.', (err) => {
  if (err) throw err;
  console.log('Appended to File')
}) */

//// RENAME
fs.rename('sample.txt', 'demo.txt', (err) => {
  if (err) throw err;
  console.log('Renamed File')
})

//// READ FILE  //////////////////////////
/* fs.readFile('demo.txt', (err, data) => {
  if (err) throw err;
  console.log(data)
}) */
/// OUTPUT
/// ASCII Encoding, so decode use .toString() or specify the encoding argument
/// <Buffer 4e 6f 64 65 20 69 73 20 61 77 65 73 6f 6d 65 2e 2e 33 2e 4d 6f 72 65 20 64 61 74 61 20 61 70 70 65 6e 64 65 64 2e 2f 6e 20 4d 6f 72 65 20 64 61 74 61 ... 35 more bytes>

/* fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
}) */
//////////////////////////

fs.unlink('demo.txt', (err) => {
  if (err) throw err;
  console.log('File Deleted')
})

console.log('End')



