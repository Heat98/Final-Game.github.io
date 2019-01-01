import CONSTANTS from '../Constants/constants';

export default function loadImage(path, width, height, count, x, y) {

    let image = new Image();

    const result = {
        dom: image,
        width: width,
        height: height,
        count: count,
        num: 1,
    };

    image.onload = () => {

        if (result.num >= result.count) {
            result.num = 1;
        } else {
            result.num += 1;
        }

        CONSTANTS.context.drawImage(result.dom, result.width * (result.num - 1), 0, result.width, result.height, x, y, width, height);
    };

    image.src = path;
    return result;
}


