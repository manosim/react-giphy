var React = require('react');
var request = require('superagent');

module.exports = React.createClass({

  displayName: 'ReactGiphy',

  getInitialState: function () {
    return {
        gif: undefined
    };
  },

  componentWillMount: function () {
    var self = this;

    request
      .get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
      .set('Host', 'api.giphy.com')
      .end(function (err, response) {
        if (response.body.meta.status == 200) {
          self.setState({
            gif: response.body.data[0].images.downsized.url
          });
        }
      });
  },

  render: function () {
    return (
      React.createElement("img", {
        src: this.state.gif,
        style: {
          display: 'block',
          margin: '10px auto',
          maxWidth: '100%'
        }
      }, '')
    );

  }

});
