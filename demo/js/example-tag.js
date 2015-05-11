var React = require('react');
var ReactGiphy = require('../../');

var ExampleTag = React.createClass({
  render: function() {
    return (
      <ReactGiphy tag='llama' />
    );
  }
});

React.render(<ExampleTag />, document.getElementById('example-tag'));
