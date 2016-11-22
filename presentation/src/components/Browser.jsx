const React = require('react');

module.exports = function (props) {
  return (
    <div className="window browser slide__item--flex">
      <div className="header">
        <span className="bullet bullet-red"></span>
        <span className="bullet bullet-yellow"></span>
        <span className="bullet bullet-green"></span>
        <span className="title"><span className="scheme">https://</span>realtime-app.io</span>
      </div>
      <div className="body">
        {props.children}
      </div>
    </div>
  );
};
