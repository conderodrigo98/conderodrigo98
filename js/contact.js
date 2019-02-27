$(document).ready(()=>{
	
	//intro animation
	$("h3").addClass("animated fadeIn");
	$("#i1").addClass("animated fadeInUp");
	$("#i2").addClass("animated fadeInDown");
	$("#i3").addClass("animated fadeInUp");

	//contact effects
	$("#i1").hover(function(){
		$("h4").css("visibility", "visible").addClass("animated fadeIn");
		$("h4").html("Send my an email at<br>conderodrigo98@gmail.com!");
	}, function(){
		$("h4").css("visibility", "hidden").removeClass("animated fadeIn");
	});
	$("#i2").hover(function(){
		$("h4").css("visibility", "visible").addClass("animated fadeIn");
		$("h4").html("Find me on LinkedIn as<br>Rodrigo Conde Clavijo!");
	}, function(){
		$("h4").css("visibility", "hidden").removeClass("animated fadeIn");
	});
	$("#i3").hover(function(){
		$("h4").css("visibility", "visible").addClass("animated fadeIn");
		$("h4").html("View all my coding projects!<br>@conderodrigo98 on github");
	}, function(){
		$("h4").css("visibility", "hidden").removeClass("animated fadeIn");
	});

});