import {App} from "../../system/App";
import {Scene} from "../../system/Scene";
import * as PIXI from "pixi.js";


export class Button extends Scene {
	textContent
	constructor(text, variant = 'primary') {
		super();
		this.textContent = text
		this.variant = variant
	}

	create() {
		this.render()

	}

	render(){

		console.log(this.variant)
		const bgType = this.variant === 'primary' ? 'blue_btn' : 'orange_btn'
		this.bg = App.sprite(bgType)
		this.text = new PIXI.Text({
			text: this.textContent,
			style: {
				fill: 0x000000,
			}
		})
		this.text.text = "dffd"
		// this.text.x = 500
		this.container.addChild(this.bg)
		this.container.addChild(this.text)
		this.container.height = 55
		this.container.interactive = true
	}


	onClick(){

	}
}