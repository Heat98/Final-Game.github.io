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
        const playPromise = this.audio.play();
        if (playPromise !== null) {
            playPromise.catch(() => {
                const playPromise2 = this.audio.play();
                if (playPromise2 !== null) {
                    playPromise2.catch(() => {
                        this.audio.play();
                        const playPromise3 = this.audio.play();
                        if (playPromise3 !== null) {
                            playPromise3.catch(() => {
                                this.audio.play();
                            });
                        }
                    });
                }
            });
        }



    };

    pause() {
        this.audio.pause();
    };

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    };

    setVolume(volume) {
        this.audio.volume = volume;
    }
}
