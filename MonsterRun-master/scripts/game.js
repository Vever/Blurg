/**
 * game.js
**/

define(['config','input','canvas','stage','IM','player','camera','enemy','bonus','sound'], function(config,input,canvas,stage,IM,player,camera,enemy,bonus,sound){
	function Game() {
		
		this.init = function() {
			// init all parts of the game
			//sound.theme.play();
			camera.init();
			player.init();
			stage.init();
			enemy.init();
			bonus.init();
		};

		this.update = function() {
			// check for all updates
			stage.update();
			input.updateGamepadsButtons();
			player.update();
			player.moveCamera();
			enemy.update();
			bonus.update();
		};

		this.render = function() {
			canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);

			// render all elements on the stage
			camera.render();
			stage.render();
			player.render();
			enemy.render();
			bonus.render();

			// Render du texte
				canvas.ctx.fillStyle = 'lime';
				canvas.ctx.textAlign = 'right';
				canvas.ctx.textBaseline = 'top';
				canvas.ctx.font = '22px Arial';
				canvas.ctx.fillText('points:'+player.score, canvas.canvas.width - 5, 5);
		};
	}
	return new Game();
});