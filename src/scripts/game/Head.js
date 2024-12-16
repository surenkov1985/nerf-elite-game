import {Scene} from "../system/Scene";
import {App} from "../system/App";
import * as PIXI from 'pixi.js'

export class Head extends Scene {

	create() {
		this.render()
	}

	render() {
		this.logo = App.sprite('nerf_logo')
		this.text = new PIXI.Text({
			text: 'choose your blaster then shoot as many targets as you can within the time limit!'.toUpperCase(), style: {
				fontFamily: App.assets.font.family,
				fontSize: 18,
				fill: 0xffffff,
				wordWrap: true,
				wordWrapWidth: 380,
				fontWeight:500,
				fontStyle:'italic'
			}
		})
		this.text.y = 48
		this.text.x = 423
		this.logo.x = 28
		this.logo.y = 28
		this.container.addChild(this.logo)
		this.container.addChild(this.text)
	}
}