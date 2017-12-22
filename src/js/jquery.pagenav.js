$(document).ready(function(){
  var width = $(window).width();
  var minWidth = 1064;
  var brandName = $('.masthead-brand');

  $( window ).resize(function() {
    width = $(window).width();
    if ( width < minWidth ) {
      brandName.html("<img src='/assets/jeroen_cops.png'>");
      brandName.css("width", "80px");
    } else {
      brandName.html("<img src='/assets/jeroen_cops.png'>Jeroen Cops");
      brandName.css("width", "230px");
    }
  }

  )
  if ( width < minWidth ) {
    brandName.html("<img src='/assets/jeroen_cops.png'>");
    brandName.css("width", "80px");
  } else {
    brandName.html("<img src='/assets/jeroen_cops.png'>Jeroen Cops");
    brandName.css("width", "230px");
  }

  $('.page-nav a').click(function(e) {
    e.preventDefault();

    $('.tab-content').removeClass('show');
		$('.page-nav li').removeClass('active');

    $($(this).attr('href')).addClass('show');
    $(this).parents('li').addClass('active');
  });
  // This takes the article tag and save the variable for the current session
  $('.get-category a').click(function(e) {
    var category = $(this).data("article");
    sessionStorage.setItem('activeTab', category);
  });
});
