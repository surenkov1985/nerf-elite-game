import { Assets } from 'pixi.js';

export class Loader {
    getAssetsFromFolder() {
        const assets = [];
        const req = require["context"]("./../../sprites", true, /\.(png|jpe?g)$/);
        const fonts = require["context"]("./../../assets/fonts", true, /\.(woff2)$/);

        // const myFonts = fonts.keys().map(name => {
        //     return {
        //         alias: name.split('/').reverse()[0].replace(".woff2", ""),
        //         src: fonts(name).default
        //     }
        // });
        //
        // Assets.addBundle('fonts', myFonts);
        //
        // await Assets.loadBundle('fonts');


        req.keys().forEach(name => {
            assets.push({
                alias: name.split('/').reverse()[0].replace(".png", ""),
                src: req(name).default
            });
        });
        fonts.keys().forEach(name => {
            assets.push({
                    alias: 'font',
                    src: fonts(name).default,
                    data: {
                       family: name.split('/').reverse()[0].replace(".woff2", ""),
                    }
                })
            });
        return assets;
    }

    preload() {
        return Assets.load(this.getAssetsFromFolder());
    }
}
