'use strict';

const stream = require('stream');

const DataService = function () {
  
};

DataService.prototype.getLiveStream = function (key) {
  const fakeStream = new stream.PassThrough({ objectMode: true });

  const cleanup = () => {
    fakeStream.removeAllListeners();
    clearInterval(interval);
  };

  const interval = setInterval(() => {
    fakeStream.write({
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage()
    });
  }, 1 * 1000);

  fakeStream.once('end', cleanup);
  fakeStream.once('close', cleanup);

  return fakeStream;
};

DataService.prototype.get = function (key, callback) {
  process.nextTick(() => {
    callback(null, {
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage()
    });
  });
};

module.exports = DataService;
