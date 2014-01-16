define(['buzz'], function(buzz) {
	
	return {
		playerJump : new buzz.sound("assets/sound/saut", {
					formats: [ "ogg", "mp3", "wav" ],
					preload: true,
					autoplay: false,
					loop: false
				}),
		theme : new buzz.sound("assets/sound/blurg_theme", {
					formats: [ "ogg", "mp3", "wav" ],
					preload: true,
					autoplay: false,
					loop: true
				}),
		miaou : new buzz.sound("assets/sound/bébé_chat", {
					formats: [ "ogg", "mp3", "wav" ],
					preload: true,
					autoplay: false,
					loop: false
				}),
		tir : new buzz.sound("assets/sound/tirRafale", {
					formats: [ "ogg", "mp3", "wav" ],
					preload: true,
					autoplay: false,
					loop: true
				})
	};

});