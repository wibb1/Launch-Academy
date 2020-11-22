// describe('functions', () => {
//
//   it('should return true or false based on a number being prime', () => {
//     let _true = isPrime(5);
//     let _false = isPrime(100);
//     expect(_true).toEqual(true);
//     expect(_false).toEqual(false);
//   });
//
//   it('should return the sum of all elements of an array of numbers', () => {
//     let array1 = [1, 2, 3, 4, 5];
//     let array2 = [-5, 0, 5];
//     let result1 = arraySum(array1);
//     let result2 = arraySum(array2);
//
//     expect(result1).toEqual(15);
//     expect(result2).toEqual(0);
//   });
//
//   it('it returns \'fizz\' if input is divisible by 3, \'buzz\' if 5, \'fizzbuzz\' if 15, else the input (if input is number) or null (otherwise)', () => {
//     let num = 0;
//
//     while (num % 3 === 0 || num % 5 === 0) {
//       num = Math.floor(Math.random() * 10) + 1;
//     }
//
//     expect(fizzBuzz(null)).toEqual(null);
//     expect(fizzBuzz('foo')).toEqual(null);
//     expect(fizzBuzz(2)).toEqual(2);
//     expect(fizzBuzz(101)).toEqual(101);
//
//     expect(fizzBuzz(3)).toEqual('fizz');
//     expect(fizzBuzz(6)).toEqual('fizz');
//     expect(fizzBuzz(num * 3)).toEqual('fizz');
//
//     expect(fizzBuzz(5)).toEqual('buzz');
//     expect(fizzBuzz(10)).toEqual('buzz');
//     expect(fizzBuzz(num * 5)).toEqual('buzz');
//
//     expect(fizzBuzz(15)).toEqual('fizzbuzz');
//     expect(fizzBuzz(num * 3 * 5)).toEqual('fizzbuzz');
//   });
// });
