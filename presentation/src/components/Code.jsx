const React = require('react');

module.exports = function (props) {
  return (
    <pre>
      <code className={`${props.language || 'javascript'} ${props.theme || 'light'}`}
            data-noescape dangerouslySetInnerHTML={{__html: props.src}}>
      </code>
    </pre>
  );
};
