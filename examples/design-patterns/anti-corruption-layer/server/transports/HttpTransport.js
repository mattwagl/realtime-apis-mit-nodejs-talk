'use strict';

const http = require('http'),
      path = require('path');

const express = require('express');

const HttpTransport = function (dataService) {
  this.dataService = dataService;
};

HttpTransport.prototype.create = function () {
  const app = express(),
        httpServer = http.createServer(app);

  app.use(express.static(path.join(__dirname, '..', '..', 'public')));

  app.get('/api/dashboard', (req, res) => {
    this.dataService.get('dashboard', (err, data) => {
      if (err) {
        return res.json({ err });
      }

      res.json(data);
    });
  });

  httpServer.listen(3000, () => {
    console.log('HTTP API listening on port 3000!');
  });

  return httpServer;
};

module.exports = HttpTransport;
