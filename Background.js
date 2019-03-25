class BackgroundPart extends PIXI.Sprite {
    constructor(arg) {
        super(resources[arg].texture);

        this.initProportion = this.width / this.height;
        this.height = app.renderer.height;
        this.width = this.height * this.initProportion;

        app.stage.addChild(this);
    }
}

class StaticBackground extends PIXI.Sprite {
    constructor(arg) {
        super(resources[arg].texture);

        this.anchor.set(0, 0);

        this.initProportion = this.width / this.height;
        this.height = app.renderer.height;
        this.width = this.height * this.initProportion;

        app.stage.addChild(this);
    }
}

class Background {
    constructor(img="images/background/1.png", speed=0) {

        this.parts = [
            new BackgroundPart(img),
            new BackgroundPart(img)
        ];

        // this.parts[1].scale.x = -1;

        this.img = img;
        this.speed = speed;
    }

    nextStep(xSpeedFactor) {
        for (let partN in this.parts) {
            const part = this.parts[partN];
            part.x -= this.speed*xSpeedFactor;
            if (part.x < -part.width) {
                part.x = part.width;
            }
        }
    }
}