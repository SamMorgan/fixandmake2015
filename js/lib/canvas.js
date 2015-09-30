jQuery(document).ready(function($){
  
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
    y = e.changedTouches[0].pageY-44;
    ctx.moveTo(x,y);
  };
  var move = function(e) {
    e.preventDefault();
        e = e.originalEvent;
    x = e.changedTouches[0].pageX;
    y = e.changedTouches[0].pageY-44;
    ctx.lineTo(x,y);
    ctx.stroke();
  };
  $(this).on("touchstart", start);
  $(this).on("touchmove", move);  
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
  };
  $(this).on("mousedown", start);
  $(this).on("mousemove", move);
  $(window).on("mouseup", stop);

    var winWidth = $(document).width();
    //var winHeight = $(document).height();
    var winHeight2 = $(window).height();

  $('.signup_wrapper').width(winWidth);
  $('.signup_wrapper').height(winHeight2);


    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };


  $('#iphonepen').clickToggle(function() {   
      $('#canvasdiv').show();
      $('body').css('background-color', 'yellow');
      $('#canvasdiv').css('pointer-events', 'all');
      $(this).addClass('active');
  },
  function() {
      $('#canvasdiv').css('pointer-events', 'none');
      $('body').css('background-color', '#fff');
      $(this).removeClass('active');
  });




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
});  
