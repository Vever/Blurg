/**
 * enemy.js
**/

define(['config', 'IM', 'canvas','IIG','input','camera','sound'], function(config,IM,canvas,IIG,input,camera,sound) {
	function Enemy(params){
		this.img 		= IM.getInstance('assets/img/chatonSprite');
		this.x 			= 500;
		this.y 			= params.y || canvas.canvas.height - this.img.height;
		this.width 		= this.img.width;
		this.height 	= this.img.height;

		this.img.animation = params.animation || new IIG.Animation({
			sWidth: 195,
			sHeight: 140,
			iterations : '2',
			animByFrame :12
		});
	};

	function EnemyManager() {
		this.enemiesList = [];

		this.init = function(){
			this.add();
		}

		this.add = function(params) {
			// Instantiation du nouvel ennemi
			var enemy = new Enemy({});
			this.enemiesList.push(enemy);
		}

		this.update = function() {
			// Parcours du tableau d'ennemis
			var e;
			for (var i = 0, c = this.enemiesList.length; i < c; i++) {
				e = this.enemiesList[i];

				/*if (input.keyboard.left){
					console.log('left');
					console.log(e.x);
					e.x -= 5;
			    }
				if (input.keyboard.right){
					console.log('right');
					e.x += 5;
	       		}*/
			}
		};

		this.render = function() {
			// Parcours du tableau d'ennemis
			var e;
			for (var i = 0, c = this.enemiesList.length; i < c; i++) {
				e = this.enemiesList[i];
				IM.drawImage(canvas.ctx, e.img, e.x - camera.x, e.y);
				// sound.tir.play();
			}
		};

	};

	return new EnemyManager();

});