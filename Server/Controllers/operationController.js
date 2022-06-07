
/**
 * Functions
 * 
 * */

    function toInt(x) {
        return parseInt(x, 10);
    }

    function WR(value, reg, f) {
        var oldValue = null;
        while (value != oldValue) {
            oldValue = value;
            value = value.replace(reg, f);
        }
      return value;
    }

export function calculate(value) {

        value = WR(value, /\(([^\(\)]+)\)/g, function (s, x) {
            return calculate(x)
        });
        value = WR(value, /([^+*\^\!])!/, function (s, x) {
            var i = toInt(x);
            if (i === 0) {
                return 1
            };
            var r = i;
            while (--i) {
                r *= i;
            }
            return r;
        });
        value = WR(value, /([^+*\^]+)\^([^+*\^]+)/, function (s, x, y) {
            return Math.pow(toInt(x), toInt(y));
        });
        value = WR(value, /([^+*]+)\*([^+*]+)/, function (s, x, y) {
            return toInt(x) * toInt(y);
        });
        value = WR(value, /([^+]+)\+([^+]+)/, function (s, x, y) {
            return toInt(x) + toInt(y);
        });
        return value;
    }