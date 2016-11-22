const React = require('react');

const ArrowLeft = function (props) {
  return (
    <svg className={`arrow arrow--${props.type}`} width='100%' height='14px' viewBox='0 0 600 14' preserveAspectRatio='xMaxYMid slice'>
      <line className='arrow__line' x1='1' y1='7' x2='699' y2='7'/>
      <polyline className='arrow__head' points='6,12 1,7 6,2 '/>
    </svg>
  );
};

const ArrowRight = function (props) {
  return (
    <svg className={`arrow arrow--${props.type}`} width='100%' height='14px' viewBox='0 0 600 14' preserveAspectRatio='xMaxYMid slice'>
      <line className='arrow__line' x1='1' y1='7' x2='599' y2='7'/>
      <polyline className='arrow__head' points='594,2 599,7 594,12 '/>
    </svg>
  );
};

const Step = function (props) {
  return (
    <div className={`step step--${props.type} ${props.fragment ? 'fragment': ''}`}>
      { props.description ? <div className='description'>{props.description}</div> : <div className='description'>{props.children}</div> }
      { props.arrow ? props.arrow : null }
    </div>
  );
};

const Sequence = function (props) {
  return (
    <div className='client-server-sequence slide__item--flex'>
      <div className='header'>
        <div className='client'>💻</div>
        <div className='server'>🌩</div>
      </div>
      <div className='steps'>
        {props.children}
      </div>
    </div>
  );
};


module.exports = { Sequence, Step, ArrowLeft, ArrowRight }
