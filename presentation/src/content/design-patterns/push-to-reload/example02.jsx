const React = require('react');

const Browser = require('../../../components/Browser.jsx'),
      Code = require('../../../components/Code.jsx');

const example02 = require('!raw!./example02.html');

module.exports = function () {
  return (
    <div className="slide--flex slide--vertical">
      <Browser>
        <Code src={example02}></Code>
      </Browser>
    </div>
  );
};
