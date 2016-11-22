const React = require('react');

const Code = require('../../../components/Code.jsx'),
      Browser = require('../../../components/Browser.jsx'),
      Terminal = require('../../../components/Terminal.jsx');

const exampleClient = require('!raw!./exampleClientWithFetch.html'),
      exampleServer = require('!raw!./exampleServer.html');

module.exports = function () {
  return (
    <div className="slide--flex slide--horizontal">
      <Terminal>
        <Code theme='dark' src={exampleServer}></Code>
      </Terminal>
      <Browser>
        <Code src={exampleClient}></Code>
      </Browser>
    </div>
  );
};
