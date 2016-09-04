var width = 3000;
var height = 2000;
var PhaserGame = function () {

};


PhaserGame.prototype = { 
    preload: function() { 
        this.load.crossOrigin = "Anonymous"; 
        this.load.tilemap('tilemap', 'greatpath.json', null, Phaser.Tilemap.TILED_JSON);

        this.load.image('tiles', 'tileset.png');
    },
    create: function () { 
      this.stage.backgroundColor = '#787878';

      //  The 'mario' key here is the Loader key given in game.load.tilemap
      var map = game.add.tilemap('tilemap');

      //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
      //  The second parameter maps this name to the Phaser.Cache key 'tiles'
      map.addTilesetImage('tileset', 'tiles');

      //  Creates a layer from the World1 layer in the map data.
      //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
      var layer = map.createLayer('Paths');

      //  This resizes the game world to match the layer dimensions
      layer.resizeWorld();
    },
    update: function() {
    }

}
var game = new Phaser.Game(width,height,Phaser.AUTO, 'game' ); 
game.state.add('Game', PhaserGame, true);
