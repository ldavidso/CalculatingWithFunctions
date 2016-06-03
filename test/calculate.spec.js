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