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
}());



