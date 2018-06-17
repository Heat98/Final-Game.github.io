let nextGameStep = (function () {

    return requestAnimationFrame ||
        webkitRequestAnimationFrame ||
        mozRequestAnimationFrame ||
        oRequestAnimationFrame ||
        msRequestAnimationFrame ||
        function (callback) {
            setTimeout(callback, 1000 / 60);
        };
})();

export default nextGameStep;
