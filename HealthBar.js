class Heart extends PIXI.Sprite {
    constructor(n) {
        super(resources["images/heart.png"].texture);

        this.initialProportion = this.width/this.height;
        this.width = 60;
        this.height = this.width*this.initialProportion;

        this.y = 20;
        this.x = app.renderer.width - (this.width+5)*(n+1);

        app.stage.addChild(this);
    }
}

class HealthBar {
    constructor() {
        this.value = 3;
        this.hearts = [0,1,2].map(x => new Heart(x));
        this.hitStop = false;
    }

    minus() {
        if (this.hitStop) {return;}

        this.value -= 1;
        if (this.value === 0) {
            game.on = false;
        }
        else if (this.value < 0) {
            return;
        }
        this.hearts[this.hearts.length-1].alpha = 0;
        this.hearts.pop();

        this.hitStop = true;
        window.setTimeout(() => {this.hitStop=false;}, 1000);
    }
}