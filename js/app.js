$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		//alert("mouse entered .ryu div");
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		//alert("bye bye mousey");
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	})
	.mousedown(function() {
		//console.log("the mouse has been clicked inside the .ryu div");
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		//play hadouken sound
		//animate hadouken to the right of the screen
	})
	.mouseup(function() {
		//console.log("mouseup");
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
	})
});