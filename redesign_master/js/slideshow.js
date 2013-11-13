// slideshow.js

$(document).ready(init);

function init() {
	// now to use the cycle plugin
	$(".testimonials").cycle({
		pause: 9,
		timeout: 10000,
		prev:    '.prev',
        next:    '.next',
        pager:   '#nav',
        pagerAnchorBuilder: pagerFactory

	});	
	function pagerFactory(idx, slide) {
        var s = idx > 2 ? ' style="display:none"' : '';
        return '<li'+s+'><a href="#">'+(idx+1)+'</a></li>';
    };
}