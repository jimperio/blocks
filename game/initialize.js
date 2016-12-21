import boot from './boot'
import menu from './menu'
import main from './main'

const game = new Phaser.Game(
  300,
  400,
  Phaser.AUTO,
  'game',
  null,
  false,
  false
)

game.state.add('boot', boot)
game.state.add('menu', menu)
game.state.add('main', main)
game.state.start('boot')
