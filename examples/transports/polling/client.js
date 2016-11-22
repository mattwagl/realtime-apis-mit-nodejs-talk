'use strict';

const request = require('superagent');

const render = require('../../shared/render');

const pollData = function () {
  request.
    get('/api/dashboard').
    end((err, res) => {
      if (!res.body.err) {
        render.dashboard(res.body);
      }

      setTimeout(pollData, 2.5 * 1000);
    });
};

pollData();
