/** 
** bonus.js
**/

define(['config', 'IM', 'canvas','player','camera', 'IIG', 'sound'], function(config, IM, canvas,player,camera, IIG, sound) {
	
	function Bonus(params) {
		this.x 			= params.x || 0;
		this.y 			= params.y || 0;
		this.type       = params.type;
		this.img 		= params.img || null;
		this.width 		= this.img.width;
		this.height 	= this.img.height;
		this.img.animation = params.animation ;
	};

	function BonusManager() {
		this.bonusList = [];

		this.init = function() {
			this.bonusList.push({
			    x: 200,
			    y: 500,
			    type: "bulle",
			    width: 60,
			    img: IM.getInstance('assets/img/bulle'),
			    color: 'green',
			    height: 60,
			});
			// this.bonusList.push({
			//     x: 800,
			//     y: 500,
			//     type: "speed",
			//     width: 60,
			//     img: IM.getInstance('assets/img/chatonSprite'),
			//     color: 'yellow',
			//     height: 60
			// });
			this.bonusList.push({
			    x: 100,
			    y: 300,
			    type: "oeufs",
			    width:150,
			    height:50,
			    img: IM.getInstance('assets/img/oeufs'),
			    animation: new IIG.Animation({
					sWidth: 50,
					sHeight: 50,
					iterations : '2',
					animByFrame :4
				})
			});
		};

		this.add = function() {
			// Add a new bonus
			var bonus = new Bonus({});
			this.initPosition(bonus);
			this.bonusList.push(bonus);
		};

		this.initPosition = function(bonus) {
			
		};

		this.update = function() {
			// Parcours du tableau d'ennemis
			var e;
			for (var i = 0, c = this.bonusList.length; i<c; i++) {
				e = this.bonusList[i];
			}
			var e;

			for (var i = 0; i < this.bonusList.length; i++){
				var collision = checkCollision(player, this.bonusList[i]);
				e = this.bonusList[i];
				if(collision == 'bottom' || collision == 'top'){
					if (this.bonusList[i].type == 'bulle'){
						player.img=IM.getInstance('assets/img/player_bulle');
						sound.playerJump.play();
						this.remove(e);
                    }else if(this.bonusList[i].type == 'oeufs'){
                    	player.score ++;

                        this.remove(e);
                    };
				}
			};
		};

		this.render = function() {
			canvas.ctx.beginPath();

			// Parcours du tableau d'ennemis
			var e;

			for (var i = 0; i < this.bonusList.length; i++){
		     	canvas.ctx.drawImage(this.bonusList[i].img.data, this.bonusList[i].x - camera.x, this.bonusList[i].y, this.bonusList[i].width, this.bonusList[i].height);
			};
		};

		this.remove = function(obj) {
			var e;
			for (var i = 0, c = this.bonusList.length; i < c; i++) {
				e = this.bonusList[i];

				if (e === obj) {
					this.bonusList.splice(i, 1);
					break;
				}
			}
		};

	};

	return new BonusManager();

});