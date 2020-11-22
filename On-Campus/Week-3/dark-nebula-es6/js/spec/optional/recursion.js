// describe('recursion', () => {
//   let fileData = {
//     dir : 'app',
//     files : [
//       'index.html',
//       {
//         dir : 'js',
//         files: [
//           'main.js',
//           'app.js',
//           'misc.js',
//           {
//             dir : 'vendor',
//             files : [
//               'jquery.js',
//               'underscore.js'
//             ]
//           }
//         ]
//       },
//       {
//         dir : 'css',
//         files : [
//           'reset.css',
//           'main.css'
//         ]
//       }
//     ]
//   };
//
//   it('you should be able to return a list of files from the data', () => {
//     let result = listFiles(fileData);
//     expect(result.length).toEqual(8);
//     expect(result.indexOf('index.html') > -1).toEqual(true)
//     expect(result.indexOf('main.js') > -1).toEqual(true)
//   });
//
//   it('you should be able to return a list of files in a subdir', () => {
//     let result = listFiles(fileData, 'js');
//     expect(result.length).toEqual(5);
//     expect(result.indexOf('main.js') > -1).toEqual(true)
//   });
// });
//
// describe('permutation', () => {
//   let arr = [ 1, 2, 3, 4 ];
//   let answer = [
//     [1, 2, 3, 4],
//     [1, 2, 4, 3],
//     [1, 3, 2, 4],
//     [1, 3, 4, 2],
//     [1, 4, 2, 3],
//     [1, 4, 3, 2],
//     [2, 1, 3, 4],
//     [2, 1, 4, 3],
//     [2, 3, 1, 4],
//     [2, 3, 4, 1],
//     [2, 4, 1, 3],
//     [2, 4, 3, 1],
//     [3, 1, 2, 4],
//     [3, 1, 4, 2],
//     [3, 2, 1, 4],
//     [3, 2, 4, 1],
//     [3, 4, 1, 2],
//     [3, 4, 2, 1],
//     [4, 1, 2, 3],
//     [4, 1, 3, 2],
//     [4, 2, 1, 3],
//     [4, 2, 3, 1],
//     [4, 3, 1, 2],
//     [4, 3, 2, 1]
//   ];
//
//   it('you should be able to return the permutations of an array', () => {
//     let result = permute(arr);
//     let resultStrings = result.map(function(r) { return r.join(''); });
//
//     expect(result.length).toEqual(answer.length);
//
//     answer.forEach(function(a) {
//       expect(resultStrings.indexOf(a.join('')) > -1).toEqual(true)
//     });
//   });
//
//   it('you should be able to return the nth number in a fibonacci sequence', () => {
//     expect(fibonacci(2)).toEqual(1);
//     expect(fibonacci(6)).toEqual(8);
//   });
//
//   it('you should be able to return the set of all valid combinations of n pairs of parentheses.', () => {
//     let expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
//     let result = validParentheses(3);
//
//     expect(result.length).toEqual(5);
//     expected.forEach(function(c) {
//       expect(result).toContain(c);
//     });
//   });
// });
