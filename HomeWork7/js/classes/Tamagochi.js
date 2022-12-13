export class Tamagochi {
    constructor(tmg, wrap) {
        this.name = tmg.name;
        this.health = 100;
        this.strenght = 100;
        this.happiness = 100;
        this.wrap = wrap;
        this.interval = null;
    }

    //Render methods

    reset() {
        this.wrap.innerHTML = '';
    }

    render() {
        this.wrap.insertAdjacentHTML('beforeend', this.mainTemplate());

        this.init();

        if (this.health <= 0) {
            clearInterval(this.interval);

            this.reset();
            this.wrap.insertAdjacentHTML('beforeend', this.deadTemplate());
        }
    }

    update() {
        this.reset();
        this.render();
    }


    //Tamagochi lifecycle methods

    startLifeCycle() {
        this.interval = setInterval(() => {
            this.decreaseHealth(5);

            this.update();
        }, 3000);
    }

    init() {
        this.wrap
            .querySelector('[data-action="feed"]')
            .addEventListener('click', () => {
                this.increaseHealth(5);
                this.decreaseStrength(2);

                this.update();
            })

        this.wrap
            .querySelector('[data-action="play"]')
            .addEventListener('click', () => {
                this.increaseHappiness(7);
                this.decreaseStrength(5);

                this.update();
            })

        this.wrap
            .querySelector('[data-action="walk"]')
            .addEventListener('click', () => {
                this.decreaseHappiness(10);
                this.increaseStrength(5);

                this.update();
            })
    }


    //Interactions

    decreaseHealth(val) {
        this.health = this.health - val;
    }

    increaseHealth(val) {
        this.health = this.health + val;
    }

    decreaseStrength(val) {
        this.strenght = this.strenght - val;
    }

    increaseStrength(val) {
        this.strenght = this.strenght + val;
    }

    decreaseHappiness(val) {
        this.happiness = this.happiness - val;
    }

    increaseHappiness(val) {
        this.happiness = this.happiness + val;
    }


    //Templates

    mainTemplate() {
        return `<div class="card">
                    <h2 class="h2">
                        ${this.name}
                    </h2>

                    <h3 class="h3">
                        Properties:
                    </h3>

                    <ul>
                        <li>
                            <p>
                                <strong>
                                    Health:
                                </strong>

                                <span>${this.health}</span>
                            </p>
                        </li>

                        <li>
                            <p>
                                <strong>
                                    Strength:
                                </strong>

                                <span>${this.strenght}</span>
                            </p>
                        </li>

                        <li>
                            <p>
                                <strong>
                                    Happiness:
                                </strong>

                                <span>${this.happiness}</span>
                            </p>
                        </li>
                    </ul>
                    
                    <div class="card__controls">
                        <button
                            class="button"
                            data-action="feed"
                        >
                            Feed
                        </button>
                        
                        <button
                            class="button"
                            data-action="play"
                        >
                            Play
                        </button>
                        
                        <button
                            class="button"
                            data-action="walk"
                        >
                            Walk
                        </button>
                    </div>
                </div>`
    }

    deadTemplate() {
        return `<div class="card">
                    <h2 class="h2">
                        Tamagochi named <strong>${this.name}</strong> is dead!
                    </h2>
                </div>`
    }
}