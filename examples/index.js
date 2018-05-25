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