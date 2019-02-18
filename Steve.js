class MultiAnimatedSprite extends PIXI.extras.AnimatedSprite {
    constructor(arg, states) {
        // states = { "state1": {states: [1,2,3,2,1], loop: true, sizes: {width, height}}, "state2": {...}, ... }
        super(arg);

        this.allStates = arg;
        this.animations = states ? states : {};
        this.type = "main";
        this.scale.x = this.scale.y = 0.25;

        // this.width = this.allStates[0].orig.

        this.playAnimation("default");
    }

    playAnimation(animationName) {
        if (!game.on) {return;}

        this.animationName = animationName;

        if (this.isDefault && animationName !== "default") { this.isDefault = false; }
        if (!this.isDefault && animationName === "default") { this.isDefault = true; }

        if (!animationName) { this.play(); return; }


        // this.width = this.animations[animationName].sizes.width;
        // this.height = this.animations[animationName].sizes.height;

        let textures = [];
        for (let state of this.animations[animationName].states) { textures.push(this.allStates[state]); }
        this.loop = this.animations[animationName].loop;
        this._textures = textures;

        this.scale.x = this.scale.y = this.animations[animationName].scale;
        this.stop();
        this.gotoAndPlay(0);

    }

    toDefault() {
        if (!this.isDefault) {
            console.log("def");
            this.playAnimation("default");
        }
    }
}
