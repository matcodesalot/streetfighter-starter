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
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
		{"left": "1080px"}, 500,
		function() {
			$(".hadouken").hide();
			$(".hadouken").css("left", "540px");
		}); //this ); closes off the .animate
	})
	.mouseup(function() {
		//console.log("mouseup");
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
	})
});

function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}