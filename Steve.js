class MultiAnimatedSprite extends PIXI.extras.AnimatedSprite {
    constructor(arg, states) {
        // states = { "state1": [1,2,3,2,1], "state2": [...], ... }
        super(arg);


        this.defaultState = 0;
        this.states = states ? states : {};
        this.queue = [];
    }

    playAnimation(animationName) {
        this.queue = this.states[animationName];
        this.queue.push(this.default);
    }

    nextStep() {
        if (this.queue.length) {
            this.gotoAndStop(this.queue[0]);
            this.queue.shift();
        } else {
            if (this.currentFrame !== this.defaultState) {
                this.gotoAndStop(0);
            }
        }
    }


}