;(function($){
	"use strict";
	$(document).ready(function(){
		$('.ba-tabs__list').on('click', 'a', function(evt){
			evt.preventDefault();


			$('.ba-tabs__list-item').removeClass('ba-tabs__list-item--active');
			$(this).addClass('ba-tabs__list-item--active');



// для data-tab

			var $tab_id = $(this).data('tab');
			$('.ba-tabs__item').removeClass('ba-tabs__item--active');
			$('.ba-tabs__item[data-tab="' + $tab_id + '"]').addClass('ba-tabs__item--active');


			// var $tab_id_head = $(this).attr("href");




		});

	});

})(jQuery);
