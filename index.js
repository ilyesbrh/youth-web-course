var express = require('express');
const path = require('path');

var app = express();


app.use('/download', express.static('download'))

app.get('**', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(80, function () {
    console.log('Example app listening on port 4000!');
})