$(document).ready(function(){

	//intro animation
	$("img:even").addClass("animated fadeIn");
	$("img:odd").addClass("animated fadeIn");

	//thumbnails effects
	$(".col").hover(function(){
		$(this).children("a").children("p").css("visibility", "visible");
		$(this).children("a").children("img").css("filter", "brightness(50%)");
	}, function(){
		$(this).children("a").children("p").css("visibility", "hidden");
		$(this).children("a").children("img").css("filter", "brightness(100%)");
	});

});