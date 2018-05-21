const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('Express server starts listening on port:3000');
});

app.use(express.static('dist/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});