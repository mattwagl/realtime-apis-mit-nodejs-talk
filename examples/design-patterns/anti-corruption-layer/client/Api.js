'use strict';

const Api = function (transport) {
  this.transport = transport;
};

Api.prototype.connect = function (options, callback) {
  this.transport.connect(options, callback);
};

Api.prototype.execute = function (commandName, params) {
  this.transport.execute(commandName, params);
};

Api.prototype.subscribe = function (eventName, listener) {
  this.transport.subscribe(eventName, listener);
};

Api.prototype.unsubscribe = function (eventName, listener) {
  this.transport.unsubscribe(eventName, listener);
};

module.exports = Api;
