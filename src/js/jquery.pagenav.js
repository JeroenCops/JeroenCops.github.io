$(document).ready(function(){
  $('.page-nav a').click(function(e) {
    e.preventDefault();
		$('.page-nav li').removeClass('active');
    $(this).parents('li').addClass('active');
    moveMarker();
  });
});
