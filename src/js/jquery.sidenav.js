// Toggles the side navigation when the window resizes or a button is pressed.
$( "#toggle-menu" ).click(function() {

});

// Sets the selected menu item active.
$(document).ready(function(){
  var activeTab = sessionStorage.getItem('activeTab');

  if (activeTab) {
    $('.tab-content').removeClass('show');
    $(activeTab).addClass('show');
  }

  $('.side-nav a').click(function(e) {
    e.preventDefault();
    sessionStorage.setItem('activeTab', $(this).attr('href'));
    activeTab = sessionStorage.getItem('activeTab');

    $('.tab-content').removeClass('show');
		$('.side-nav li').removeClass('active');

    $(activeTab).addClass('show');
    $(this).parents('li').addClass('active');
  });
});
