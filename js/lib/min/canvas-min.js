function newCanvas(){var n=$(document).width(),t=$(document).height(),e=$(window).height(),o=n,a=t,c=document.getElementById("canvasDiv");canvas=document.createElement("canvas"),canvas.setAttribute("width",o),canvas.setAttribute("height",a),canvas.setAttribute("id","canvas"),c.appendChild(canvas),"undefined"!=typeof G_vmlCanvasManager&&(canvas=G_vmlCanvasManager.initElement(canvas)),context=canvas.getContext("2d"),ctx=document.getElementById("canvas").getContext("2d"),ctx.strokeStyle="#000",ctx.lineJoin="round",ctx.lineWidth=5,$("#canvas").drawTouch(),$("#canvas").drawPointer(),$("#canvas").drawMouse()}var gm=function(){var n=$(document).width(),t=$(document).height(),e=$(window).height();setTimeout(function(){newCanvas()},1e3)};$.fn.drawTouch=function(){var n=function(n){n=n.originalEvent,ctx.beginPath(),x=n.changedTouches[0].pageX,y=n.changedTouches[0].pageY-44,ctx.moveTo(x,y)},t=function(n){n.preventDefault(),n=n.originalEvent,x=n.changedTouches[0].pageX,y=n.changedTouches[0].pageY-44,ctx.lineTo(x,y),ctx.stroke()};$(this).on("touchstart",n),$(this).on("touchmove",t)},$.fn.drawPointer=function(){var n=function(n){n=n.originalEvent,ctx.beginPath(),x=n.pageX,y=n.pageY-44,ctx.moveTo(x,y)},t=function(n){n.preventDefault(),n=n.originalEvent,x=n.pageX,y=n.pageY-44,ctx.lineTo(x,y),ctx.stroke()};$(this).on("MSPointerDown",n),$(this).on("MSPointerMove",t)},$.fn.drawMouse=function(){var n=0,t=function(t){n=1,ctx.beginPath(),x=t.pageX,y=t.pageY,ctx.moveTo(x,y)},e=function(t){n&&(x=t.pageX,y=t.pageY,ctx.lineTo(x,y),ctx.stroke())},o=function(t){n=0};$(this).on("mousedown",t),$(this).on("mousemove",e),$(window).on("mouseup",o);var a=$(document).width(),c=$(document).height(),i=$(window).height();$(".signup_wrapper").width(a),$(".signup_wrapper").height(i),function($){$.fn.clickToggle=function(n,t){var e=[n,t];return this.data("toggleclicked",0),this.click(function(){var n=$(this).data(),t=n.toggleclicked;$.proxy(e[t],this)(),n.toggleclicked=(t+1)%2}),this}}(jQuery),$("#iphonepen").clickToggle(function(){$("#canvasDiv").show(),$("body").css("background-color","yellow"),$("#canvasDiv").css("pointer-events","all"),$(this).addClass("active")},function(){$("#canvasDiv").css("pointer-events","none"),$("body").css("background-color","#fff"),$(this).removeClass("active")})},$(window).load(gm),$(window).load(function(){$("input").on("click",function(){$(".signup").css("background-color","yellow"),$(".jtf").hide()})}),$("document").ready(function(){$("#pen").click(function(){$("html, body").animate({scrollTop:$("#sign").offset().top-100},1e3)})});