import ImageLoader from '../../Loaders/ImageLoader';

export class Sasuke {

    constructor() {
        this.imageLoader = new ImageLoader();
    }

    stay(x,y) {
        this.imageLoader.setImagePattern('../src/assets/img/sasuke_stay.png',130, 300, 1, x, y);
    }

    fell(x,y) {
        this.imageLoader.setImagePattern('../src/assets/img/sasuke_up.png', 380, 300, 14, x, y);
    }

    chidori(x,y) {
        this.imageLoader.setImagePattern('../src/assets/img/sasuke_chidori.png', 400, 302, 10, x, y);
    }
}

const sasuke = new Sasuke();
export default sasuke;
