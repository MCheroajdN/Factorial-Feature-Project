var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
     it('testing the output of 5! is equal to 120', () => { 
      
       //Setup
      const inputNumber = 5;
      const expectedResult = 120;

      //Excercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult)
    });
     
     it('testing the output of 3! returns 6', () => { 
      
       //Setup
      const inputNumber = 3;
      const expectedResult = 6;

      //Excercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult)
    });
     
     it('returns correct value of 0!', () => {

        //Setup
      const inputNumber = 0;
      const expectedResult = 1;

      //Excercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult)
    });
       
     });
  });
