'use strict';

const Api = require('./Api'),
      WsTransport = require('./transports/WsTransport');

const render = require('../../../shared/render');

const transport = new WsTransport('ws://localhost:3000'),
      api = new Api(transport);

api.connect(() => {
  api.subscribe('dashboard', (event) => {
    render.dashboard(event.payload);
  });
});
