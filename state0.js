var demo = {};
var hero;
demo.state0 = function(){};

demo.state0.prototype = {
    preload: function(){
        game.load.image('hero', 'assets/sprites/hero.png');
    },
    create: function(){
        game.stage.backgroundColor = '#00FF00';
        hero = game.add.sprite(0, 0, 'hero');
        hero.scale.setTo(0.5, 0.5);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            hero.x = hero.x + 2;
        }
    }
};