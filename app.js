const os = require('os');
console.log('tmdir : ' + os.tmpdir());
console.log("endianness: " + os.endianness());
console.log("hostname: " + os.hostname());
console.log("Type: " + os.type());
console.log("platform: " + os.platform());
console.log(" architecture: " + os.arch());
console.log("release: " + os.release());
console.log("uptime: " + os.uptime());
console.log("loadavg: " + os.loadavg());
console.log("Cpus: " + os.cpus());
console.log(' network Interfaces: ' + os.networkInterfaces());
console.log("Total memory: " + os.totalmem());
console.log("Free memory: " + os.freemem());

