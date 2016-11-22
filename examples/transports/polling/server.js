const express = require('express');

const dataService = require('../../shared/services').data;

const app = express();

app.use(express.static('public'));

app.get('/api/dashboard', (req, res) => {
  dataService.get('dashboard', (err, data) => {
    if (err) {
      return res.json({ err });
    }
    
    res.json(data);
  });
});

app.listen(3000, () => {
  console.log('API listening on port 3000!');
});
