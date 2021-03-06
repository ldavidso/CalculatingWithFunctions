
function proc(n, fn) {
    return (fn) ? fn.call(fn, n) : n;
}

function zero(fn)  { return proc(0, fn); }
function one(fn)   { return proc(1, fn); }
function two(fn)   { return proc(2, fn); }
function three(fn) { return proc(3, fn); }
function four(fn)  { return proc(4, fn); }
function five(fn)  { return proc(5, fn); }
function six(fn)   { return proc(6, fn); }
function seven(fn) { return proc(7, fn); }
function eight(fn) { return proc(8, fn); }
function nine(fn)  { return proc(9, fn); }

function plus(num)      { return function(res) { return res + num; } }
function minus(num)     { return function(res) { return res - num; } }
function times(num)     { return function(res) { return res * num; } }
function dividedBy(num) { return function(res) { return res / num; } }
