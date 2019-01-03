import CONSTANTS from '../Constants/constants';
// import screenEvent from '../Screen settings/launchFullScreen';
import GameEngine from '../GameEngine/GameEngine';
import sasuke from './Sasuke';
import jutsu from './Jutsu';

export default class Game {

    constructor() {
        CONSTANTS.canvas.width = CONSTANTS.width;
        CONSTANTS.canvas.height = CONSTANTS.height;
        // screenEvent();
        this.gameLoop = () => this.drawGameField();
        new GameEngine().gameEngineStart(this.gameLoop);
    }

    drawGameField() {
        // CONSTANTS.context.clearRect(0, 0, CONSTANTS.width, CONSTANTS.height);
        jutsu.showJutsuMenu();
        sasuke.fell(100, 370);
        // loadImage('../assets/img/naruto_stay.png', 184, 272, 1, 1000, 328);
    }
}
