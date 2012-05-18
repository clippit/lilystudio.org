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
		logo_top_offset = $logo.position().top;

	$container.css({
		'margin-bottom': logo_top_offset,
		'max-height': $(document).height() * 0.75
	});
		
	$('.nav-link').on('click', function(event) {
		event.preventDefault();
		var $this = $(this),
			target = $this.data("en").toLowerCase(),
			duration = 1000;
		$main.animate(
			{"top": - logo_top_offset, "height": "+=" + logo_top_offset},
			duration
		);
		$("#" + target).show();
		$container.animate({
			'height': 'show',
			'margin-bottom': '-=' + logo_top_offset / 1.5
			}, duration
		);
	});

}());



