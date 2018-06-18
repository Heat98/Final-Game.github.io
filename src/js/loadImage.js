import CONSTANTS from '../js/constants';

function loadImage(path, width, height, count) {

    let image = new Image();

    let result = {

        dom: image,
        width: width,
        height: height,
        count: count,
        loaded: false,
        num: 1
    };

    image.onload = () => {
        result.loaded = true;
    };

        image.src = path;

        return result;
}


function drawImage(img, x, y, w ,h) {

    if (!img.loaded) return;

    if (img.num >= img.count) {
        img.num = 1;
    } else {
        img.num += 1;
    }

    CONSTANTS.context.drawImage(img.dom, img.width * (img.num - 1), 0, img.width, img.height, x, y, w, h);
}

export {loadImage, drawImage}
