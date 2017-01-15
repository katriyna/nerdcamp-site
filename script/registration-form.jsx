var React = require('react');

var ModalContainer = require('react-modal-dialog').ModalContainer;
var ModalDialog = require('react-modal-dialog').ModalDialog;

var NCRegistrationFormButton = React.createClass({

  propTypes: {},

  getInitialState: function () {
    return {
      dialogIsShown: false
    };
  },

  closeDialog: function() {
    this.setState({dialogIsShown: false});
  },

  openDialog: function() {
    this.setState({dialogIsShown: true});
  },

  render: function() {
    var GOOGLE_FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSdBgbM_p2O6lERKYFtfUac2FNySmFJjRgm5kAgJ7LshRfr9fQ/viewform?embedded=true';

    return(
      <span>
        <span className="nerd-camp__link" onClick={this.openDialog}>Зарегистрироваться</span>
        {
          this.state.dialogIsShown &&
          <ModalContainer onClose={this.closeDialog}>
            <ModalDialog onClose={this.closeDialog}>
              <iframe src={GOOGLE_FORM_LINK} width="760" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Загрузка...</iframe>
            </ModalDialog>
          </ModalContainer>
        }
      </span>
    );
  }
});

module.exports = NCRegistrationFormButton;