const should = require("chai").should();

const fizzBuzzer = require("../fizzBuzzer");

describe("fizzbuzzer", () => {
    it("should return fizz-buzz if the number is divisible by 15", () => {
        const expected = "fizz-buzz";
        const normalCases = [15, 30, 90];

        normalCases.forEach((item) => {
            const answer = fizzBuzzer(item);
            answer.should.equal(expected);
        });
    });
    it("should return buzz if the number is divisible by 5 and NOT divisble by 3", () => {
        const expected = "buzz";
        const normalCases = [5, 20, 110];

        normalCases.forEach((item) => {
            const answer = fizzBuzzer(item);
            answer.should.equal(expected);
        });
    });
    it("should return fizz if the number is divisible by 3 and NOT divisble by 5", () => {
        const expected = "fizz";
        const normalCases = [3, 12, 93];

        normalCases.forEach((item) => {
            const answer = fizzBuzzer(item);
            answer.should.equal(expected);
        });
    });
    it("should return the number if the number is NOT divisble by 5 OR 3", () => {
        const normalCases = [4, 0, 17];

        normalCases.forEach((item) => {
            const answer = fizzBuzzer(item);
            answer.should.equal(fizzBuzzer(item));
        });
    });
    it("should raise error if args aren't number", () => {
        const badInputs = ["f", true, undefined];

        badInputs.forEach(function (item) {
            (function () {
                adder(item)
            }).should.throw(Error);
        });
    });
});