import style from "../styles/style.css";
import loadAudio from './loadAudio';
import loadImage from './loadImage';
import launchFullScreen from './Screen settings/launchFullScreen';
import canselFullScreen from './Screen settings/canselFullScreen';
import onfullscreenchange from './Screen settings/onFullScreenChange';

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let x = 0, y = 0;

let man = loadImage('../assets/img/kek_go_right.png', 64, 50, 9);
let sound = ['../assets/sounds/zvuk.mp3'];
let coin = loadAudio(sound, 1);


canvas.addEventListener('click', () => {
   launchFullScreen(canvas);
});
canvas.addEventListener('webkitfullscreenchange', onfullscreenchange);
canvas.addEventListener('mozfullscreenchange', onfullscreenchange);
canvas.addEventListener('fullscreenchange', onfullscreenchange);

setInterval(() => {

   context.clearRect(0, 0, 500, 100);
   drawImage(man, x, y);
   // x+=10;
   if (x === 500) {
   }

}, 200);


function drawImage(img, x, y) {

    if (!img.loaded) return;

    if (img.num >= img.count) {
        img.num = 1;
    } else {
        img.num += 1;
    }

    context.drawImage(img.dom, img.width * (img.num - 1), 0, img.width, img.height, x, y, 64, 50);
}
