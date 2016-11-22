'use strict';

const render = require('../../shared/render');

fetch('/api/dashboard/updates', { method: 'POST' }).then(response => {
  var readChunk = function(reader) {
    return reader.read().then(function(result) {
      let chunk = result.value;
      let message = '';

      for (let i = 0; i < chunk.byteLength; i++) {
        message += String.fromCharCode(chunk[i]);
      }

      message = JSON.parse(message);

      if(message.name !== 'heartbeat' && message.data) {
        render.dashboard(message.data);
      }

      // Read next chunk via recursion
      return readChunk(reader);
    });
  }

  return readChunk(response.body.getReader());
})
.catch(error => {
  console.log(error);
});

window.addEventListener('unhandledrejection', event => {
  event.preventDefault();
  console.log('unhandledrejection: ' + event.reason);
});
