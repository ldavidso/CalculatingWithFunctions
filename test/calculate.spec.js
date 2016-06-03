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