describe('Addition Tests', function() {
    it("Spec expects four(plus(nine())) to return 13", function() {
        var r = four(plus(nine()));
        expect(r).toEqual(13);
    });
});