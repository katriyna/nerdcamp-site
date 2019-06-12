var debounce = require('debounce');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactPropTypes = React.PropTypes;

var NCStickyHeader = React.createClass({
  propTypes: {
    className: ReactPropTypes.string,
    content: ReactPropTypes.object
  },

  getInitialState: function () {
    return {
      hasBorder: false,
      isSmallScreen: window.innerWidth < 600
    };
  },

  getScrollHandler: function(node) {
    var DEBOUNCE_INTERVAL = 10;

    if (!this.toolbarScrollListener) {
      this.toolbarScrollListener = debounce(() => {
        var scrolledTop = (window.document.documentElement && window.document.documentElement.scrollTop) || window.document.body.scrollTop;
        var elementTop = node.getBoundingClientRect().top + scrolledTop;
        if (elementTop && !this.state.hasBorder) {
          this.setState({hasBorder: true, isSmallScreen: window.innerWidth < 600});
        } else if (!elementTop && this.state.hasBorder) {
          this.setState({hasBorder: false, isSmallScreen: window.innerWidth < 600});
        }
      }, DEBOUNCE_INTERVAL);
    }
    return this.toolbarScrollListener;
  },

  componentDidMount: function() {
    if (this.props.content && !this.props.children) {
      this.refs.contentPlaceholder.appendChild(this.props.content);
    }
    window.addEventListener('scroll', this.getScrollHandler(this.refs.contentPlaceholder));
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.getScrollHandler());
  },

  render: function () {
    const {hasBorder, isSmallScreen} = this.state;
    const classNames = ['nerd-camp__sticky-panel'];
    if (hasBorder) {
      classNames.push('nerd-camp__sticky-panel_with-border');
    }
    if (isSmallScreen) {
      classNames.push('nerd-camp__sticky-panel_small-screen');
    }

    return (
      <div className={classNames.join(' ')} ref="contentPlaceholder">
        <span className="nerd-camp__link nerd-camp__link_about-nerd-camp">
          О формате
        </span>
        <span className="nerd-camp__link nerd-camp__link_speakers">
          Доклады
        </span>
        <span className="nerd-camp__link nerd-camp__link_past-nerd-camps">
          Как это было
        </span>

        <span className="nerd-camp__pull-right">
          <span>
              <a href="mailto:nerdcamp.info@gmail.com" target="_blank" className="nerd-camp__link nerd-camp__icon_mail"></a>
          </span>
          <span>
              <a href="https://vk.com/nc2017" target="_blank" className="nerd-camp__link nerd-camp__icon_facebook"></a>
          </span>
        </span>
      </div>
    );
  }
});


module.exports = function() {
  ReactDOM.render(<NCStickyHeader />, document.getElementById('sticky-header-placeholder'));
};
