
$(document).ready(function(){

	//nav-menu>submenu	
	$sd = $('ul#menu>li');
	
	$sd.on('click', 'a:first', function(evt){

		evt.preventDefault();
		$t = $(this);

		if($t.parent().is('.active')) {
			$t.parent().addClass('active').find('ul').slideToggle();
		} else {
			//console.log('aqui-teste');
			$sd.removeClass('active').find('ul').slideUp();
			$t.parent().addClass('active').find('ul').slideDown();
		}
    });


});