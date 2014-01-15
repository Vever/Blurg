/**
 * game.js
**/

define(['config','input','canvas','stage','IM','player','box','bonus'], function(config,input,canvas,stage,IM,player,box,bonus){
	function Game() {
		
		this.init = function() {
			// init all parts of the game
			stage.init();
			player.init();
			bonus.init();
			box.init();
		};

		this.update = function() {
			// wcheck for all updates
			input.updateGamepadsButtons();
			player.update();
			box.update();
			bonus.update();
		};

		this.render = function() {
			// render all elements on the stage
			stage.render();
			player.render();
			box.render();
			bonus.render();
		};
	}
	return new Game();
});