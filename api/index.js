const summarizeText = require('../summarize.js');
const express = require('express');
const app = express();
// Parses JSON bodies (as sent by API clients)
app.use(express.json());

app.post('/summarize', (req, res) => {

   const text = req.body.text_to_summarize;
   summarizeText(text)
      .then(response => {
         res.send(response);
      })
      .catch(error => {
         console.log(error.message);
      });

});

module.exports = app;
