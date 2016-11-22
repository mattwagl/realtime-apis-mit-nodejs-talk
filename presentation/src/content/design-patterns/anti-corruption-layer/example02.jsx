const React = require('react');

const Code = require('../../../components/Code.jsx'),
      Browser = require('../../../components/Browser.jsx');

module.exports = function () {
  return (
    <div className="slide--flex slide--vertical">
      <Browser>
        <Code src={require('!raw!./example02.html')}></Code>
      </Browser>
    </div>
  );
};
