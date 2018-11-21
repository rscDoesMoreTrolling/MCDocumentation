$(function () {

  var $panorama = $('.panorama');

  var width = $panorama.width();

  $('.panorama').mousemove(function (e) {
    var offset = e.pageX;
    var percentage = offset / width * 100;

    $panorama.css('background-position', percentage + '% 0');

  });

});