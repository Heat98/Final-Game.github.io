export default function cancelFullScreen() {

    if (document.cancelFullscreen) {
        document.cancelFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.CancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}
