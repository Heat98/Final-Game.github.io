import style from "../styles/style.css";
import loadAudio from './loadAudio';
import loadImage from './loadImage';
import screenEvent from './Screen settings/launchFullScreen';
import CONSTANTS from '../js/constants';
import GameEngine from '../js/GameEngine';
import Jutsu from '../js/Jutsu';
import questions from '../js/questions'
import Question from "./Question";

let setup = function () {

    CONSTANTS.canvas.width = CONSTANTS.width;
    CONSTANTS.canvas.height = CONSTANTS.height;

    screenEvent();

    let gameEngine = new GameEngine();
    gameEngine.gameEngineStart(gameLoop);

    const jutsu = new Jutsu();
    const question = new Question();
    jutsu.showJutsuMenu();

    CONSTANTS.jutsu_list.addEventListener('click', (event) => {

        let target = event.target;
        if ( target.tagName !== 'LI' ) return;
        jutsu.hideJutsuMenu();
        question.showQuestion();
    });

    CONSTANTS.answer.addEventListener('click', question.checkAnswer());
};

let sound = ['../assets/sounds/zvuk.mp3'];
let coin = loadAudio(sound, 1);

function drawGameField() {
    CONSTANTS.context.clearRect(0, 0, CONSTANTS.width, CONSTANTS.height);
    loadImage('../assets/img/saske2.png', 130, 300, 1, 100, 300);
    loadImage('../assets/img/naruto2.png', 184, 272, 1, 1000, 328);
}

let gameLoop = function () {
    drawGameField();
};


setup();
// function jutsu() {
//     setTimeout(() => {
//         CONSTANTS.jutsu.classList.remove('jutsu');
//         CONSTANTS.jutsu.classList.add('hide_element');
//     }, 2000);
// }

// let promise = new Promise((resolve, reject) => {
//     CONSTANTS.jutsu_list.addEventListener('click', (event) => {
//         let target = event.target;
//         if ( target.tagName != 'li' ) return;
//         resolve("result");
//     });
// });
//
// promise.
//     then(
//         result => {
//             setTimeout(() => {
//                 CONSTANTS.jutsu.classList.remove('jutsu');
//                 CONSTANTS.jutsu.classList.add('hide_element');
//             }, 5000);
//         },
//         error => {
//             console.log('error');
//         }
// );

