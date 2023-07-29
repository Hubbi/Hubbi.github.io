
var config = {
    type: Phaser.AUTO,
    width: 828,
    height: 1792,
    backgroundColor: '#1b2632',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    move_up: false
};
var game = new Phaser.Game(config);
function preload ()
{
    this.load.image('Monster_1', 'assets/Mon1.png');
}
function create ()
{
    this.monster_sprite = this.add.sprite(config.width / 2, config.height / 2, 'Monster_1');
    this.monster_sprite.setScale(8,8);
}
function update ()
{
    if(config.move_up == false) {
        this.monster_sprite.y += 3;
        if (this.monster_sprite.y > config.height) {
            config.move_up = true;
    
        }
    } else {
        this.monster_sprite.y -= 3;
        if (this.monster_sprite.y < 0) {
            config.move_up = false;
        }
    }
}