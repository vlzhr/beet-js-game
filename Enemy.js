class Enemy extends Sprite {
    constructor() {
        super(resources["images/blob.png"].texture);
        this.y = Math.random() * (app.renderer.height-100) + 10;
        this.width = 96;
        this.x = app.renderer.width-this.width;
        this.height = 64;
        this.speed = 5 + Math.random()*5;
        app.stage.addChild(this);
    }
}


