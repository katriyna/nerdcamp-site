require('./../style/nc-2016.scss');

var $ = require('jquery');

$(function() {
  $('body').append(require('./../template/nc-2016.html'));
  initIcons();

  var gallery = require('./photo-gallery.jsx');
  const PHOTO_SET = require('./photo-set-constant');
  gallery(shuffle(PHOTO_SET));

  var tagCloud = require('./tag-cloud.jsx');
  tagCloud();
});

function initIcons() {
  ['mail', 'vk'].forEach(function(iconName) {
    var glyph = require('./../assets/' + iconName + '.svg');
    $('.nerd-camp__icon_' + iconName).append('<svg style="width: 18px; height: 18px;"><use xlink:href="'+ glyph + '"/></svg>');
  });
}

function shuffle(array) {
  const resultArray = [];
  array.forEach(function(arrayItem) {
    resultArray.push(arrayItem);
  });
  for (var i = resultArray.length; i > 0; --i) {
    const j = Math.floor(Math.random() * i);
    const buff = resultArray[i - 1];
    resultArray[i - 1] = resultArray[j];
    resultArray[j] = buff;
  }
  return resultArray;
}