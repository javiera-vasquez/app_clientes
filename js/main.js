
$('body').flowtype({
    minimum   : 320,
    maximum   : 1200,
    minFont   : 14,
    maxFont   : 22,
    fontRatio : 30
});

$('.box').on('click', function(){
   $('.toggle',this).slideToggle('fast');
});

$('input').blur(function()
{
    if( $(this).val().length >= 1 ) {
        $(this).addClass('full');
    }
});

$('.open-menu').click(function(){
	$( '.super-container' ).animate({
		left:'-=50%'
	},400 );
	$(this).css('display','none');
	$('.close-menu').css('display','block');
});
$('.close-menu').click(function(){
	$( '.super-container' ).animate({
		left:'+=50%'
	},400 );
	$(this).css('display','none');
	$('.open-menu').css('display','block');
});

$('.desplegable').click(function(){
	$('.orden-oculto',this).slideToggle('fast');
})

$('.buttons-orden div').click(function(){
	$('.detalles-ocultos',this).slideToggle('fast');
})

$('.direccion-servicio').click(function(){
	$('.oculto',this).slideToggle('fast');
})

// Doble show map wit scroll
$('.overlay').addClass('none')

$('.overlay').click(function(){
    $('#mapa iframe').animate({
        height: '280px'
    },400 );
    $('.btn-route').delay(500).show(0)
    $('.overlay').delay(1000).hide(0)
    $('.overlay').removeClass('none')
})

if ($('.overlay').hasClass('none')) {
    $('.ver-mapa').click(function(){
        $('#mapa iframe').animate({
            height: '280px'
        },400 );
        $('.btn-route').delay(500).show(0)
        $('.overlay').delay(1000).hide(0)
    })
}


/* Fix Height */

var alto = $(window).height();
var altoIgualar = $('.container-left').height();
$('.container-right').css('min-height',alto);
$('.container-right').css('height',altoIgualar);
$('.mask').css('height',alto);
$('.mapa-grande').css('height',alto);
$(".closeSession").css('top', alto - 40);


// Swipe

$(function() {
  //Enable swiping...
  $("#test").swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      $(this).text("You swiped " + direction );
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
     threshold: 75
  });
});

















