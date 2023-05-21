class Game {
    constructor() {
        this.config = new Config();

        this.canvas = document.getElementById(this.config.canvas.id)
        this.canvas.width = this.config.canvas.width
        this.canvas.height = this.config.canvas.height

        this.width = this.config.canvas.width
        this.height = this.config.canvas.height

        this.drawEngine = new CanvasDrawEngine({ canvas: this.canvas })

        this.background = null;

        this.physicsEngine = new PhysicsEngine({ gravity: this.config.gravity })
        this.resourceLoader = new ResourceLoader()
        this.inputHandler = new MouseInputHandler({
            left: ({ x, y }) => {
                this.bird.flap()
            }
        })
    }

    async prepare() {
        this.spriteSheet = await this.resourceLoader.load({
            type: RESOURCE_TYPE.IMAGE,
            src: this.config.spritesheet.src,
            width: this.config.spritesheet.width,
            height: this.config.spritesheet.height,
        });
        this.reset();
    }

    reset() {
        this.score = 0
        
        this.background = new Background({
            x: this.config.background.x,
            y: this.config.background.y,
            width: this.config.background.width,
            height: this.config.background.height,
            frames: this.config.background.frames,
            spriteSheet: this.spriteSheet,
            drawEngine: this.drawEngine,
            game: this,
        })

        this.bird = new Bird({
            x: this.config.bird.x,
            y: this.config.bird.y,
            width: this.config.bird.width,
            height: this.config.bird.height,
            frames: this.config.bird.frames,
            spriteSheet: this.spriteSheet,
            flapSpeed: this.config.bird.flapSpeed,
            physicsEngine: this.physicsEngine,
            drawEngine: this.drawEngine,
            game: this,
        })
    }

    update(delta) {
        this.background.update(delta);
        this.bird.update(delta);
    }

    draw() {
        this.drawEngine.clear();

        this.background.draw();
        this.bird.draw();
    }

    loop() {
        
        const now = Date.now()
        const delta = now - this.lastUpdate

        this.update(delta / 1000.0)

        if (this.playing) {
            this.drawEngine.clear()
            this.draw()

            this.lastUpdate = now

            requestAnimationFrame(this.loop.bind(this))
        }
    }

    start() {
        this.playing = true
        this.inputHandler.subscribe()
        this.lastUpdate = Date.now()
        this.reset()
        this.loop()
    }

    gameOwer() {
        this.playing = false
        alert("Game over: " + this.score);
    }
}