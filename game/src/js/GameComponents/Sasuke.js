import imageLoader from '../Loaders/ImageLoader';
import CONSTANTS from '../Constants/constants';

export class Sasuke {

    constructor() {}

    stay() {
        // loadImage('../assets/img/sasuke_stay.png', 130, 300, 1, 100, 300);
    }

    fell(x,y) {
        setInterval(()=>{
            CONSTANTS.context.clearRect(0,370, 1500, 1000);
            imageLoader.setImagePattern('../src/assets/img/sasuke_up.png', 315, 244, 6, x, y);
        }, 200);
    }
}

const sasuke = new Sasuke();
export default sasuke;
