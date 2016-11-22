const head = require('headjs/dist/1.0.0/head.min'),
      ReactDOM = require('react-dom'),
      React = require('react'),
      Reveal = require('reveal.js');

const Slides = require('./content/Slides.jsx');

global.Reveal = Reveal;

ReactDOM.render(
  React.createElement(Slides),
  document.querySelector('.reveal')
);

Reveal.initialize({
  width: '100%',
  height: '100%',
  margin: 0,
  controls: false,
  progress: true,
  history: true,
  center: true,
  transition: 'fade',
  dependencies: [
    // Interpret Markdown in <section> elements
    { src: 'static/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'static/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

    // Syntax highlight for <code> elements
    { src: 'static/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

    // Zoom in and out with Alt+click
    { src: 'static/plugin/zoom-js/zoom.js', async: true }
  ]
});

setTimeout(() => {
  document.body.classList.remove('loading');
}, 200);
