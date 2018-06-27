import nextGameStep from '../js/requestAnimationFrame';

export default class GameEngine {

    constructor() {
        this.gameEngine = null;
    };

    gameEngineStart(callback) {
        this.gameEngine = callback;
        this.gameEngineStep();
    }

    gameEngineStep() {
        this.gameEngine();
        nextGameStep(this.gameEngineStep.bind(this));
    }
}
