var  mn = $(".projecthead");
    mns = "projecthead-scrolled";
    hdr = $('.masthead').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > 52 ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});
