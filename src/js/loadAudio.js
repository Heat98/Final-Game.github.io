export default function loadAudio(arr, vol) {

    let audio = document.createElement("audio");

    for (let i = 0, len = arr.length; i < len; i+=1) {

        let source = document.createElement('source');
        source.src = arr[i];
        audio.appendChild(source);
    }

    audio.volume = vol || 1;

    let o = {

        dom : false,
        state: 'stop',

        play: function() {

            this.dom.currentTime = 0;
            this.dom.play();
            this.state = 'play';

        },
        pause: function() {

            this.dom.pause();
            this.state = 'pause';
        },
        stop: function() {

            this.dom.pause();
            this.dom.currentTime=0;
            this.state = 'stop';
        },
        setVolume : function(vol) {

            this.dom.volume = vol;
        }
    };

    o.dom = audio;
    return o;
}
