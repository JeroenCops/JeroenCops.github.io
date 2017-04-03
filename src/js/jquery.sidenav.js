// Toggles the side navigation when the window resizes or a button is pressed.


// Sets the selected menu item active.
$(document).ready(function(){
  var activeTab = sessionStorage.getItem('activeTab');
  console.log("Active: " + activeTab);

  if (activeTab) {
    $('.post-content').removeClass('show');
    $(activeTab).addClass('show');
  }

  $( "header > i" ).click(function() {
    console.log("toggle");
  });

  $('.side-nav > ul > li > a').click(function(e) {
    e.preventDefault();
    sessionStorage.setItem('activeTab', $(this).attr('href'));
    activeTab = sessionStorage.getItem('activeTab');

    $('.post-content').removeClass('show');
		$('.side-nav > ul > li').removeClass('active');

    $(activeTab).addClass('show');
    $(this).parents('li').addClass('active');
  });
});
