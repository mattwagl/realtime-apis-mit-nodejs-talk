const dataService = require('../../../shared/services').data;

const HttpTransport = require('./transports/HttpTransport'),
      WsTransport = require('./transports/WsTransport');

const httpTransport = new HttpTransport(dataService);
const wsTransport = new WsTransport(dataService);

const httpServer = httpTransport.create();

wsTransport.attachTo(httpServer);
