// const bg = new Background();

const game = new Game()
game.prepare().then(() => {
    game.start()
})