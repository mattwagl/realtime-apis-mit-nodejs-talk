const http = require('http');

const express = require('express'),
      WebSocketServer = require('ws').Server;

const dataService = require('../../shared/services').data;

const app = express(),
      httpServer = http.createServer(app),
      webSocketServer = new WebSocketServer({
        server: httpServer
      });

app.use(express.static('public'));

app.get('/api/dashboard', (req, res) => {
  dataService.get('dashboard', (err, data) => {
    if (err) {
      return res.json({ err });
    }

    res.json(data);
  });
});

webSocketServer.on('connection', socket => {
  console.log('Client connected.');

  let subscriptions = {};

  socket.on('message', message => {
    message = JSON.parse(message);

    switch (message.command) {
      case 'subscribe':
        if (subscriptions[message.to]) {
          // Already subscribed
          return;
        }

        subscriptions[message.to] = dataService.getLiveStream(message.to);

        subscriptions[message.to].on('data', data => {
          socket.send(JSON.stringify({
            type: 'dashboard::updated',
            payload: data
          }));
        });
        break;
    }
  });

  socket.once('close', () => {
    console.log('Client disconnected.');

    Object.keys(subscriptions).forEach(streamName => {
      if (typeof subscriptions[streamName].end === 'function') {
        subscriptions[streamName].end();
      }
    })
  });
});

httpServer.listen(3000, () => {
  console.log('API listening on port 3000!');
});
