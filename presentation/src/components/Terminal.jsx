const React = require('react');

module.exports = function (props) {
  return (
    <div className="window terminal slide__item--flex">
      <div className="header">
        <span className="bullet bullet-red"></span>
        <span className="bullet bullet-yellow"></span>
        <span className="bullet bullet-green"></span>
        <span className="title">{'~/server.js'}</span>
      </div>
      <div className="body">
        {props.children}
      </div>
    </div>
  );
};
