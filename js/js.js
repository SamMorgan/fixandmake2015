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
		var newHeight = 0;
		$('.dragdrop').each(function(){
			var h = $(this).height() + $(this).offset().top;
			if(h > newHeight){
				newHeight = h;
			}
		});
		$container.height(newHeight);
		//$('.container_wrap').addClass('ready');
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

	// open external links in new window //
	$('a').each(function() {
	   var a = new RegExp('/' + window.location.host + '/');
	   if(!a.test(this.href)) {
	       $(this).click(function(event) {
	           event.preventDefault();
	           event.stopPropagation();
	           window.open(this.href, '_blank');
	       });
	   }
	});

	// Draw //
  var ctx,x,y;
  function newCanvas(){

  var winWidth = $(document).width();
  var winHeight = $(document).height();
  //var winHeight2 = $(window).height();


  var canvasWidth = winWidth;
  var canvasHeight = winHeight;

  var canvasDiv = document.getElementById('canvasdiv');
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', canvasWidth);
  canvas.setAttribute('height', canvasHeight);
  canvas.setAttribute('id', 'canvas');
  canvasDiv.appendChild(canvas);
  if(typeof G_vmlCanvasManager !== 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
  }
  //var context = canvas.getContext("2d");
    
    // setup canvas
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.strokeStyle = "#000";
  ctx.lineJoin = "round";
  ctx.lineWidth = 5;  
  
  // setup to trigger drawing on mouse or touch
  $("#canvas").drawTouch();
  $("#canvas").drawPointer();
  $("#canvas").drawMouse();
}
// prototype to start drawing on touch using canvas moveTo and lineTo
$.fn.drawTouch = function() {
  var start = function(e) {
    e = e.originalEvent;
    ctx.beginPath();
    x = e.changedTouches[0].pageX;
    y = e.changedTouches[0].pageY;
    ctx.moveTo(x,y);
  };
  var move = function(e) {
    e.preventDefault();
        e = e.originalEvent;
    x = e.changedTouches[0].pageX;
    y = e.changedTouches[0].pageY;
    ctx.lineTo(x,y);
    ctx.stroke();
  };
  var stop = function() {
    $('#canvas').css('pointer-events','none');
  }; 
  $(document).on("touchstart",function(){
  	if(event.target.id === 'dragdrop_container'){
  		$('#canvas').css('pointer-events','auto');
  		start();
  	}  	
  });   
  //$(this).on("touchstart", start);
  $(this).on("touchmove", move);
  $(this).on("touchend", function(){ stop();});  
}; 
    
// prototype to start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
$.fn.drawPointer = function() {
  var start = function(e) {
    e = e.originalEvent;
    ctx.beginPath();
    x = e.pageX;
    y = e.pageY-44;
    ctx.moveTo(x,y);
  };
  var move = function(e) {
    e.preventDefault();
        e = e.originalEvent;
    x = e.pageX;
    y = e.pageY-44;
    ctx.lineTo(x,y);
    ctx.stroke();
    };
  $(this).on("MSPointerDown", start);
  $(this).on("MSPointerMove", move);
};        
// prototype to start drawing on mouse using canvas moveTo and lineTo
$.fn.drawMouse = function() {
  var clicked = 0;
  var start = function(e) {
    clicked = 1;
    ctx.beginPath();
    x = e.pageX;
    y = e.pageY;
    ctx.moveTo(x,y);
  };
  var move = function(e) {
    if(clicked){
      x = e.pageX;
      y = e.pageY;
      ctx.lineTo(x,y);
      ctx.stroke();
    }
  };
  var stop = function() {
    clicked = 0;
    $('#canvas').css('pointer-events','none');
  };
  //$(this).on("mousedown",start); 	
  
  $(document).on("mousedown",function(){
  	if(event.target.id === 'dragdrop_container'){
  		$('#canvas').css('pointer-events','auto');
  		start();
  	}  	
  });
  
  $(this).on("mousemove", move);
  $(window).on("mouseup", stop);
  //$(window).on("touchend", stop);
   //var winWidth = $(document).width();
    //var winHeight = $(document).height();
   //var winHeight2 = $(window).height();

}; 

  var gm = (function() {

      // var winWidth = $(document).width();
      // var winHeight = $(document).height();
      // var winHeight2 = $(window).height();


    // setup a new canvas for drawing wait for device init
      setTimeout(function(){
       newCanvas();
      }, 1000);

  });

  $(window).load(gm);	
	$(window).load(function(){
		$('.container_wrap').addClass('ready');
		function test(){
			var canvas  = document.getElementById("canvas");
			var dataURL = canvas.toDataURL();

			$.ajax({
			  type: "POST",
			  url: "upload.php",
			  data: { 
			     imgBase64: dataURL
			  }
			});
		}

		$('.save').click(function() {
		   test();
		   $(".saved").show();
		    setTimeout(function() { $(".saved").hide(); }, 2000);
		});
	});		
		
});	