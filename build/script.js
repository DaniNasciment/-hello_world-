var express = require("express");
var app = express();
var port = 2000;
app.get('/', function (request, response) {
    response.send('Hello world!');
});
app.get('/bsm', function (request, response) {
    response.send('Bsm: <br> Mentalidades <br> Persistencia <br> Orientação ao Futuro <br> Mentalidade de Crescimento <br> <br> Habilidades <br> Trabalho em Equipe <br> Atenção aos Detalhes <br> Proatividade <br> Comunicação');
});
app.get('/objetivo', function (request, response) {
    response.send('Meus objetivos de aprendizagem desta semana são: <br> - Desenvolver minhas habilidades montando banco de dados <br> - Aprimoramento em trabalho em equipe <br> - Absorver e entender os conceitos inicias de backend');
});
app.listen(port, function () {
    console.log("Server is running at ".concat(port, "!"));
});
