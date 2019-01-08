import ImageLoader from '../../Loaders/ImageLoader';
import AudioLoader from '../../Loaders/AudioLoader';

export class Sasuke {

    constructor() {
        this.imageLoader = new ImageLoader();
    }

    stay(x,y) {
        this.imageLoader.setImagePattern('../src/assets/img/sasuke_stay.png',130, 300, 1, x, y);
    }

    win() {
        new AudioLoader('../src/assets/sounds/Sasuke/talk.wav',0.3).play();
    }

    fell(x,y) {
        this.imageLoader.setImagePattern('../src/assets/img/sasuke_up.png', 380, 300, 14, x, y);
    }

    chidoriAttack(x,y) {
        new AudioLoader('../src/assets/sounds/Sasuke/chidori.wav',0.3).play();
        this.imageLoader.setImagePattern('../src/assets/img/sasuke_chidori.png', 400, 302, 10, x, y);
    }

}

const sasuke = new Sasuke();
export default sasuke;
