const { food } = require('../src/food')

function helloWorld() {
    return "Hello World"
}

describe('Hello world', () => {
    let expected = "ex";
    beforeEach(() => {
        expected = "Hello World";
    });
    afterEach(() => {
        expected = "";
    });
    it('says hello', () => {
        expect(helloWorld())
            .toEqual(expected);
    });
});


describe('Pipe: My', () => {
    it('create an instance', () => {
        expect(2).toBe(2);
    });
});

describe('Food', () => {
    it("must return 'food'", () => {
        expect(food()).toBe('food');
    });
    it("must return 'bark'", () => {
        expect(food()).toBe('food');
    });
});

/*describe('', () => {
    it('', () => {
        const fn = kwuo.fn()
        expect(fn).toBeCalled(true)
    })
})*/