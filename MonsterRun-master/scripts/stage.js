/**
* stage.js
**/

define(['canvas','IM','config', 'camera'], function(canvas,IM,config, camera) {
	
	function Stage() {

		this.init = function(){
			this.img 					= IM.getInstance('assets/img/bkg2');
			this.x						= 0;
			this.y						= 0;
		    this.imgWidth        		= canvas.canvas.width,
	        this.imgHeight       		= canvas.canvas.height;
	        
	        this.render();
		};

	    this.update = function(){
	    	
	    };

	    this.render = function(){
            canvas.ctx.clearRect(0,0,canvas.canvas.width,canvas.canvas.height);

		    canvas.ctx.drawImage(this.img.data,this.x - camera.x, this.y,this.imgWidth, this.imgHeight);

	    };
		
	};

	return new Stage();

});