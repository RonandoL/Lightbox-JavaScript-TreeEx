//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div');
var $image = $('<img>');
var $caption = $('<h3></h3>');

$overlay.append($image);
$('body').append($overlay);
$overlay.append($caption);

// capture click event on link to image
$('#imageGallery a').click(function(event) {
  event.preventDefault();

  var imageLocation = $(this).attr('href');
  $image.attr('src', imageLocation);

  $overlay.show();

  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText);
});

$overlay.click(function() {
  $overlay.hide();
});











//
