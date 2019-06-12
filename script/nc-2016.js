require('./../style/nc-2016.scss');

var $ = require('jquery');
require('jquery.scrollto');

$(function() {
  $('body').append(require('./../template/nc-2016.html'));

  var header = require('./sticky-header.jsx');
  header();

  initIcons();
  //initVKWidget();

  var gallery = require('./photo-gallery.jsx');
  var PHOTO_SET = require('./photo-set-constant');
  gallery(shuffle(PHOTO_SET));

  var corusel = require('./title-corusel.jsx');
  corusel();

  var nerdSmile = require('./nerd-smile.jsx');
  nerdSmile();

  var pastNerdCamps = require('./past-nerd-camps-list.jsx');
  pastNerdCamps();

  // var tagCloud = require('./tag-cloud.jsx');
  // tagCloud();

  // var schedule = require('./schedule.jsx');
  // schedule();

  initSmoothNavigation();
});

function initIcons() {
  ['mail', 'facebook'].forEach(function(iconName) {
    var glyph = require('./../assets/' + iconName + '.svg');
    $('.nerd-camp__icon_' + iconName).append(glyph);
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

function initSmoothNavigation() {
  var duration = 500;

  function initForSectionId(sectionId) {
    $('.nerd-camp__link_' + sectionId).on('click', function() {
      $(window).scrollTo($('#' + sectionId), duration);
    });
  }

  initForSectionId('about-nerd-camp');
  initForSectionId('past-nerd-camps');
  initForSectionId('speakers');
}

function initVKWidget() {
  $.getScript('https://vk.com/js/api/openapi.js?136', function() {
    window.VK.Widgets.Group("vk_groups", {mode: 3, width: "280"}, 137331637);
  });
}
