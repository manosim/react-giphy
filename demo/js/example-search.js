var React = require('react');
var ReactGiphy = require('../../');

var ExampleSearch = React.createClass({
  render: function() {
    return (
      <ReactGiphy search='game of thrones' />
    );
  }
});

React.render(<ExampleSearch />, document.getElementById('example-search'));
