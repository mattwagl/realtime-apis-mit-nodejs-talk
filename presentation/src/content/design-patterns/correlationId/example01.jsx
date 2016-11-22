const React = require('react');

const Browser = require('../../../components/Browser.jsx');

module.exports = function () {
  return (
    <div className="slide--flex slide--vertical">
      <Browser>
        <pre dangerouslySetInnerHTML={{__html: require('!raw!./example01.html')}}></pre>
      </Browser>
    </div>
  );
};
