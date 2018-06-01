export default function loadImage(path, width, height, count) {

    let image = document.createElement('img');

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


