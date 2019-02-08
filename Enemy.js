class Enemy extends Sprite {
    constructor() {
        super(resources["images/knife.png"].texture);

        this.y = Math.random() * (app.renderer.height-100) + 10;
        this.width = 64*1.6;
        this.x = app.renderer.width-this.width;
        this.height = 9.87234*1.6;
        this.speed = 5 + Math.random()*5;
        app.stage.addChild(this);
    }
}


class BarrierElement extends Sprite {
    constructor(y) {
        super(resources["images/meat-grinder.png"].texture);

        this.width = 80;
        this.height = 80;

        this.y = y;
        this.x = app.renderer.width+this.width-10;

        this.speed = 2.5;
        this.anchor.set(0.5);

        app.stage.addChild(this);
    }
}

class Barrier {
    constructor() {
        this.elements = [];
        for (let n=0; n < Math.floor(Math.random()*4)+2; n++) {
            this.elements.push(new BarrierElement(app.renderer.height-80-n*80));
        }
    }

    move(xPlusFactor) {
        for (let n in this.elements) {
            this.elements[n].x -= this.elements[n].speed * (xPlusFactor ? xPlusFactor : 1);
            this.elements[n].rotation += 0.1;
        }
    }
}

