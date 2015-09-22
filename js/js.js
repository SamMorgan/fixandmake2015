// @codekit-prepend "/lib/jquery.vticker.min.js";

jQuery(document).ready(function($){

	var $win = $(window),
		winW = $win.width(),
		$container = $('#dragdrop_container');

	// dragdrop drawer stuff //
	var styleSheet;
	function generatePosStyleSheet(){

		var cssArr = [],
			containerW = $container.width();

		cssArr.push('#dragdrop_container { width:'+ containerW +'px; }');
		$('.dragdrop').each(function(){
			var imgID = $(this).attr('id'),
				imgCoords = 'left:' +  $(this).css('left') + ';top:' + $(this).css('top') + ';width:' + $(this).width() + 'px;z-index:' + $(this).css('z-index'),
				//imgCoords = 'left:' +  $(this).css('left') + ';top:' + $(this).css('top') + ';z-index:' + $(this).css('z-index'),
				css = '#'+ imgID + '{'+ imgCoords +'}';	

			cssArr.push(css);			
			// update data attrs for scalling //
			$container.attr('data-width',parseInt($container.css('width')));
			$(this).attr('data-scaleleft',parseInt($(this).css('left'))).attr('data-scaletop',parseInt($(this).css('top'))).attr('data-scalewidth',$(this).width());
			
		});
		styleSheet = ((cssArr.toString()).replace(/,/g,' '));
		if(winW > 780){
			$('#dragdrop_css').val(styleSheet);
		}else{
			$('#dragdrop_css_tablet').val(styleSheet);			
		}				
	}

	function adjustHeight(){
		// replacing $container.css('height','auto').height($container[0].scrollHeight); //
		var newHeight = 0;
		$('.dragdrop').each(function(){
			var h = $(this).height() + $(this).offset().top;
			if(h > newHeight){
				newHeight = h;
			}
		});
		$container.height(newHeight);
	}

	// drag function //
	$('.logged-in .dragdrop').draggable({
		//containment: "parent",
		stack: ".dragdrop",
		stop: function() {
			generatePosStyleSheet();
			adjustHeight();
		}
	});	
	var resizing = false;
	$('.logged-in .dragdrop').each(function(){
		var aspect_ratio = false;
		if($(this).hasClass('img')){
			aspect_ratio = true;
		}
		$(this).resizable({
			aspectRatio: aspect_ratio,
			handles: 'se',
			start: function() {	
				resizing = true;
			},			
			stop: function() {
				generatePosStyleSheet();
				adjustHeight();
				resizing = false;
			}			
		});
	});

	$('.dragdrop_positioning .submit').mouseover(function(){	
		generatePosStyleSheet();		
	});	


	function scaleDragprop(){	
		//if($container.length && !resizing){
		if(winW > 480 && !resizing){	

			//var containerSavedW = parseInt($container.css('width'));
			if(!$container.data('width') || $container.data('width').length < 1){	
				$container.attr('data-width',parseInt($container.css('width')));

			}
			var scale = winW/$container.data('width');

			if(winW > 780){
				$container.addClass('desktop');
			}else{
				$container.addClass('tablet');			
			}
			if(winW > 780 && $container.hasClass('tablet')){
				$('.dragdrop').attr('style','').attr('data-scaleleft','').attr('data-scaletop','').attr('data-scalewidth','');
				$container.attr('style','').data('width',parseInt($container.css('width'))).removeClass('tablet');						
				scale = winW/$container.data('width');
			
			}else if(winW < 780 && $container.hasClass('desktop')){
				$('.dragdrop').attr('style','').attr('data-scaleleft','').attr('data-scaletop','').attr('data-scalewidth','');
				$container.attr('style','').data('width',parseInt($container.css('width'))).removeClass('desktop');
				scale = winW/$container.data('width');

			}
		
			$container.width(winW);

			$container.find('.dragdrop').each(function(){
				//var fadeinW = $(this).attr('width');
				//if(!$(this).data('left')){
				if(!$(this).data('scaleleft') || $(this).attr('data-scaleleft').length < 1){

					var left = parseInt($(this).css('left')),								
						top = parseInt($(this).css('top')),
						//width = parseInt($(this).width());
						width = $(this).width();

					$(this).attr('data-scaleleft',left);
					$(this).attr('data-scaletop',top);
					$(this).attr('data-scalewidth',width);
																		
				}
				var dataLeft = $(this).attr('data-scaleleft'),
					dataTop = $(this).attr('data-scaletop'),
					dataWidth = $(this).attr('data-scalewidth'),
					scaleL = Math.round(dataLeft*scale)+'px',
					scaleT = Math.round(dataTop*scale)+'px',								
					scaleW = Math.round(dataWidth*scale)+'px';	
				
				$(this).css({
					'width': scaleW,
					'height':'auto',
					'top':scaleT,
					'left':scaleL,
				}); 
														
			}).promise().done( function(){
				adjustHeight();				
			});							
		}else{
			adjustHeight();
		}
		
	}		
	scaleDragprop();

	$win.resize(function(){
		winW = $win.width();
		scaleDragprop();					
	});



	$('.dragdrop_positioning').on('submit',function(event) {
		event.preventDefault();
		var form = $(this),
			formData = form.serialize();		
   
		$.ajax({
			type:'POST',
			url: sitevars.ajaxurl,
            data: formData,
			success: function(){
				form.after('<div class="saved">Saved</div>');
				$('.saved').delay(1000).fadeOut();
				if(winW > 780){
					var cssdesktop = $('#dragdrop_css').val();
					$('#desktopcss').html(cssdesktop);
				}else{
					var csstablet = $('#dragdrop_css_tablet').val();
					$('#tabletcss').html("@media screen and (max-width: 780px){" + csstablet + "}");					
				}
			}
		});

	});

	$(function() {
	  $('#ticker').vTicker();
	});	

	$('#hamburger').click(function(){
		$('body').toggleClass('nav_open');
		return false;
	});
});	