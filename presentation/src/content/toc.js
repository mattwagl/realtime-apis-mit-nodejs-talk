module.exports = [
  require('!raw!./intro/index.html'),
  require('!raw!./intro/about-me.html'),
  require('!raw!./intro/index.html'),
  require('!raw!./intro/about-this-talk.html'),
  require('!raw!./intro/definition01.html'),
  require('!raw!./intro/definition02.html'),
  require('!raw!./intro/definition04.html'),

  require('!raw!./intro/why-realtime01.html'),
  require('!raw!./intro/why-realtime-collaboration.html'),
  require('!raw!./intro/why-realtime-live-datastreams.html'),
  require('!raw!./intro/why-realtime-embedded.html'),
  require('!raw!./intro/why-realtime-desktop.html'),
  require('!raw!./intro/why-realtime02.html'),
  require('!raw!./intro/what.html'),

  `<div class="slide--flex slide--chapter slide--vertical slide--vertical-center slide--horizontal-center">
    <h2 class="chapter-headline"><strong>Wie baut man ⚡️-APIs?</strong></h2>
  </div>`,

  require('!raw!./transports/index.html'),

  require('!raw!./transports/polling/index.html'),
  require('./transports/polling/example.jsx'),
  require('!raw!./transports/polling/fast-and-selfupdating.html'),
  `<div class="slide--flex slide--vertical slide--vertical-center slide--horizontal-center">
    <h3>
      <strong>Vielen Dank für Eure Aufmerksamkeit!</strong>
    </h3>
    <h2>😊</h2>
  </div>`,
  require('!raw!./transports/polling/cons.html'),
  require('!raw!./transports/polling/pros.html'),
  require('!raw!./transports/polling/when.html'),

  require('!raw!./transports/long-polling/index.html'),
  require('./transports/long-polling/how.jsx'),
  require('!raw!./transports/long-polling/cons.html'),
  require('!raw!./transports/long-polling/pros.html'),
  require('!raw!./transports/long-polling/when.html'),

  require('!raw!./transports/websockets/index.html'),
  require('./transports/websockets/how.jsx'),
  require('./transports/websockets/example.jsx'),
  require('!raw!./transports/websockets/pros.html'),
  require('!raw!./transports/websockets/cons.html'),
  require('!raw!./transports/websockets/when.html'),

  require('!raw!./transports/http-streaming-sse/index.html'),
  require('./transports/http-streaming-sse/how.jsx'),
  require('./transports/http-streaming-sse/example.jsx'),
  require('!raw!./transports/http-streaming-sse/pros1.html'),
  require('!raw!./transports/http-streaming-sse/pros2.html'),
  require('!raw!./transports/http-streaming-sse/cons.html'),
  require('!raw!./transports/http-streaming-sse/when.html'),

  require('!raw!./transports/http-streaming/index.html'),
  require('./transports/http-streaming/how.jsx'),
  require('!raw!./transports/http-streaming/pros.html'),
  require('!raw!./transports/http-streaming/cons.html'),
  require('./transports/http-streaming/exampleWithFetch.jsx'),
  require('!raw!./transports/http-streaming/when.html'),

  require('!raw!./libraries/index.html'),
  require('!raw!./libraries/why.html'),
  require('!raw!./libraries/overview.html'),
  require('!raw!./libraries/socket-io.html'),
  require('!raw!./libraries/sock-js.html'),
  require('!raw!./libraries/primus.html'),
  require('!raw!./libraries/conclusion.html'),

  require('!raw!./frameworks/index.html'),
  require('!raw!./frameworks/application-frameworks.html'),
  require('!raw!./frameworks/when.html'),

  require('!raw!./design-patterns/index.html'),

  require('!raw!./design-patterns/stateless-services/index.html'),
  require('!raw!./design-patterns/stateless-services/pattern.html'),

  // require('!raw!./design-patterns/anti-corruption-layer/index.html'),
  // require('!raw!./design-patterns/anti-corruption-layer/pattern.html'),
  // require('./design-patterns/anti-corruption-layer/example01.jsx'),
  // require('./design-patterns/anti-corruption-layer/example02.jsx'),
  // require('./design-patterns/anti-corruption-layer/example03.jsx'),

  require('!raw!./design-patterns/events-only/index.html'),
  require('!raw!./design-patterns/events-only/pattern.html'),
  require('!raw!./design-patterns/events-only/slack-api-http-methods.html'),
  require('!raw!./design-patterns/events-only/slack-api-realtime-events.html'),

  require('!raw!./design-patterns/token-based-authentication/index.html'),
  require('!raw!./design-patterns/token-based-authentication/pattern.html'),
  require('./design-patterns/token-based-authentication/how.jsx'),
  require('./design-patterns/token-based-authentication/example.jsx'),
  require('!raw!./design-patterns/token-based-authentication/example.html'),

  require('!raw!./design-patterns/correlationId/index.html'),
  require('!raw!./design-patterns/correlationId/pattern.html'),
  require('./design-patterns/correlationId/example02.jsx'),
  require('./design-patterns/correlationId/example00.jsx'),
  require('./design-patterns/correlationId/example01.jsx'),

  require('!raw!./design-patterns/push-to-reload/index.html'),
  require('!raw!./design-patterns/push-to-reload/pattern.html'),
  require('./design-patterns/push-to-reload/example01.jsx'),
  require('./design-patterns/push-to-reload/example02.jsx'),

  require('!raw!./conclusion/index.html'),
  `<div class="slide--flex slide--vertical slide--vertical-center slide--horizontal-center">
    <h2><strong>Es gibt keine 🐣-🐑-🐄-🐖</strong></h2>
    <h4>
      ⚡️-API wird meist sogar aus mehreren Transportkanälen bestehen
    </h4>
  </div>`,
  require('!raw!./conclusion/which.html'),
  require('!raw!./conclusion/socket-io.html'),
  require('!raw!./conclusion/stateless.html'),
  require('!raw!./conclusion/http2.html'),

  `<div class="slide--flex slide--vertical slide--vertical-center slide--horizontal-center">
    <h2 class="chapter-headline"><strong>Vielen Dank!</strong></h2>
    <h4>
      Slides & Beispiele<br><a href="https://github.com/mattwagl/realtime-apis-mit-nodejs-talk">https://github.com/mattwagl/realtime-apis-mit-nodejs-talk</a>
    </h4>
    <h4>
      Kontakt
      <br>
      <a href="https://twitter.com/mattwagl">@mattwagl</a>
      <br>
      <a href="https://www.intuity.de">https://www.intuity.de</a>
      <br>
      <a href="https://www.thenativeweb.io">https://www.thenativeweb.io</a>
    </h4>
  </div>`
];
