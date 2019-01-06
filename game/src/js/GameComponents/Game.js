import CONSTANTS from '../Constants/constants';
// import screenEvent from '../Screen settings/launchFullScreen';
import jutsu from './Jutsu';
import audioLoader from '../Loaders/AudioLoader';
import sasuke from './Sasuke';
import naruto from './Naruto';

export default class Game {

    constructor() {
        CONSTANTS.canvas.width = CONSTANTS.width;
        CONSTANTS.canvas.height = CONSTANTS.height;
        // screenEvent();
        // new audioLoader('src/assets/sounds/Naruto Shippuden Shinobi Rumble OST/Battle 1.mp3', 0.1).play();
        jutsu.showJutsuMenu();
        sasuke.stay(130, 300);
        naruto.stay(1030, 300);
    }

}
