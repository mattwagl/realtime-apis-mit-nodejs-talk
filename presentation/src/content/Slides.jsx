const React = require('react');

const toc = require('./toc');

function renderSlide (slide, index) {
  if (typeof slide === 'string') {
    return <section key={index} dangerouslySetInnerHTML={{__html: slide}}></section>;
  } else {
    return <section key={index}>{React.createElement(slide)}</section>;
  }
};

function Slides (props) {
  return <div className='slides'>{toc.map(renderSlide)}</div>;
};

module.exports = Slides;
