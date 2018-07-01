import CONSTANTS from '../Constants/constants';

export default class Jutsu {

    constructor() {}

    showJutsuMenu() {
        CONSTANTS.jutsu.classList.remove('hide_element');
        CONSTANTS.jutsu.classList.add('jutsu');
    }

    hideJutsuMenu() {
        CONSTANTS.jutsu.classList.remove('jutsu');
        CONSTANTS.jutsu.classList.add('hide_element');
    }
}
