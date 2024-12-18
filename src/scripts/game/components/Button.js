import {App} from "../../system/App";
import {Scene} from "../../system/Scene";
import * as PIXI from "pixi.js";


export class Button extends PIXI.Container {
	// textContent
	constructor(text, variant = 'primary') {
		super();
		this.textContent = text
		this.variant = variant
		// console.log(this)

		this.renderButton()
	}

	// create() {
	// 	this.renderButton()
	// }

	renderButton(){
		console.log(this)
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
		// this.container.addChild(this.bg)
		// this.container.addChild(this.text)
		// this.container.height = 55
		// this.container.interactive = true
		this.addChild(this.bg)
		this.addChild(this.text)
		this.height = 55
		this.interactive = true
	}


	onClick(){

	}
}