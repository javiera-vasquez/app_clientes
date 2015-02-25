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
$('.detail-account, .paybox').on('click', function() {
    if($('.dropdown ul').is(":visible") == true) {
        $('.dropdown ul').hide();
    }
})


// Swipe
// $(function() {
//   //Enable swiping...
//   $("#test").swipe( {
//     //Generic swipe handler for all directions
//     swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//       $(this).text("You swiped " + direction );
//     },
//     //Default is 75px, set to 0 for demo so any distance triggers swipe
//      threshold: 75
//   });
// });

















