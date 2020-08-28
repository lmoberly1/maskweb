$(document).ready(function() {
 
    $('.color-choose input').on('click', function() {
        var style = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + style + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });