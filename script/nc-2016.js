require('./../style/nc-2016.scss');

var $ = require('jquery');

$(function() {
  $('body').append(require('./../template/nc-2016.html'));
  initIcons();
});


function initIcons() {
  ['mail', 'vk'].forEach(function(iconName) {
    var glyph = require('./../assets/' + iconName + '.svg');
    $('.nerd-camp__icon_' + iconName).append('<svg style="width: 18px; height: 18px;"><use xlink:href="'+ glyph + '"/></svg>');
  });
}
