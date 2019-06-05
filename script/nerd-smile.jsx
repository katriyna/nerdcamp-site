// ___,,,_(＾v＾)_,,,___

var React = require('react');
var ReactDOM = require('react-dom');


var NerdSmile = React.createClass({

  getInitialState: function() {
    return {
      hasFinger: false,
      hasSmile: false,
      hasClosedRightEye: false,
      hasClosedLeftEye: false
    };
  },

  componentDidMount: function() {
    setTimeout(() => {
      this.setState({hasFinger: true});
    }, 500);

    setTimeout(() => {
      this.setState({hasFinger: false});
    }, 1500);

    setTimeout(() => {
      this.setState({hasSmile: true});
      setTimeout(() => {
        this.setState({hasClosedLeftEye: true});
        setTimeout(() => {
          this.setState({hasClosedLeftEye: false});
        }, 1000);
      }, 4000);
    }, 2500);

    setInterval(() => {
      const hasClosedLeftEye = (Math.random() * 10) > 5;
      const hasClosedRightEye = (Math.random() * 10) > 5;
      this.setState({hasClosedLeftEye, hasClosedRightEye});
      setTimeout(() => {
        this.setState({hasClosedLeftEye: false, hasClosedRightEye: false});
      }, 1000);
    }, 10000);
  },

  render: function() {
    const smileChar = this.state.hasSmile ? 'v' : '_';
    const leftEyeChar = this.state.hasClosedLeftEye ? '‾' : '^';
    const rightEyeChar = this.state.hasClosedRightEye ? '‾' : '^';
    const fingerChar = this.state.hasFinger ? '!' : ',';
    const smile =
      `___,,,_(${rightEyeChar}${smileChar}${leftEyeChar})_${fingerChar},,___`;

    return (<span>{smile}</span>)
  }
});


module.exports = function() {
  ReactDOM.render(<NerdSmile/>, document.getElementById('nerd-smile'));
};
