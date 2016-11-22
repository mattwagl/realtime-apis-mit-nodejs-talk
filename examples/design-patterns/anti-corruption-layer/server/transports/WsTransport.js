'use strict';

const WebSocketServer = require('ws').Server

const WsTransport = function (dataService) {
  this.dataService = dataService;
};

WsTransport.prototype.attachTo = function (httpServer) {
  const webSocketServer = new WebSocketServer({
    server: httpServer
  });

  webSocketServer.on('connection', socket => {
    console.log('Client connected.');

    let subscriptions = {};

    socket.on('message', message => {
      message = JSON.parse(message);

      console.log('Got message', message);

      switch (message.command) {
        case 'subscribe':
          if (subscriptions[message.to]) {
            // Already subscribed
            return;
          }
          subscriptions[message.to] = this.dataService.getLiveStream(message.to);

          subscriptions[message.to].on('data', data => {
            socket.send(JSON.stringify({
              type: 'dashboard',
              payload: data
            }));
          });
          break;

        case 'unsubscribe':
          if (!subscriptions[message.from]) {
            // Not subscribed yet
            return;
          }

          subscriptions[message.from].removeAllListeners();
          subscriptions[message.from].resume();

          break;
        default:
          break;
      }
    });

    socket.once('close', () => {
      console.log('Client disconnected.');

      Object.keys(subscriptions).forEach(streamName => {
        const stream = subscriptions[streamName];

        if (typeof stream.resume === 'function') {
          stream.removeAllListeners();
          stream.resume();
        }
      });
    });
  });
};

module.exports = WsTransport;
