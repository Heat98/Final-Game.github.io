import style from "../styles/style.css";
import loadAudio from './loadAudio';
import {loadImage, drawImage} from './loadImage';
import launchFullScreen from './Screen settings/launchFullScreen';
import onfullscreenchange from './Screen settings/onFullScreenChange';
import CONSTANTS from '../js/constants';
import GameEngine from '../js/GameEngine';


let setup = function () {

    CONSTANTS.canvas.width = CONSTANTS.width;
    CONSTANTS.canvas.height = CONSTANTS.height;

    CONSTANTS.canvas.addEventListener('click', () => {
        launchFullScreen(CONSTANTS.canvas);
    });

    CONSTANTS.canvas.addEventListener('webkitfullscreenchange', onfullscreenchange);
    CONSTANTS.canvas.addEventListener('mozfullscreenchange', onfullscreenchange);
    CONSTANTS.canvas.addEventListener('fullscreenchange', onfullscreenchange);


};

setup();

let sasuke = loadImage('../assets/img/saske2.png', 130, 300, 1);
let naruto = loadImage('../assets/img/naruto2.png', 184, 272, 1);
let sound = ['../assets/sounds/zvuk.mp3'];
let coin = loadAudio(sound, 1);

function drawGameField() {

    CONSTANTS.context.clearRect(0, 0, CONSTANTS.width, CONSTANTS.height);
    drawImage(sasuke, 100, 300, 130, 300);
    drawImage(naruto, 1000, 328, 184, 272);

    CONSTANTS.context.beginPath();
    CONSTANTS.context.arc(CONSTANTS.width / 2, CONSTANTS.height / 2, 100, 0, 2 * Math.PI);
    CONSTANTS.context.stroke();

}

let gameLoop = function () {
    drawGameField();
};

let gameEngine = new GameEngine();
gameEngine.gameEngineStart(gameLoop);
