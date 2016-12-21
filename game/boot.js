export default {

  init() {
    this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE
    this.scale.pageAlignVertically = true
    this.scale.pageAlignHorizontally = true
  },

  create() {
    this.state.start('menu')
  },

}
