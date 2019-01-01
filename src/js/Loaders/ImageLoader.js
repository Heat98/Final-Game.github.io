import CONSTANTS from '../Constants/constants';

export class ImageLoader {
    constructor() {
        this.image = new Image();
        this.frame =  1;
    }


    setImagePattern(path, width, height, frames, x, y) {

        this.image.onload = () => {
            this.drawImage(this.image, x, y, width, height, frames);
        };

        this.image.src = path;
    }

    drawImage(image, x, y, width, height, frames) {

        if (this.frame >= frames) return;
            this.frame += 1;

        CONSTANTS.context.drawImage(image, width * (this.frame - 1), 0, width, height, x, y, width, height);
    }

}

const imageLoader = new ImageLoader();
export default imageLoader;
