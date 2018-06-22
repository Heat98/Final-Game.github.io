import CONSTANTS from "../constants";
import onfullscreenchange from "./onFullScreenChange";

function launchFullScreen(element) {
   if (element.requestFullscreen) {
       element.requestFullscreen();
   } else if (element.mozRequestFullScreen) {
       element.mozRequestFullScreen();
   } else if (element.webkitRequestFullScreen) {
       element.webkitRequestFullScreen();
   }
}

function screenEvent() {
    CONSTANTS.canvas.addEventListener('webkitfullscreenchange', onfullscreenchange);
    CONSTANTS.canvas.addEventListener('mozfullscreenchange', onfullscreenchange);
    CONSTANTS.canvas.addEventListener('fullscreenchange', onfullscreenchange);
    CONSTANTS.canvas.addEventListener('click', () => {
        launchFullScreen(CONSTANTS.canvas);
    });
}

export default screenEvent;
