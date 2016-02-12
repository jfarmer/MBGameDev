var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('state0', demo.state0);
game.state.start('state0'); 