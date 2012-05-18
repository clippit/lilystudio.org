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
		$container = $(".content-container");
		logo_top_offset = $logo.position().top + $logo.height();

	$('.nav-link').on('click', function(event) {
		event.preventDefault();
		var $this = $(this),
			target = $this.data("en").toLowerCase();
		$main.animate(
			{"top": - logo_top_offset, "height": "+=" + logo_top_offset / 2},
			1000
		);
		$("#" + target).show();
		$container.animate({'height': 'show'}, 1000);
	});

}());



