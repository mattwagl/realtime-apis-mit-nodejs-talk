'use strict';

const util = require('util');

const EventEmitter = require('eventemitter2').EventEmitter2;

const WebSocketTransport = function (url) {
  this.url = url;
  this.socket = undefined;
};

util.inherits(WebSocketTransport, EventEmitter);

WebSocketTransport.prototype.connect = function (callback) {
  if (this.socket) {
    throw new Error('Transport has already been connected.');
  }

  this.socket = new WebSocket(this.url);
  this.socket.onopen = () => {
    callback(null);
  };

  this.socket.onmessage = this.handleMessage.bind(this);
};

WebSocketTransport.prototype.handleMessage = function (rawEvent) {
  let event;

  try {
    event = JSON.parse(rawEvent.data);
  } catch (err) {
    return;
  }

  this.emit(event.type, event);
};

WebSocketTransport.prototype.execute = function (commandName, params) {
  this.socket.send(JSON.stringify({ command: commandName, params }));
};

WebSocketTransport.prototype.subscribe = function (topic, listener) {
  this.on(topic, listener);
  this.execute('subscribe', { to: topic });
};

WebSocketTransport.prototype.unsubscribe = function (topic, listener) {
  this.off(topic, listener);
  this.execute('unsubscribe', { from: topic });
};

WebSocketTransport.prototype.disconnect = function (callback) {
  this.removeAllListeners();
  websocket.close();
};

module.exports = WebSocketTransport;
