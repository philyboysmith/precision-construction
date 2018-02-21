$(document).ready(function() {
    var $grid = $('.c-portfolio__list');
    $grid.imagesLoaded( function() {
        $grid.masonry({
            itemSelector: '.c-portfolio__item',
            percentPosition: true
        });
    });
    $('.popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', 
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});
});
