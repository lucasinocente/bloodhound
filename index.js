const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/post', (req, res) => {
    console.log('Received:', req);

    // Salvar informação no mongo
    
    res.sendStatus(200);
});

app.use('/', express.static(__dirname + '/src'));

server.listen( process.env.PORT || 3000, () => {
    console.log(`Server listen on: http://localhost:${process.env.PORT || 3000}`);
});