$(document).ready(function () {
	$('.name').hover(function () {
			// over
			$(".name h1").css("font-size","24px");
			$(".name p").css("font-size","46px");
		}, function () {
			// out
			$(".name h1").css("font-size","46px");
			$(".name p").css("font-size","24px");
	});

	$('.show_menu_2').click(function (e) { 
		e.preventDefault();
		$('.menu_2').toggleClass('active');
	});
});
