class Coin extends PIXI.Sprite {
    constructor(arg, num, y) {
        super(resources[arg].texture);

        this.y = y;
        this.initialProportion = this.width/this.height;
        this.width = 50;
        this.height = this.width*this.initialProportion;
        this.x = app.renderer.width + num*this.width + 5*num;

        app.stage.addChild(this);
    }
}


class CoinsRaw {
    buildRaw() {
        this.y = 50 + Math.random()*app.renderer.height/3.2;
        this.parts = [0,1,2,3,4].map(x => new Coin("images/coin.png", x, this.y));
    }

    constructor() {
        this.buildRaw();

        this.speed = 2;
    }

    nextStep(xSpeedFactor) {
        for (let partN in this.parts) {
            this.parts[partN].x -= this.speed*xSpeedFactor;
        }

        if (this.parts[this.parts.length-1].x < -this.parts[this.parts.length-1].width) {
            this.buildRaw();
        }
    }
}

