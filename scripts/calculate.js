
function proc(n, fn) {
    if(fn) {
        return fn.call(fn, n)
    } else {
        return n;
    }
}

function zero() {}
function one(fn) {
    return proc(1, fn);
}
function two() {}
function three() {}
function four(fn) {
    return proc(4, fn);
}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine(fn) {
    return proc(9, fn);
}

function plus(num) {
    return function(res) {
        return res + num;
    }
}
function minus() {}
function times() {}
function dividedBy() {}