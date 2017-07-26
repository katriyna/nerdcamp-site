var React = require('react');

var NCRegistrationFormButton = React.createClass({

  propTypes: {},

  getInitialState: function () {
    return {
      dialogIsShown: false
    };
  },

  openDialog: function() {
    var GOOGLE_FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSdMMMj6X5M0gWVgptci8pziZ8Ak1cNpaw0nHPgR_ac0NVBRZQ/viewform';
    window.open(GOOGLE_FORM_LINK, '_blank');
  },

  render: function() {

    return(
      <span>
        <span className="nerd-camp__link" onClick={this.openDialog}>Зарегистрироваться</span>
      </span>
    );
  }
});

module.exports = NCRegistrationFormButton;