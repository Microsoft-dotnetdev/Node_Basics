var os = require('os')
console.log(os.platform()); // Win32
console.log(os.arch()); // x64 - Architecture 32 Bit or 64 Bit (x64)
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());