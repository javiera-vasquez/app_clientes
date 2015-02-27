// Init value for dinamic font size
$('body').flowtype({
    minimum   : 320,
    maximum   : 1200,
    minFont   : 14,
    maxFont   : 22,
    fontRatio : 30
});

// Dropdown
$('.dropdown h3').on('click', function(){
    $('.dropdown ul').slideToggle("fast");
});

// Deselect dropdown on lick outside the drop
$('.detail-account, .paybox, .loop-of-services').on('click', function() {
    if($('.dropdown ul').is(":visible") == true) {
        $('.dropdown ul').hide();
    }
})

// Animate left and right
var active = 'active';
var animationLeft = 'animated slideInLeft';
var animationRight = 'animated slideInRight';
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

// Hide second slide
// $('#tabs-2').hide();

// Show hide slider on click
$('.second-nav li').on('click', function() {
    // Know the ID of the element
    var buttonId = $(this).attr('id');
    // Ask for the active class
    if($(this).hasClass('active')) {
        console.log("I'm active");
    } else {
        $('.second-nav li').removeClass('active');
        // Ask fot the tab and button
        if(buttonId == 'button-tab-1') {
            $(this).addClass('active');
            // Animation
            // $('.slide').hide();
            $('#tabs-1, #tabs-2').addClass(animationLeft).addClass(active).one(animationEnd, function(){
                $(this).removeClass(animationLeft);
            });
        } else if(buttonId == 'button-tab-2') {
            $(this).addClass('active');
            // Animation
            // $('.slide').hide();
            $('#tabs-1, #tabs-2').addClass(animationRight).addClass(active).one(animationEnd, function(){
                $(this).removeClass(animationRight);
            });
        }
    }
});

// Swipe
$(function() {
  //Enable swiping...
  $("#wachtSwipe").swipe( {
    //Generic swipe handler for all directions
    swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
      console.log("You swiped " + direction );
    },
    swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
      console.log("You swiped " + direction );
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
     threshold: 75
  });
});















