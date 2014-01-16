/**
** camera.js
**/

define(['canvas','IM','config'], function(canvas,IM,config){

	function Camera(){
		this.init = function(){
			this.x 		= 0;
			this.y 		= 0;
			this.width 	= canvas.canvas.width;
			this.height = canvas.canvas.height;
		};

		this.update = function(){

		};

		this.render = function(){
			canvas.ctx.strokeStyle = "fuchsia";
			canvas.ctx.strokeRect(this.x,this.y,this.width,this.height);
		};
	}

	return new Camera();

})