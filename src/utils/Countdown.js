var Countdown = /** @class */ (function () {
    function Countdown(seconds, callback) {
        this.defaultSeconds = seconds;
        this.seconds = seconds;
        this.callback = callback;
    }
    Countdown.prototype.start = function () {
        this.seconds = this.defaultSeconds;
        this.continue();
    };
    Countdown.prototype.pause = function () {
        clearInterval(this.timer);
    };
    Countdown.prototype.continue = function () {
        var _this = this;
        if (this.seconds <= 0)
            return;
        this.timer = setInterval(function () {
            if (_this.seconds <= 0)
                clearInterval(_this.timer);
            else
                _this.seconds--;
        }, 1000);
    };
    return Countdown;
}());

const c = new Countdown(10, )
console.log('hi');
