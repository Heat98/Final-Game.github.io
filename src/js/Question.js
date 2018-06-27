import questions from '../js/questions'
import CONSTANTS from '../js/constants';
import questionsList from '../js/questionsList'

export default class Question{
    constructor() {
        this.iterator = questionsList[Symbol.iterator]();
        this.nextQuestion = this.iterator.next();
    }

    showQuestion() {
        this.ask();
                CONSTANTS.questions.classList.remove('hide_element');
                CONSTANTS.questions.classList.add('questions');
    }

    hideQuestions() {
        CONSTANTS.questions.classList.remove('questions');
        CONSTANTS.questions.classList.add('hide_element');
    }

    ask() {
        CONSTANTS.question.innerHTML = this.nextQuestion.value[0];
    }


    checkAnswer(callback) {
        if (CONSTANTS.input.value === this.nextQuestion.value[1]) {
            this.hideQuestions();
            this.nextQuestion = this.iterator.next();
            callback();
        }
    }
}
