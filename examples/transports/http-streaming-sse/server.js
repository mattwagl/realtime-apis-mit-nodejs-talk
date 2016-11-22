const express = require('express'),
      jsonLines = require('json-lines');

const dataService = require('../../shared/services').data;

const app = express();

app.use(express.static('public'));

app.get('/api/dashboard/events', (req, res) => {
  req.socket.setNoDelay(true);

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.write('\n');

  const heartbeatInterval = setInterval(() => {
    res.write(`heartbeat: ${Date.now()}\n\n`);
  }, 15 * 1000);

  dataService.
    getLiveStream('dashboard').
      on('data', data => {
        res.write(`id: ${data.id}\n`);
        res.write(`data: ${JSON.stringify(data)}\n\n`);
  });

  req.on('end', () => {
    clearInterval(heartbeatInterval);
  });
});

app.listen(3000, () => {
  console.log('API listening on port 3000!');
});
