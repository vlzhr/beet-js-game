document.addEventListener("DOMContentLoaded", function () {
    window.counter = {
        coinsNode: document.querySelector(".coins-value"),
        metersNode: document.querySelector(".distance-value"),

        coinsValue: 0,
        metersValue: 0,

        coinsPlus: function() {
            this.coinsValue ++;
            this.coinsNode.innerHTML = this.coinsValue;
        },
        metersPlus: function() {
            this.metersValue ++;
            this.metersNode.innerHTML = this.metersValue;
        },
        toNull() {
            this.coinsValue = 0;
            this.metersValue = 0;
            this.coinsNode.innerHTML = this.coinsValue;
            this.metersNode.innerHTML = this.metersValue;
        }
    };

    window.winscreen = {
        node: document.querySelector(".winscreen"),
        scoreNode: document.querySelector(".winscreen__score-value"),
        coinsNode: document.querySelector(".winscreen__coins-value"),
        metersNode: document.querySelector(".winscreen__distance-value"),

        show: function() {
            this.coinsNode.innerHTML = counter.coinsValue;
            this.metersNode.innerHTML = counter.metersValue;
            this.scoreNode.innerHTML = counter.metersValue + counter.coinsValue*6;
            this.node.classList.add("shown");
        }
    };
});



