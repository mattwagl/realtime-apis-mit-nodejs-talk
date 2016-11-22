const express = require('express'),
      jsonLines = require('json-lines');

const dataService = require('../../shared/services').data;

const app = express();

app.use(express.static('public'));

app.post('/api/dashboard/updates', jsonLines(client => {
  let liveStream;

  client.once('connect', () => {
    console.log('Client connected.');

    liveStream = dataService.getLiveStream('dashboard');

    liveStream.on('data', data => {
      client.send({
        name: 'dashboard',
        data
      });
    });
  });

  client.once('disconnect', () => {
    console.log('Client disconnected.');
    liveStream.end();
  });
}));

app.listen(3000, () => {
  console.log('API listening on port 3000!');
});
