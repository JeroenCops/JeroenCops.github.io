// Sets the selected menu item active.
$(document).ready(function(){
  $('.page-nav a').click(function(e) {
    e.preventDefault();

    $('.tab-content').removeClass('show');
		$('.page-nav li').removeClass('active');

    $($(this).attr('href')).addClass('show');
    $(this).parents('li').addClass('active');
  });
});
