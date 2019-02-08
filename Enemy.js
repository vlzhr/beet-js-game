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


class Barrier extends Sprite {
    constructor() {
        super(resources["images/meat-grinder.png"].texture);

        this.width = 80;
        this.height = 80;

        this.y = app.renderer.height-150;
        this.x = app.renderer.width-this.width-10;

        this.speed = 2;

        app.stage.addChild(this);
    }
}

