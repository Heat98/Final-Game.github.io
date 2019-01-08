import ImageLoader from '../../Loaders/ImageLoader';
import AudioLoader from '../../Loaders/AudioLoader';

export class Naruto {
    constructor() {
        this.imageLoader = new ImageLoader();
    }

    stay(x, y) {
        this.imageLoader.setImagePattern('../src/assets/img/naruto_stay.png', 200, 300, 1, x, y);
    }

    rassengan(x, y) {
        new AudioLoader('../src/assets/sounds/Naruto/rassengan.wav',0.3).play();
        this.imageLoader.setImagePattern('../src/assets/img/naruto_rassengan.png', 400, 300, 10, x, y);
    }
}

const naruto = new Naruto();
export default naruto;
