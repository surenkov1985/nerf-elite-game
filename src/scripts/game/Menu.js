import { App } from "../system/App";
import { Scene } from "../system/Scene";
import {Head} from "./Head";
import {Foot} from "./Foot";

export class Menu extends Scene {
    create() {
        this.createBackground();
    }
    createBackground() {

        this.bg = App.sprite("bg");
        this.head = new Head()
        this.foot = new Foot();

        this.bg.width = App.app.screen.width;
        this.bg.height = App.app.screen.height;
        this.container.addChild(this.bg);
        this.container.addChild(this.head.container);
        this.container.addChild(this.foot.container);
    }

    update() {
        super.update();
        // this.resize()
    }

    resize(){
        this.bg.width = App.app.screen.width;
        this.bg.height = App.app.screen.height;
    }
}
