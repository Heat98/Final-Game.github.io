import CONSTANTS from '../js/constants';

export default class Jutsu {

    constructor() {}

    showJutsuMenu() {
        CONSTANTS.jutsu.classList.remove('hide_element');
        CONSTANTS.jutsu.classList.add('jutsu');
    }

    hideJutsuMenu() {
        setTimeout(()=> {
            CONSTANTS.jutsu.classList.remove('jutsu');
            CONSTANTS.jutsu.classList.add('hide_element');
        },500)
    }
}
