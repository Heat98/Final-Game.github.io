import CONSTANTS from '../Constants/constants';
import jutsu from './Jutsu/Jutsu';
import audioLoader from '../Loaders/AudioLoader';
import sasuke from './Characters/Sasuke';
import naruto from './Characters/Naruto';

export default class Game {

    constructor() {
        CONSTANTS.canvas.width = CONSTANTS.width;
        CONSTANTS.canvas.height = CONSTANTS.height;

        new audioLoader('src/assets/sounds/openings/Title_2.mp3', 0.2).loop();
        jutsu.showJutsuMenu();
        sasuke.stay(131, 300);
        naruto.stay(1030, 300);
    }

}
