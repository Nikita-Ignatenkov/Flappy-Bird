class Entity {
    constructor({ x, y, width, height, frames, spriteSheet, drawEngine, game }) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = 0
        this.falling = false

        this.frames = frames
        this.frameIdx = 0
        this.spriteSheet = spriteSheet
        this.drawEngine = drawEngine
        this.game = game
    }

    draw() {
        if (this.spriteSheet.loaded) {
            this.drawEngine.drawImage({
                spriteSheet: this.spriteSheet,
                image: {
                    x: this.sX,
                    y: this.sY,
                    w: this.width,
                    h: this.height
                },
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
            });
        }
    }

    update(delta) {
        this.frameIdx = (this.frameIdx + Math.ceil(delta)) % this.frames.length
    }
}