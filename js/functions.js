$(function(){
	// Popup windows
	$('body').on('click', '.modal_link', function(e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).attr('href'),
			type : 'inline',
			opts : {
				touch : false,
				speed : 300,
				backFocus : false,
				trapFocus : false,
				autoFocus : false
			}
		})
	})

	// Smooth scrolling to anchor
	$('.m_page_scroll').mPageScroll2id({
		highlightSelector: '.m_page_scroll',
		scrollEasing:"swing",
		scrollingEasing:"swing",
		offset: 35,
	});

	// select
	$('select').niceSelect()

	// Mob menu
	$('body').on('click', 'header .mob_menu_link', function(e) {
    	e.preventDefault()

		$('header .menu, .mob_close').addClass('show')
		$('body').addClass('hide')
    })

    $('body').on('click', '.mob_close', function(e) {
    	e.preventDefault()

		$('header .menu, .mob_close').removeClass('show')

        $('body').removeClass('hide')
    })

	if( $(window).width() < 768 ) {
    	$("header .mail").clone().appendTo("header .menu");
	}
})


$(window).load(function() {
	// Preloader
	setTimeout(function(){
		$('#before-load').find('.before-load-video').fadeOut().end().delay(400).fadeOut('slow');
	}, 500)
});