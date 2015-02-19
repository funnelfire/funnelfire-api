var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen(4000);
console.log("Go to http://localhost:4000 to see docs");
console.log("ctrl+c will close server");

