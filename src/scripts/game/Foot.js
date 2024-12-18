import {App} from "../system/App";
import {Scene} from "../system/Scene";
import {Button} from "./components/Button";

export class Foot extends Scene {

	create(){
		this.render()
	}

	render(){
		this.button = new Button('play minigun', 'primary')
		this.button2 = new Button('play minigun 2', 'yellow')
		// this.button.height = 55
		// this.button2.height = 55
		this.button2.x = 50
		this.button2.y = 100
		// this.container.addChild(this.button.container)
		// this.container.addChild(this.button2.container)
		this.container.addChild(this.button)
		this.container.addChild(this.button2)
		// this.container.y = 300
		// this.container.height = 150
	}
}