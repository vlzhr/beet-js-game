class Enemy extends PIXI.Sprite {
    constructor() {
        super(resources["images/knife.png"].texture);

        this.y = (Math.random() * (app.renderer.height-100) + 10) * sizeScale();
        this.width = 64*1.6*1.5 * sizeScale();
        this.x = app.renderer.width-this.width;
        this.height = 9.87234*1.6*1.5 * sizeScale();
        this.speed = 5 + Math.random()*5;
        this.type = "knife";

        app.stage.addChild(this);
    }
}


class BarrierElement extends PIXI.Sprite {
    constructor(y) {
        super(resources["images/meat-grinder.png"].texture);

        this.width = 120 * sizeScale();
        this.height = 120 * sizeScale();

        this.y = y;
        this.x = app.renderer.width+this.width - 10 * sizeScale();

        this.speed = 2.5;
        this.anchor.set(0.5);

        app.stage.addChild(this);
    }
}

class Barrier {
    constructor() {
        this.elements = [];
        for (let n=0; n < Math.floor(Math.random()*3)+2; n++) {
            this.elements.push(new BarrierElement( app.renderer.height-((n+0.4)*105) * sizeScale()));
        }
    }

    move(xPlusFactor) {
        for (let n in this.elements) {
            this.elements[n].x -= this.elements[n].speed * (xPlusFactor ? xPlusFactor : 1);
            this.elements[n].rotation += 0.1;
        }
    }
}

