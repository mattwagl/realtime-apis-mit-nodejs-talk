'use strict';

const render = require('../../shared/render');

const source = new EventSource('/api/dashboard/events');

source.addEventListener('open', event => {
  console.log('Connection was opened.');
});

source.addEventListener('message', event => {
  var data = JSON.parse(event.data);

  render.dashboard(data);
});

source.addEventListener('error', err => {
  if (source.readyState === EventSource.CONNECTING) {
    console.log('Trying to reconnect.');
  } else if (source.readyState === EventSource.CLOSED) {
    console.log('Connection was closed.');
  }
});
