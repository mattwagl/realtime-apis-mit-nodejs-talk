const React = require('react');

const Browser = require('../../../components/Browser.jsx');

module.exports = function () {
  return (
    <div className="slide--flex slide--vertical">
      <Browser>
        <pre dangerouslySetInnerHTML={{__html: require('!raw!./example00.html')}}></pre>
      </Browser>
    </div>
  );
};
