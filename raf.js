var now = function () {
    var _ref;
    return (
        _ref =
            typeof performance !== 'undefined' && performance !== null
                ? typeof performance.now === 'function'
                    ? performance.now()
                    : void 0
                : void 0
    ) != null
        ? _ref
        : +(new Date);
};

var requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

if (requestAnimationFrame == null) {
    requestAnimationFrame = function (fn) {
        return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function (id) {
        return clearTimeout(id);
    };
}

var runAnimation = function (fn) {
    var last;
    var tick;
    last = now();
    tick = function () {
        var diff;
        diff = now() - last;
        if (diff >= 33) {
            last = now();
            return fn(diff, function () {
                return requestAnimationFrame(tick);
            });
        } else {
            return setTimeout(tick, 33 - diff);
        }
    };
    return tick();
};

var animation = runAnimation(function (frameTime, enqueueNextFrame) {
    console.log(frameTime);
    // return enqueueNextFrame()
});
console.log('animation', animation);
