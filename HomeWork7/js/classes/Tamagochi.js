export class Tamagochi {
    constructor(tmg, wrap) {
        this.name = tmg.name;
        this.health = 100;
        this.strenght = 100;
        this.happiness = 100;
        this.wrap = wrap;

        this.render();
    }

    render() {
        this.wrap.insertAdjacentHTML('beforeend', this.template());
    }

    template() {
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
                </div>`
    }
}