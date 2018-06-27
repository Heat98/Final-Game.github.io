import style from "../styles/style.css";
import loadAudio from './loadAudio';
import loadImage from './loadImage';
import screenEvent from './Screen settings/launchFullScreen';
import CONSTANTS from '../js/constants';
import Jutsu from '../js/Jutsu';
import Question from "./Question";
import Sasuke from './Sasuke';
import GameEngine from './GameEngine'

let setup = function () {

    CONSTANTS.canvas.width = CONSTANTS.width;
    CONSTANTS.canvas.height = CONSTANTS.height;

    screenEvent();

    const jutsu = new Jutsu();
    const question = new Question();
    jutsu.showJutsuMenu();

    CONSTANTS.jutsu_list.addEventListener('click', (event) => {

        let target = event.target;
        if ( target.tagName !== 'LI' ) return;
        jutsu.hideJutsuMenu();
        question.showQuestion();
    });
    const callback = () => jutsu.showJutsuMenu();
    CONSTANTS.answer.addEventListener('click', () => question.checkAnswer(callback));
};

let sound = ['../assets/sounds/zvuk.mp3'];
let coin = loadAudio(sound, 1);
let sasuke = new Sasuke();


setup();

let x = 100;
let y = 300;

function drawGameField() {
    CONSTANTS.context.clearRect(0, 0, CONSTANTS.width, CONSTANTS.height);
    sasuke.fell(x, y);
    loadImage('../assets/img/naruto_stay.png', 184, 272, 1, 1000, 328);
}

let gameLoop = () => {
    drawGameField();
};

let gameEngine = new GameEngine();
gameEngine.gameEngineStart(gameLoop);
