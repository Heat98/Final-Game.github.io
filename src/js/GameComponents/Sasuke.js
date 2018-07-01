import loadImage from "../Loaders/loadImage";

export default class Sasuke {

    constructor() {
        this.x = 100;
        this.y = 300;
    }

    stay() {
        loadImage('../assets/img/sasuke_stay.png', 130, 300, 1, 100, 300);
    }

    fell(x ,y) {
        loadImage('../assets/img/sasuke_up.png', 315, 244, 4, x, y);
    }

}
