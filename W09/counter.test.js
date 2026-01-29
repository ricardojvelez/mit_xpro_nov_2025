const createCounter = require("./counter");

describe("Counter", () => {
  let counter;

  describe("#getCount", () => {
    describe("when counter is created", () => {
      it("it returns the initial value", () => {
        counter = createCounter();

        expect(counter.getCount()).toBe(0);
      });
    });
  });

  describe("#decrement", () => {
    describe("when decrement is called", () => {
      //Tests need to be inside a it 
      it("it decreases the count by 1", () => {
        counter = createCounter();
        counter.decrement();
        expect(counter.getCount()).toBe(-1);
      });
    });

    describe("when decrement is called twice", () => {
      //Tests need to be inside a it 
      it("it decreases the count by 2", () => {
        counter = createCounter();
        counter.decrement();
        counter.decrement();
        expect(counter.getCount()).toBe(-2);
      });
    });
  });

  describe('#increment', () => {
    describe("when increment is callwed", () => {
      
      it("it increases the count by 1", () => {
        counter = createCounter();

        counter.increment();

        expect(counter.getCount()).toBe(1);
      });
    });
  })

});
