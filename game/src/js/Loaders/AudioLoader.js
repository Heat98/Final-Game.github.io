export default class AudioLoader {

    constructor(path, volume) {
        this.path = path;
        this.volume = volume;

        this.createAudio();
    }

    createAudio() {
        this.audio = document.createElement('audio');
        this.audio.src = this.path;
        this.audio.volume = this.volume || 1;

        return this.audio;
    };

    play() {
        this.audio.currentTime = 0;
        this.audio.play().catch(() => {
            this.audio.play();
        });
    };

    loop() {
        this.play();
        this.audio.onended = () => {
            this.play();
        };
    }
}
