class Config {

    gravity = 100

    canvas = {
        id: 'game',
        width: 320,
        height: 480,
    }

    spritesheet = {
        width: 606,
        height: 428,
        src: './assets/spritesheet.png',
    }

    bird = {
        x: 50,
        y: 100,
        width: 34,
        height: 26,

        flapSpeed: 80,

        frames: [
            {
                x: 276,
                y: 112,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 164,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
        ]
    }

    background = { 
        x: 0,
        y: 254,
        width: 275,
        height: 226,
        frames: [
            {
                x: 0,
                y: 0,
                w: 275,
                h: 226
            }
        ]
    };
}