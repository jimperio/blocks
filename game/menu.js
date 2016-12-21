export default {

  create() {
    this.renderMenu()
    this.input.keyboard.onDownCallback = this.onKeyDown.bind(this)
    this.input.keyboard.addKeyCapture(this.input.keyboard.createCursorKeys())
  },

  renderMenu() {
    this.label = this.add.text(0, 0,
      'Blocks!\n[S]tart game',
      { font: '20px Arial', fill: 'white', boundsAlignH: 'center', boundsAlignV: 'middle' })
    this.label.setTextBounds(0, 0, this.world.width, this.world.height)
  },

  onKeyDown(e) {
    if (e.keyCode === Phaser.Keyboard.S) {
      this.state.start('main')
    }
  },

}
