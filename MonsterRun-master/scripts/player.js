/**
 * player.js
**/

define(['canvas','input','config','IM','camera', 'stage','sound'], function(canvas,input,config,IM,camera, stage,sound){
	function Player() {

		this.init = function() {
			this.img 		 = IM.getInstance('assets/img/playerSprite');
			// Positions and speed
			this.x 			 = 100;
			this.y 			 = canvas.canvas.height - this.img.height;
			this.speed 		 = 5;
			// Horizontal and vertical movements
			this.velX 		 = 0;
			this.velY 		 = 0;
			// Jumping
			this.friction 	 = 0.8;
			this.jump 		 = false;
			this.gravity 	 = 0.3;
			this.score		 = 0;

			this.img.animation = new IIG.Animation({
				sWidth: 119,
				sHeight: 140,
				iterations : '2',
				animByFrame :4
			});

		}; 

		this.update = function() {

			// Move the player
			this.x 		+= this.velX;
			this.y 		+= this.velY;
			this.velX 	*= this.friction;

			// Prevent the player from falling
			if(this.y >= canvas.canvas.height - this.img.height){
			    this.y = canvas.canvas.height - this.img.height;
			    this.jump = false;
			}

			// Verify that the player can't leave of the canvas
			if (this.x < stage.x) this.x = 0;
			if (this.x + this.width > stage.imgWidth)   this.x = stage.imgWidth - this.width;

			if (input.gamepad.connected) {
				this.gamepadCharacterController();
			}else{
				this.characterKeyboardController();
			}

		};

		this.gamepadCharacterController = function(){
			if(input.gamepad.O){
				if(!this.jump){
					this.jump = true;
					this.velY = -this.speed*2;

					sound.playerJump.stop();
					sound.playerJump.play();
			  	}
			}
			if(input.gamepad.O == false){
				this.velY 	+= this.gravity;
				this.jump 	= false;
			}
			
			if(input.gamepad.joystickLeft.axeX){
				this.x += input.gamepad.joystickLeft.axeX * this.speed;
			}

			// Limit height when the player jump
			if(this.y <= 200){
				this.velY 	+= this.gravity;
			}
		};

		this.characterKeyboardController = function() {
			if (input.keyboard.left){
				if (this.velX > -this.speed){this.velX--;}
		    }
			if (input.keyboard.right){
				if (this.velX < this.speed) {this.velX++;}   
       		}
       		if (input.keyboard.up) {
				if(!this.jump){
					this.jump = true;
					this.velY = -this.speed*2; 
			  	}
			}
			if(this.y <= 400){
				this.velY 	+= this.gravity;
			}
		};

		this.moveCamera = function(){
			camera.x = this.x - (camera.width/4);
			if(camera.x < 0){
				camera.x = 0;
			}
		};

		this.render = function() {		
			IM.drawImage(canvas.ctx, this.img, this.x - camera.x, this.y);
		    //canvas.ctx.drawImage(this.img.data, this.x - camera.x, this.y, this.img.width, this.img.height);
		}
	}

	return new Player();
});