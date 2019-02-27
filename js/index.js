$(document).ready(()=>{

	var ready = false; //var that activates effects

	//intro animation
	$(".title").css("visibility", "visible").css("animation-duration", "4s").addClass("animated fadeIn");
	$("#btn1").css("visibility", "visible").addClass("animated fadeInUp");
	setTimeout(()=>{
		$("#btn2").css("visibility", "visible").addClass("animated fadeInDown");
	}, 750);
	setTimeout(()=>{
		$("#btn3").css("visibility", "visible").addClass("animated fadeInUp");
	}, 1500);
	setTimeout(()=>{
		$("button").removeClass("animated fadeInUp fadeInDown").addClass("animated pulse");
		$("h1").addClass("invert");
		$("h2").css("animation-duration", "2s").addClass("animated flash");
	}, 2000);
	setTimeout(()=>{
		$("h1").removeClass("invert");
		$("h2").removeClass("animated fadeIn");
		ready = true;
	}, 3000	);

	//title effects
	$("h1").hover(()=>{
		if(ready){
			$("h1").addClass("invert");
			$("h2").addClass("animated flash");
		}
	}, ()=>{
		if(ready){
			$("h1").removeClass("invert");
			$("h2").removeClass("animated flash");
		}
	});

	//btns effects
	$("button").hover(function(){
		$(this).css("border-color", "magenta");
	}, function(){
		$(this).css("border-color", "cyan");		
	});

});