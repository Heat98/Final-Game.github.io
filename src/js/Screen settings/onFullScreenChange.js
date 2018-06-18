export default function onfullfieldchange() {

    let fullscreenElement =
        document.fullscreenElement ||
        document.mozFullscreenElement ||
        document.webkitFullscreenElement;

    let fullscreenEnabled =
        document.fullscreenEnabled ||
        document.mozFullscreenEnabled ||
        document.webkitFullscreenEnabled;

    console.log('fullscreenEnabled = ' + fullscreenEnabled, ', fullscreenElement = ', fullscreenElement);
}
