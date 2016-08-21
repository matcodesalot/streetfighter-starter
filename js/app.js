$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		//alert("mouse entered .ryu div");
		$(".ryu-still").hide();
		$(".ryu-ready").show();
		$(".ryu-cool").hide();
	})
	.mouseleave(function() {
		//alert("bye bye mousey");
		$(".ryu-still").show();
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
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
	});

	$(document).keydown(function(event) {
		if(event.which == 88) {
			//console.log("the x key has been pressed");
			$(".ryu-cool").show();
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
		}
	})
	.keyup(function(event) {
		if(event.which == 88) {
			//console.log("we released the x key");
			$(".ryu-cool").hide();
			$(".ryu-still").show();
			$(".ryu-ready").hide();
		}
	});
});

function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}