import CONSTANTS from '../Constants/constants';
import question from './Question';

export class Jutsu {

    constructor() {
        this.chooseJutsu();
        this.question = question;
    }

    showJutsuMenu() {
        CONSTANTS.jutsu.classList.remove('hide_element');
        CONSTANTS.jutsu.classList.add('jutsu');

    }

    hideJutsuMenu() {
        CONSTANTS.jutsu.classList.remove('jutsu');
        CONSTANTS.jutsu.classList.add('hide_element');
    }

    chooseJutsu() {
        CONSTANTS.jutsu_list.addEventListener('click', (event) => {

            let target = event.target;
            if ( target.tagName !== 'LI' ) return;
            this.hideJutsuMenu();
            this.question.showQuestion();
        });
    }
}
 const jutsu = new Jutsu();
export default jutsu;
