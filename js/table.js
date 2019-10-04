// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depends on browser/os/platfrom. Here we calculate the scollbar width.
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();
