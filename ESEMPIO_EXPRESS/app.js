var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


/*
1) npm init è un comando per creare un file json
2) entry point definisce il nome del file js principale
3) Il file json di configurazione dell'applicazione e contiene metadati, tra cui l'intestazione
4) Le dipendenze servono per poi essere implementati tutti i moduli nell'applicazione
5) La require serve a richiedere un determinato dipendenza, in questo caso la dipendenza express
6) Il metodo get serve per eseguire la funzione alla ricezione della richiesta client
7) Il metodo listen serve per stare in ascolto per riceve le richieste fatte dal client
8) I parametri che servono per il metodo get son il req, cioè richiesta  e res, risposta