
import {MathTwo} from "../lib/MathTwo";


describe("MathTwo", function() {
    it("MathTwo#add", function() {
        const mx = new MathTwo();
        expect(mx.addTwice(1, 2)).toEqual(6);
    });
});
