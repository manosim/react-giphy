var React = require('react');
var ReactGiphy = require('../../');

var ExampleRandom = React.createClass({
  render: function() {
    return (
      <ReactGiphy />
    );
  }
});

React.render(<ExampleRandom />, document.getElementById('example-random'));
