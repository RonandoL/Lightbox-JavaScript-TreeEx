//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div');
var $image = $('<img>');
var $caption = $('<p></p>');

$overlay.append($image);
$('body').append($overlay);
  // add caption
$overlay.append($caption);

// capture click event on link to image
$('#imageGallery a').click(function(event) {
  event.preventDefault();

  var imageLocation = $(this).attr('href');
  $image.attr("src", imageLocation);

  // show overlay
  $overlay.show();

  // add alt tag (image is child of the link)
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText);
});

// when overlay is clicked
$overlay.click(function() {
  $overlay.hide();
});
