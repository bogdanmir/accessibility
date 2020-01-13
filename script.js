jQuery(function($) {
	$('body').on('click', '.toggle-pojo', function(event) {
		$('.table-of-contents').toggleClass('display');
	});
	$('body').on('click', '.table-of-contents .items [data-disabled]', function(event) {
		var disabled = $(this).attr('data-disabled');
		if(disabled != 'reset'){
			$('.table-of-contents .items [data-disabled]').each(function(index, el) {
				var itemdisabled = $(el).attr('data-disabled');
				if(itemdisabled != disabled){
					if(itemdisabled != 'text_plus' && itemdisabled != 'text_minus' && itemdisabled != 'font_transform' && itemdisabled != 'links_decorate'){
						$('body').removeClass(itemdisabled);
						$(el).removeClass('active');
					}
				}
			});
			if(disabled != 'text_plus' && disabled != 'text_minus'){
				$(this).toggleClass('active');
				$('body').toggleClass(disabled);
			}else{
				var text_size = Number((typeof $('body').attr('data-text_size') !== 'undefined') ? $('body').attr('data-text_size') : 0);
				if(disabled == 'text_plus'){
					text_size++;
				}
				if(disabled == 'text_minus'){
					text_size--;
				}
				for (var i = 1; i < 10; i++) {
					$('body').removeClass("text-size-"+i);
				}
				if(text_size == 10){
					text_size = 9;
				}
				if(text_size <= 0){
					text_size = 1;
				}
				$(this).toggleClass('active');
				$('body').addClass("text-size-"+text_size);
				$('body').attr('data-text_size',text_size);
			}
		}else{
			var text_size = Number((typeof $('body').attr('data-text_size') !== 'undefined') ? $('body').attr('data-text_size') : 0);
			for (var i = 1; i < 10; i++) {
				$('body').removeClass("text-size-"+i);
			}
			$('.table-of-contents .items [data-disabled]').each(function(index, el) {
				var itemdisabled = $(el).attr('data-disabled');
				if(itemdisabled != 'text_plus' && itemdisabled != 'text_minus'){
					$('body').removeClass(itemdisabled);
					$(el).removeClass('active');
				}
			});
			$(this).removeClass('active');
		}
		return false;
	});
});