import { App } from "../system/App";
import { Scene } from "../system/Scene";
import {Head} from "./Head";

export class Game extends Scene {
    create() {
        this.createBackground();
    }
    createBackground() {
        console.log(App)
        this.bg = App.sprite("bg");
        this.head = new Head()
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;

        this.container.addChild(this.bg);
        this.container.addChild(this.head.container);
    }
}
