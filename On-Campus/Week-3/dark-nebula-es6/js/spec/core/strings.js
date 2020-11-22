describe('Strings', () => {
  it('allCaps() should take in a string and return that string with all capital letters', () => {
    let sentence = 'Hey, how are you doing?'

    expect(allCaps(sentence)).toEqual('HEY, HOW ARE YOU DOING?')
  })

  it('combine() should add two strings together', () => {
    let str1 = 'Peter'
    let str2 = 'Parker'

    expect(combine(str1, str2)).toEqual('Peter Parker')
  })

  it('reduceString() should reduce duplicate characters in a string to the desired amount given', () => {
    expect(reduceString('aaaabbbb', 2)).toEqual('aabb');
    expect(reduceString('xaaabbbb', 2)).toEqual('xaabb');
    expect(reduceString('aaaabbbb', 1)).toEqual('ab');
    expect(reduceString('aaxxxaabbbb', 2)).toEqual('aaxxaabb');
  });

  it('reverseString() should return the reverse of a given string', () => {
    let inputStrings = [
      'abc',
      'i am a string of characters',
      'A man, a plan, a canal: Panama'
    ];
    let outputStrings = [
      'cba',
      'sretcarahc fo gnirts a ma i',
      'amanaP :lanac a ,nalp a ,nam A'
    ];

    inputStrings.forEach((str, index) => {
      let result = reverseString(str);
      expect(result).toEqual(outputStrings[index]);
    });
  });
});
