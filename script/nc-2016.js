require('./../style/nc-2016.scss');

var $ = require('jquery');

var React = require('react');
var render = require('react-dom').render;

$(function() {
  $('body').append(require('./../template/nc-2016.html'));
  initIcons();

  var gallery = require('./photo-gallery.jsx');
  const PHOTO_SET = require('./photo-set-constant');
  gallery(PHOTO_SET);

  // console.log('Gallery', Gallery);
  // var gallery = React.createElement(Gallery.name, {});
  // debugger;
  // gallery.setState({photos: PHOTO_SET});
  //
  // render(
  //   gallery,
  //   document.getElementById('past-events-gallery-placeholder')
  // );

  // export default class Sample extends React.Component {
  //   render() {
  //     return (
  //       <Gallery photos={PHOTO_SET} />
  //   );
  //   }
  // }

});

function initIcons() {
  ['mail', 'vk'].forEach(function(iconName) {
    var glyph = require('./../assets/' + iconName + '.svg');
    $('.nerd-camp__icon_' + iconName).append('<svg style="width: 18px; height: 18px;"><use xlink:href="'+ glyph + '"/></svg>');
  });
}
