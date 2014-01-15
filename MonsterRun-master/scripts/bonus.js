/** 
** bonus.js
**/

define(['config', 'IM', 'canvas','player'], function(config, IM, canvas,player) {
	
	function Bonus(params) {
		this.x 			= params.x || 0;
		this.y 			= params.y || 0;
		this.type       = params.type;
		//this.img 		= IM.getInstance('assets/images/enemy');
		this.width 		= this.img.width;
		this.height 	= this.img.height;
	};

	function BonusManager() {
		this.bonusList = [];

		this.init = function() {
			this.bonusList.push({
			    x: 200,
			    y: 500,
			    type: "bouclier",
			    width: 60,
			    color: 'green',
			    height: 60
			});
			this.bonusList.push({
			    x: 800,
			    y: 500,
			    type: "speed",
			    width: 60,
			    color: 'yellow',
			    height: 60
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

					if (this.bonusList[i].type == 'bouclier'){
						player.img=IM.getInstance('assets/img/bonus');
					}else if(this.bonusList[i].type == 'speed'){
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
			    canvas.ctx.fillStyle = this.bonusList[i].color;
			    canvas.ctx.fillRect(this.bonusList[i].x, this.bonusList[i].y, this.bonusList[i].width, this.bonusList[i].height);
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