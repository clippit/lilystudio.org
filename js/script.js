/* Author:

*/

(function(){

	$('.nav-link').hover(
		function() {
			var $this = $(this);
			$this.text($this.data("cn"));
		},
		function() {
			var $this = $(this);
			$this.text($this.data("en"));
		}
	);

	var $main = $("#main"),
		$logo = $("#logo"),
		$container = $(".content-container"),
		logo_top_offset = $logo.position().top + $logo.height();
		window_height = $(window).height();

	$main.css('height', window_height);
	$container.css('max-height', Math.min(window_height * 0.8, window_height - $("nav").height()));

	$('.nav-link').on('click', function(event) {
		event.preventDefault();
		var $this = $(this),
			target = $this.data("en").toLowerCase(),
			duration = 1000;
		$main.animate(
			{"top": - logo_top_offset * 0.85, "height": "+=" + logo_top_offset},
			duration
		);
		$("#" + target).show();
		$container.animate({'height': 'show'}, 1000);
	});

}());



