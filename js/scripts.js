$(document).ready(function() {
	// Animation on scroll
	var controller = $.superscrollorama();
	// individual element tween examples
	controller.addTween('.bng1', TweenMax.from( $('.bng1'), .5, {css:{right: '100%'}}), 500, -100);
	controller.addTween('.bng2', TweenMax.from( $('.bng2'), 1, {css:{paddingTop: '600px'}}), 0, 100);
	controller.addTween('.bng3', TweenMax.from( $('.bng3'), .5, {css:{left: '100%'}}), 500, -100);
	controller.addTween('.bng4', TweenMax.from( $('.bng4'), .5, {css:{right: '100%'}}), 500, -300);
	controller.addTween('.bng5', TweenMax.from( $('.bng5'), .5, {css:{right: '100%'}}), 500, -300);
	controller.addTween('.bng6', TweenMax.from( $('.bng6'), .5, {css:{left: '100%'}}), 500, -300);
	controller.addTween('.bng7', TweenMax.from( $('.bng7'), .5, {css:{right: '100%'}}), 500, -300);
	controller.addTween('.bng8', TweenMax.from( $('.bng8'), .5, {css:{right: '100%'}}), 500, -100);
	controller.addTween('.bng9', TweenMax.from( $('.bng9'), 1, {css:{paddingTop: '600px'}}), 0, 100);
});


$(window).load(function(){
	// Printable text
	$(".main-section .text .typed .title span").typed({
		strings: [$(".typed-strings .title").html()],
	    // Show cursor
	    showCursor: true,
	    typeSpeed: 70,
    	startDelay: 2000,

    	callback: function () {
		    $(".main-section .text .typed .title .typed-cursor").hide();
		},
    });
	$(".main-section .text .typed .subtitle span").typed({
		strings: [$(".typed-strings .subtitle").html()],

	    showCursor: true,
	    typeSpeed: 70,

    	startDelay: 3500,
    	preStringTyped: function () {
		    $(".main-section .text .typed .subtitle .typed-cursor").addClass('visible');
    	},

    	callback: function () {
		    $(".main-section .text .typed .subtitle .typed-cursor").hide();
		},
    });
})