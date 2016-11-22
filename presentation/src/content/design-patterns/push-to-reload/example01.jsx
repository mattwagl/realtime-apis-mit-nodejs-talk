const React = require('react');

const Browser = require('../../../components/Browser.jsx'),
      Code = require('../../../components/Code.jsx');

const example01 = require('!raw!./example01.html');

module.exports = function () {
  return (
    <div className="slide--flex slide--vertical">
      <Browser>
        <Code src={example01}></Code>
      </Browser>
    </div>
  );
};
