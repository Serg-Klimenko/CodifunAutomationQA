const { TestResult } = require("@jest/types")
const { exportAllDeclaration } = require("@babel/types")

describe ('Suite', ()=>{
    test('2 plus 2', async() => {
        expect(2 + 2).toEqual(4);
    })
})