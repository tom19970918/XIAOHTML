$(document).ready(function () {
	$('p').click(function (e) { 
		e.preventDefault();
		$('h1,p').toggle();
	});
	
});