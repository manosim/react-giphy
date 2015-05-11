var React = require('react');
var ReactGiphy = require('../../');

var ExampleRandom = React.createClass({
  getInitialState: function () {
    return {
      loading: true
    };
  },

  toggleLoading: function () {
    this.setState({
      loading: !this.state.loading
    });
  },

  render: function() {
    return (
      <ReactGiphy />
    );
  }
});

React.render(<ExampleRandom />, document.getElementById('example-random'));
