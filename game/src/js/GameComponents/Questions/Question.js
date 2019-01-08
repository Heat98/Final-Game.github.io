import questions from './questions';
import CONSTANTS from '../../Constants/constants';
import questionsList from './questionsList';
import jutsu from '../Jutsu/Jutsu';
import sasuke from '../Characters/Sasuke';
import naruto from '../Characters/Naruto';

export class Question{
    constructor() {
        this.iterator = questionsList[Symbol.iterator]();
        this.nextQuestion = this.iterator.next();
        this.callback = () => setTimeout( () => jutsu.showJutsuMenu(), 2300);
        CONSTANTS.answer.addEventListener('click', () => this.checkAnswer(this.callback));
    }

    showQuestion() {
        CONSTANTS.questions.classList.remove('hide_element');
        CONSTANTS.questions.classList.add('questions');
        CONSTANTS.question.innerText = this.nextQuestion.value[0];
        CONSTANTS.input.value = '';
    }

    hideQuestions() {
        CONSTANTS.questions.classList.remove('questions');
        CONSTANTS.questions.classList.add('hide_element');
    }

    win() {
        CONSTANTS.jutsu_list.innerHTML = '<p>Sasuke Wins!</p><button class="reload" onclick="location.reload();">Try again.</button>';
        setTimeout(() => {
            sasuke.win();
        }, 3000);
    }

    lose() {
        CONSTANTS.jutsu_list.innerHTML = '<p>Naruto Wins!</p><button class="reload" onclick="location.reload();">Try again.</button>';
    }

    rightAnswer(callback) {
        sasuke.chidoriAttack(100, 300);
        CONSTANTS.narutoHealth.value -= 25;
        if (CONSTANTS.narutoHealth.value === 0) {
            this.win();
        }
        this.hideQuestions();
        this.nextQuestion = this.iterator.next();
        callback();
    };

    wrongAnswer(callback) {
        CONSTANTS.sasukeHealth.value -= 25;
        if (CONSTANTS.sasukeHealth.value === 0) {
            this.lose();
        }
        this.hideQuestions();
        naruto.rassengan(900, 300);
        setTimeout(()=>{
            sasuke.fell(130,300);
            },1000);
        callback();
    }

    checkAnswer(callback) {
        CONSTANTS.input.value.toLowerCase() === this.nextQuestion.value[1] ?
            this.rightAnswer(callback) : this.wrongAnswer(callback);
        };
    }

const question = new Question();
export default question;
