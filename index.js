class Game {
    constructor(config) {
        this.config = config;
    }
    start = () => {
        this.identity = [];
        for (var i = 0; i < this.config.identity.length; ++i) {
            var obj = this.config.identity[i];
            for (var k = 0; k < obj.num; ++k) this.identity.push(obj.type);
        }
        if (this.identity.length != this.config.people) {
            throw new Error("The number of identities is not eaual to the number of people.");
        }
        for (var i = 0; i < this.identity.length; ++i) {
            var j = Math.floor(Math.random() * (i + 1)), a;
            var t = this.identity[i];
            this.identity[i] = this.identity[j];
            this.identity[j] = t;
        }
        console.log(this.identity);
        for (var i = 0; i < this.identity.length; ++i) {
            this.config.passIdentity(this, i, this.identity[i]);
        }
        while (1) {
            this.config.getDark();
            
        }
    }
}

game = new Game({
    people: 6,
    identity: [{
        type: "wolf",
        num: 3
    }, {
        type: "predictor",
        num: 1
    }, {
        type: "witch",
        num: 1
    }, {
        type: "guard",
        num: 1
    }],
    passIdentity: (game, id, identity) => {
        console.log(`pass identity#${id} ${identity}`);
    }
});

game.start();

module.exports = Game;