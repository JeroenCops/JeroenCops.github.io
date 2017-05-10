$(document).ready(function(){
  var width = $(window).width();
  var minWidth = 1064;
  var brandName = $('.masthead-brand');

  if ( width < minWidth) {
    brandName.html("<img src='/assets/jeroen_cops.png'>");
    brandName.css("width", "80px");
  } else {
    brandName.html("<img src='/assets/jeroen_cops.png'>Jeroen Cops");
  }

  $('.page-nav a').click(function(e) {
    e.preventDefault();

    $('.tab-content').removeClass('show');
		$('.page-nav li').removeClass('active');

    $($(this).attr('href')).addClass('show');
    $(this).parents('li').addClass('active');
  });
  $('.thumbnail-crop a').click(function(e) {
    var category = $(this).data("article");
    sessionStorage.setItem('activeTab', category);
  });
});
