import style from "../styles/style.css";
import loadAudio from './Loaders/loadAudio';
import loadImage from './Loaders/loadImage';
import screenEvent from './Screen settings/launchFullScreen';
import CONSTANTS from './Constants/constants';
import Jutsu from './GameComponents/Jutsu';
import Question from "./GameComponents/Question";
import Sasuke from './GameComponents/Sasuke';
import GameEngine from './GameEngine/GameEngine'

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
    loadImage('../assets/img/sasuke_stay.png', 130, 300, 1, 100, 300);
    loadImage('../assets/img/naruto_stay.png', 184, 272, 1, 1000, 328);
}

let gameLoop = () => {
    drawGameField();
};

let gameEngine = new GameEngine();
gameEngine.gameEngineStart(gameLoop);
