const { TestScheduler } = require("jest");

function sum(a, b) {
    return a + b;
}
// Lesson 4. Assertion. Expect 
describe ('Learn expect', ()=> {
    
    test('sum function', async () => {
        expect(sum(5, 3)).toEqual(8);
    });

    test('not string', async () => {
        expect(typeof sum(6,2)).not.toEqual('string');
    });

    test('is defined', async () => {
        let someVariable = 'test';
        expect(someVariable).toBeDefined();
    })  
    
    test('length of array', async () => {
        let someArray = [1,2,3,4,5,6,7,8];
        expect(someArray.length).toBeLessThan(10);
    })

    test.skip('is true', async () => {
        expect(true).toBeTruthy();
    })  
})