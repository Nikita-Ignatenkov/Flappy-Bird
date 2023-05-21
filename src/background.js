class Background extends Entity {
    constructor({ x, y, width, height, frames, spriteSheet, drawEngine, game }) {
        super({ x, y, width, height, frames, spriteSheet, drawEngine, game })
        this.sX = 0
        this.sY = 0
        this.speed = 20 
    }


    update(delta) {
        super.update(delta)
        this.sX += this.speed * delta
        if (this.sX > this.width) {
            this.sX -= this.width
        }
    }



    draw() {
        this.drawEngine.drawImage({
            spriteSheet: this.spriteSheet,
            image: this.frames[0],
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        })

        this.drawEngine.drawImage({
            spriteSheet: this.spriteSheet,
            image: this.frames[0],
            x: this.x + this.width,
            y: this.y,
            width: this.width,
            height: this.height,
        })
    }
}