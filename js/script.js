/* Author:

*/

(function(){

/*	$('.nav-link').hover(
		function() {
			var $this = $(this);
			$this.text($this.data("cn"));
		},
		function() {
			var $this = $(this);
			$this.text($this.data("en"));
		}
	);
*/

	var $main = $("#main"),
		$logo = $("#logo"),
		$container = $(".content-container"),
		logo_top_offset = $logo.position().top + $logo.height(),
		window_height = $(window).height();

	$main.css('height', window_height);  // fix css3 animation
	$container.css('max-height', Math.min(window_height * 0.8, window_height - $("nav").height()));

	$('.nav-link').on('click', function(event) {
		event.preventDefault();
		if ($(".content:hidden").length != $(".content").length) {
			return;
		}
		var $this = $(this),
			target = $this.data("en").toLowerCase(),
			duration = 1200,
			overlay = $('<div class="overlay"> </div>');

		$('nav').after(overlay);
		overlay.on('click', closeFolder);

		$this.text($this.data("cn")).addClass("active");
		$(".nav-link:not(.active)").addClass("disabled");

		$main.animate(
			{"top": - logo_top_offset * 0.85, "height": "+=" + logo_top_offset},
			duration
		);
		$("#" + target).show();
		$container.animate({'height': 'show'}, duration);
		overlay.fadeTo(duration, 0.5);
	});

	function closeFolder() {
		var duration = 1200,
			activeLabel = $(".nav-link.active"),
			activeLabelName = activeLabel.data("en");

		activeLabel.text(activeLabelName);
		$(".nav-link").removeClass("active disabled");
		$(this).fadeOut(duration, function() {
			$(this).remove();
		});
		$container.animate({'height': 'hide'}, duration, function() {
			$("#" + activeLabelName.toLowerCase()).hide();
		});
		$main.animate(
			{"top": 0, "height": "-=" + logo_top_offset},
			duration
		);
	}



}());



