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
    if (this.props.tag) {
      this.gifTag(this.props.tag);
    } else if (this.props.search) {
      this.gifSearch(this.props.search);
    } else {
      this.gifRandom();
    }
  },

  gifRandom: function () {
    var self = this;
    var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';

    request
      .get(url)
      .set('Host', 'api.giphy.com')
      .end(function (err, response) {
        var gifUrl = response.body.data.image_url || undefined;
        if (response.body.meta.status == 200 && gifUrl) {
          self.setState({
            gif: gifUrl
          });
        }
      });
  },

  gifTag: function (tag) {
    var self = this;
    var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
    url = tag ? url + '&tag=' + tag : url;

    request
      .get(url)
      .set('Host', 'api.giphy.com')
      .end(function (err, response) {
        var gifUrl = response.body.data.image_url || undefined;
        if (response.body.meta.status == 200 && gifUrl) {
          self.setState({
            gif: gifUrl
          });
        }
      });
  },

  gifSearch: function (keywords) {
    var self = this;
    var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC';
    url = keywords ? url + '&q=' + keywords.replace(' ', '+') : url;

    request
      .get(url)
      .set('Host', 'api.giphy.com')
      .end(function (err, response) {
        var gifUrl = response.body.data[0].images.downsized.url || undefined;
        if (response.body.meta.status == 200 && gifUrl) {
          self.setState({
            gif: gifUrl
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
