$(document).ready(function(){
	console.log('working');
	//when add is clicked
	var logoName = 'LIST-MAKER';
	for (var i = 0;i<1000; i++){
	$('.flashing').fadeToggle(500);
	
	}
		//make the heading look as if it is typed
		var logoName = 'LIST-MAKER';

	//logo animation
	setTimeout(function(){
		$('span.flashing').before(logoName[0]);
	}, 1000);
	setTimeout(function(){
		$('span.flashing').before(logoName[1]);
	}, 1500);
	setTimeout(function(){
		$('span.flashing').before(logoName[2]);
	}, 1575);
	setTimeout(function(){
		$('span.flashing').before(logoName[3]);
	}, 2500);
	setTimeout(function(){
		$('span.flashing').before(logoName[4]);
	}, 2800);
	setTimeout(function(){
		$('span.flashing').before(logoName[5]);
	}, 3200);
	setTimeout(function(){
		$('span.flashing').before(logoName[6]);
	}, 3800);
	setTimeout(function(){
		$('span.flashing').before(logoName[7]);
	}, 4000);
	setTimeout(function(){
		$('span.flashing').before(logoName[8]);
	}, 4500);
	setTimeout(function(){
		$('span.flashing').before(logoName[9]);
	}, 5000);


	$('#add').click(function(){
		//get text of item stpre as item
		var $item = $('input').val();
		//create list item with text as item and edd to list
		$('<li>').text($item).appendTo('.list');
		//empty form
		$('input').val(" ");
		});
	$(window).keydown(function(event){
		if(event.which === 13){
		var $itemTitle = $('input.title').val(),
			$itemDescription = $('input.description').val();
		
		//create list item with text as item and edd to list
		$('<li>').text($itemTitle).prepend('<span class="glyphicon glyphicon-chevron-up up hide" aria-hidden="true"></span><span class="glyphicon glyphicon-chevron-down down hide" aria-hidden="true"></span>').append('<span class="glyphicon glyphicon-pencil edit"></span><span class="glyphicon glyphicon-refresh reorder"></span><span class="glyphicon glyphicon-trash delete" aria-hidden="true"></span>').appendTo('.list');

		//empty form
		$('input').val(" ");
		} 
		else if (event.which === 8) {
		$('.selected').remove();
		}

		else {console.log('o');
		}
	});
	$('body').on("click", 'li', function(){
		$(this).toggleClass('selected');
	});
	$('body').on('click', 'span.edit', function(){
		$(this).prevAll().toggleClass('hide');
		
	});
	$('body').on('click', 'span.delete',function(){
		$(this).parent().hide();
	})
	$('body').on('click', 'span.up',function(){
		var $secondItem = $(this).parent(),
			$secondItemText =$secondItem.text(),
			$firstItem = $(this).parent().prev(),
			$firstItemText= $firstItem.text();
		$firstItem.empty().text($secondItemText).prepend('<span class="glyphicon glyphicon-chevron-up up" aria-hidden="true"></span><span class="glyphicon glyphicon-chevron-down down" aria-hidden="true"></span>').append('<span class="glyphicon glyphicon-refresh edit"></span><span class="glyphicon glyphicon-trash delete" aria-hidden="true"></span>');
		$secondItem.empty().text($firstItemText).prepend('<span class="glyphicon glyphicon-chevron-up up" aria-hidden="true"></span><span class="glyphicon glyphicon-chevron-down down" aria-hidden="true"></span>').append('<span class="glyphicon glyphicon-refresh edit"></span><span class="glyphicon glyphicon-trash delete" aria-hidden="true"></span>');

	})
	$('body').on('click', 'span.down',function(){
		var $secondItem = $(this).parent().next(),
			$secondItemText =$secondItem.text(),
			$firstItem = $(this).parent(),
			$firstItemText= $firstItem.text();
		$firstItem.empty().text($secondItemText).prepend('<span class="glyphicon glyphicon-chevron-up up" aria-hidden="true"></span><span class="glyphicon glyphicon-chevron-down down" aria-hidden="true"></span>').append('<span class="glyphicon glyphicon-refresh edit"></span><span class="glyphicon glyphicon-trash delete" aria-hidden="true"></span>');
		$secondItem.empty().text($firstItemText).prepend('<span class="glyphicon glyphicon-chevron-up up" aria-hidden="true"></span><span class="glyphicon glyphicon-chevron-down down" aria-hidden="true"></span>').append('<span class="glyphicon glyphicon-refresh edit"></span><span class="glyphicon glyphicon-trash delete" aria-hidden="true"></span>');

	})
	
	q = Math.floor(10 * Math.random());
		console.log(q);
		if(q < 3){
			console.log('first color');
			$('body').css('background-color', '#E08283');
		}
			else if (q < 5) {
				console.log('second color');
				$('body').css('background-color', '#674172');
			}
			else if (q < 8) {
				console.log('third color');
				$('body').css('background-color', '#26A65B');
			}
			else {
				console.log('fourth color');
				$('body').css('background-color', '#D35400');
			}























});