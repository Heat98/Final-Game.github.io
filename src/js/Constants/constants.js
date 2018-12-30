const CONSTANTS = {

    canvas : document.getElementById('canvas'),
    context : document.getElementById('canvas').getContext('2d'),
    width: window.innerWidth,
    height: window.innerHeight,

    hit: document.getElementById('hit'),
    katon: document.getElementById('katon'),
    kirin: document.getElementById('kirin'),
    chidori: document.getElementById('chidori'),

    jutsu: document.getElementById('jutsu'),
    jutsu_list: document.getElementById('jutsu_list'),

    questions: document.getElementById('questions'),
    questionForm: document.getElementById('guestion_form'),
    question: document.getElementById('question'),
    answer: document.getElementById('answer'),
    input: document.getElementById('input'),
};

export default CONSTANTS;
