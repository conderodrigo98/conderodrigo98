$(document).ready(()=>{

	var ready = false;

	//intro animation
	$("h1").addClass("animated fadeIn");
	$("#home").children().css("animation-delay", "0.5s").addClass("animated flipInX");
	$("#about").children().css("animation-delay", "1s").addClass("animated flipInX");
	$("#projects").children().css("animation-delay", "1.5s").addClass("animated flipInX");
	$("#contact").children().css("animation-delay", "2s").addClass("animated flipInX");
	setTimeout(()=>{
		$("h1").removeClass("animated fadeIn");
	}, 2500);

	//title effects
	$("h1").hover(()=>{
		$("h1").addClass("invert");
		$("h2").addClass("animated flash");
	}, ()=>{
		$("h1").removeClass("invert");
		$("h2").removeClass("animated flash");
	});

	//buttons effects
	$(".sideBtn").hover(function(){
		$(this).css("background-color", "magenta").css("text-align", "right");
	}, function(){
		$(this).css("background-color", "white").css("text-align", "left");
	});

});