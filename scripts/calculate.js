
function zero() {}
function one(fn) {
    if(fn) {
        return fn.call(fn,1);
    } else {
        return 1;
    }
}
function two() {}
function three() {}
function four(fn) {
    if(fn) {
        return fn.call(fn,4);
    } else {
        return 4;
    }
}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine(fn) {
    if(fn) {
        return fn.call(fn,9);
    }else{
        return 9;
    }
}

function plus(num) {
    return function(res) {
        return res + num;
    }
}
function minus() {}
function times() {}
function dividedBy() {}