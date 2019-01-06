import questions from './questions';
import CONSTANTS from '../Constants/constants';
import questionsList from './questionsList';
import jutsu from './Jutsu';
import sasuke from './Sasuke';
import naruto from './Naruto';

export class Question{
    constructor() {
        this.iterator = questionsList[Symbol.iterator]();
        this.nextQuestion = this.iterator.next();
        this.callback = () => jutsu.showJutsuMenu();
    }

    showQuestion() {
        CONSTANTS.questions.classList.remove('hide_element');
        CONSTANTS.questions.classList.add('questions');
        CONSTANTS.question.innerHTML = this.nextQuestion.value[0];
        CONSTANTS.answer.addEventListener('click', () => this.checkAnswer(this.callback));
    }

    hideQuestions() {
        CONSTANTS.questions.classList.remove('questions');
        CONSTANTS.questions.classList.add('hide_element');
    }

    checkAnswer(callback) {
        if (CONSTANTS.input.value === this.nextQuestion.value[1]) {
            sasuke.chidori(100, 300);
            CONSTANTS.narutoHealth.value -= 25;
            this.hideQuestions();
            this.nextQuestion = this.iterator.next();
            console.log('yes');
            callback();
        } else {
            CONSTANTS.sasukeHealth.value -= 25;
            console.log('no');
            this.hideQuestions();
            naruto.rassengan(900, 300);
            setTimeout(() => {
                callback();
            },3000);
        }
    };

    }

const question = new Question();
export default question;
