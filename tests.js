// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// plusOne

describe('plusOne', function(){
    it('should be a defined function', function(){
        expect(typeof plusOne).toBe('function');
    });
    it('should return a number', function() {
        expect(typeof plusOne()).toBe('number');
    });
    it('should return 5 when passed 4', function(){
        expect(plusOne(4)).toBe(5);
    });
    it('should return 5 when passed 6', function(){
        expect(plusOne(5)).toBe(6);
    });
});

//Exercise #1 - #10 sayHello()

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it("should return a string when called.", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it ("should return 'Hello, Jane!' when called.", function(){
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it("should return 'Hello, Alex!' when called.", function(){
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it("should return 'Hello, Pat!' when called.", function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it("should return 'Hello, World!' when called", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when true and called", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when false and called", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});


    describe('isFive', function() {
        it('should be a defined function', function () {
            expect(typeof isFive).toBe('function');
        });
    });

it('should be a defined function', function() {
    expect(typeof helloWorld).toBe('function');
});
it('should return a string when called', function() {
    expect(typeof helloWorld()).toBe("string");
});