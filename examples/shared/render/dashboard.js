'use strict';

var dashboard = function (state) {
  const dashboard = document.querySelector('.dashboard');

  dashboard.innerHTML = `
    <div class="memory">Uptime: ${state.uptime}</div>
    <div class="memory">Heap usage: ${state.memoryUsage.heapUsed/state.memoryUsage.heapTotal} %</div>
  `;
};

module.exports = dashboard;
