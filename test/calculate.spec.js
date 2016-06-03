describe('Addition Tests', function() {
    it("Spec check addition different digits expects four(plus(nine())) to return 13", function() {
        var r = four(plus(nine()));
        expect(r).toEqual(13);
    });
    it("Spec check addition same digits expects one(plus(one())) to return 2", function() {
        var r = one(plus(one()));
        expect(r).toEqual(2);
    });
});

describe('Subtraction Tests', function() {
    it("Spec check subtraction different digits expects eight(minus(three())) to return 5", function() {
        var r = eight(minus(three()));
        expect(r).toEqual(5);
    });
    it("Spec check subtraction same digits expects one(minus(one())) to return 0", function() {
        var r = one(minus(one()));
        expect(r).toEqual(0);
    });
    it("Spec check subtraction for negative numbers expects one(minus(two())) to return -1", function() {
        var r = one(minus(two()));
        expect(r).toEqual(-1);
    });
});

describe('Multiplication Tests', function() {
    it("Spec check multiplying different digits expects seven(times(five())) to return 35", function() {
        var r = seven(times(five()));
        expect(r).toEqual(35);
    });
    it("Spec check multiplying by zero expects seven(times(zero())) to return 0", function() {
        var r = seven(times(zero()));
        expect(r).toEqual(0);
    });
});

describe('Division Tests', function() {
    it("Spec check division different digits expects six(dividedBy(two())) to return 3", function() {
        var r = six(dividedBy(two()));
        expect(r).toEqual(3);
    });
    it("Spec check division same digits expects two(dividedBy(two())) to return 1", function() {
        var r = two(dividedBy(two()));
        expect(r).toEqual(1);
    });
    it("Spec check division for fractional numbers expects one(dividedBy(two())) to return .5", function() {
        var r = one(dividedBy(two()));
        expect(r).toEqual(.5);
    });
});
