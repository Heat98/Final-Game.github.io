import CONSTANTS from '../Constants/constants';

export default class ImageLoader {
    constructor() {
        this.image = new Image();
        this.frame =  1;
    }


    setImagePattern(path, width, height, frames, x, y) {
        this.image.src = path;
        this.drawImage(this.image, x, y, width, height, frames);
    }

    drawImage(image, x, y, width, height, frames) {
        const update = setInterval(() => {
            if (this.frame >= frames) {
                this.frame = 1;
                clearInterval(update);
            }
            CONSTANTS.context.clearRect(x, y, width, height);
            CONSTANTS.context.drawImage(image, width * (this.frame - 1), 0, width, height, x, y, width, height);
            this.frame += 1;
        }, 1000 / 7);

    }

}
