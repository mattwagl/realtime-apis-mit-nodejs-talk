'use strict';

const request = require('superagent');

const render = require('../../shared/render');

const readAndObserve = function () {
  request.
    get('/api/dashboard').
    end((err, res) => {
      if (!res.body.err) {
        render.dashboard(res.body);
      }

      const socket = new WebSocket('ws://localhost:3000');

      socket.onopen = () => {
        socket.send(JSON.stringify({
          command: 'subscribe',
          to: 'dashboard'
        }));
      };

      socket.onmessage = (message) => {
        const event = JSON.parse(message.data);

        switch(event.type) {
          case 'dashboard::updated':
            render.dashboard(event.payload);
            break;
        }
      };
    });
};

readAndObserve();
