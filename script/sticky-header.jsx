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
      isFixed: false,
      height: null
    };
  },

  getScrollHandler: function(node) {
    var DEBOUNCE_INTERVAL = 10;
    var self = this;

    var savedToolbarTop;
    if (!this.toolbarScrollListener) {
      this.toolbarScrollListener = debounce(function () {
        var scrolledTop = (window.document.documentElement && window.document.documentElement.scrollTop) || window.document.body.scrollTop;
        var elementTop = node.getBoundingClientRect().top + scrolledTop;
        var toolbarTop = savedToolbarTop || elementTop;
        if (scrolledTop > toolbarTop && !savedToolbarTop) {
          savedToolbarTop = toolbarTop;
          //save height to style to prevent collapsing after fixing controls
          self.setState({isFixed: true, height: node.offsetHeight + 'px'});
        } else if (scrolledTop <= toolbarTop && savedToolbarTop >= 0) {
          savedToolbarTop = null;
          self.setState({isFixed: false, height: null});
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
    var className = '';
    if (window.innerWidth > 600) {
      className = 'nerd-camp__sticky-panel';
      if (this.state.isFixed) {
        className += ' nerd-camp__sticky-panel_fixed';
      }
    } else {
      className = 'nerd-camp__no-sticky-panel';
    }
    var style = this.state.height ? {height: this.state.height} : {};

    return (
      <div style={style}>
        <div className={className} ref="contentPlaceholder">
          <span className="nerd-camp__link nerd-camp__link_about-nerd-camp">
            О формате
          </span>
          <span className="nerd-camp__link nerd-camp__link_speakers">
            Доклады
          </span>
          <span className="nerd-camp__link nerd-camp__link_past-nerd-camps">
            Прошедшие выезды
          </span>

          <span className="nerd-camp__pull-right">
              <span>
                  <a href="mailto:nerdcamp.info@gmail.com" target="_blank" className="nerd-camp__link nerd-camp__icon_mail"></a>
              </span>
              <span>
                  <a href="https://vk.com/nc2017" target="_blank" className="nerd-camp__link nerd-camp__icon_vk"></a>
              </span>
              <span>
                  <a href="https://telegram.me/nerdcamp2017" target="_blank" className="nerd-camp__link nerd-camp__icon_telegram"></a>
              </span>
          </span>
        </div>
      </div>
    );
  }
});


module.exports = function() {
  ReactDOM.render(<NCStickyHeader />, document.getElementById('sticky-header-placeholder'));
};
