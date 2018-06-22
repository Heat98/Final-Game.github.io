import questions from '../js/questions'
import CONSTANTS from '../js/constants';

export default class Question{
    constructor() {
        this.num = 0;
        this.answer = CONSTANTS.answer.value;
    }

    showQuestion() {
        this.ask();
        setTimeout(()=> {
            CONSTANTS.questions.classList.remove('hide_element');
            CONSTANTS.questions.classList.add('questions');
        }, 500);
    }

    hideQuestions() {
        setTimeout(()=> {
            CONSTANTS.questions.classList.remove('questions');
            CONSTANTS.questions.classList.add('hide_element');
        },500)
    }

    ask() {

        CONSTANTS.question.innerHTML = questions.first[0];
    }

    checkAnswer() {
        if (this.answer = questions.first[1]) this.hideQuestions();
    }
}
