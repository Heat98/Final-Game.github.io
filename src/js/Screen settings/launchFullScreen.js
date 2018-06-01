export default function launchFullScreen(element) {
   if (element.requestFullscreen) {
       element.requestFullscreen();
   } else if (element.mozRequestFullScreen) {
       element.mozRequestFullScreen();
   } else if (element.webkitRequestFullScreen) {
       element.webkitRequestFullScreen();
   }
}
