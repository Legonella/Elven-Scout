import { Screen } from './screen';
import { Loading } from './scenes/loading';
export class Game {
    constructor() {
        this.screen = new Screen(480, 480);
        this.scenes = {
            loading: new Loading(this),
        };
        this.currentScene = this.scenes.loading;
        this.currentScene.init();
    }

    frame(time) {
        this.currentScene.render(time);
        requestAnimationFrame((time) => this.frame(time));
    }

    run() {
        requestAnimationFrame((time) => this.frame(time));
    }
}
