import CONSTANTS from '../js/constants';

export default function loadImage(path, width, height, count, x, y) {

    let image = new Image();

    let result = {
        dom: image,
        width: width,
        height: height,
        count: count,
        loaded: false,
        num: 1
    };

    image.onload = function () {
        drawImage(result, x, y, width, height);
    };
    image.src = path;
}


function drawImage(img, x, y, width ,height) {

    if (img.num >= img.count) {
        img.num = 1;
    } else {
        img.num += 1;
    }

    CONSTANTS.context.drawImage(img.dom, img.width * (img.num - 1), 0, img.width, img.height, x, y, width, height);
}
