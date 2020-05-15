const express = require('express');
const path = require('path');
const app = express();

app.disable("x-powered-by");

app.use(express.static(__dirname + '/dist/online-arcade'));
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname + '/dist/online-arcade/index.html'));
});

app.listen(process.env.PORT || 8080);