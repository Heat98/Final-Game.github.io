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
        this.callback = () => setTimeout(()=>jutsu.showJutsuMenu(),2300);
        CONSTANTS.answer.addEventListener('click', () => this.checkAnswer(this.callback));
    }

    showQuestion() {
        CONSTANTS.questions.classList.remove('hide_element');
        CONSTANTS.questions.classList.add('questions');
        CONSTANTS.question.innerHTML = this.nextQuestion.value[0];

    }

    hideQuestions() {
        CONSTANTS.questions.classList.remove('questions');
        CONSTANTS.questions.classList.add('hide_element');
    }

    rightAnswer(callback) {
        sasuke.chidori(100, 300);
        CONSTANTS.narutoHealth.value -= 25;
        this.hideQuestions();
        this.nextQuestion = this.iterator.next();
        console.log('yes');
            callback();
    };

    wrongAnswer(callback) {
        CONSTANTS.sasukeHealth.value -= 25;
        console.log('no');
        this.hideQuestions();
        naruto.rassengan(900, 300);
        callback();
    }

    checkAnswer(callback) {
        CONSTANTS.input.value === this.nextQuestion.value[1] ?
            this.rightAnswer(callback) : this.wrongAnswer(callback);
        };

    }

const question = new Question();
export default question;
