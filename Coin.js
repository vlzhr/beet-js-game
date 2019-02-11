const borschtWordMockup = [
    [1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0],
    [1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0],
    [1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0],
    [1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0]
];



class Coin extends PIXI.Sprite {
    constructor(num, y) {
        super(resources["images/coin.png"].texture);

        this.initialProportion = this.width/this.height;
        this.width = 50;
        this.height = this.width*this.initialProportion;

        this.y = y;
        this.x = app.renderer.width + (num)*this.width + 5*num;

        app.stage.addChild(this);
    }
}


class CoinsRaw {
    buildRaw() {
        this.y = 50 + Math.random()*app.renderer.height/3.2;
        this.parts = [0,1,2,3,4].map(x => new Coin(x, this.y));

        for (let raw = 0; Math.floor(Math.random() * 3); raw++) {
            this.y += this.parts[0].height + 5;
            this.parts = this.parts.concat([0,1,2,3,4].map(x => new Coin(x, this.y)));
        }

        for (let extra = 0; Math.floor(Math.random() * 3); extra++) {
            this.parts.unshift(new Coin(-1-extra, this.y));
        }
    }

    constructor() {
        this.buildRaw();

        this.speed = 2;
    }

    whenRunAway() {
        this.buildRaw();
    }

    nextStep(xSpeedFactor) {
        for (let partN in this.parts) {
            this.parts[partN].x -= this.speed*xSpeedFactor;
        }

        if (this.parts[this.parts.length-1].x < -this.parts[this.parts.length-1].width) {
            this.whenRunAway();
        }
    }
}


class CoinsWord extends CoinsRaw {
    buildRaw() {
        this.parts = [];

        for (let raw in borschtWordMockup) {
            for (let cell in borschtWordMockup[raw]) {
                if (borschtWordMockup[raw][cell]) {
                    this.parts.push(new Coin(+cell, 80+raw*60));
                }
            }
        }
    }

    whenRunAway() {
        game.prewordShown = true;
    }
}

