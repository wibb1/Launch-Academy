describe('Objects', () => {
  let a;
  let b;

  beforeEach(() => {
    a = {
      name : 'Jenn',
      greeting : 'Hello',
      sayIt() {
        return  this.greeting + ', ' +
                this.name + '!';
      }
    };

    b = {
      name : 'Rebecca',
      greeting : 'Yo'
    };
  });

  it('alterContext() should be able to alter the context in which a method runs by using a supplied object', function() {
    expect(alterContext(a.sayIt, b)).toEqual('Yo, Rebecca!');
  });

  it('alterObjects() should be able to alter multiple objects at once by updating a single parent object or class', function() {
    class C {
      constructor(name) {
        this.name = name;
      };
    };

    let obj1 = new C('Rebecca');
    let obj2 = new C('Melissa');
    let greeting = 'What\'s up';

    alterObjects(C, greeting);

    expect(obj1.greeting).toEqual(greeting);
    expect(obj2.greeting).toEqual(greeting);
    expect(new C('Ellie').greeting).toEqual(greeting);
  });

  it('iterate() should iterate over an object\'s "own" properties and return an array of the key:value pairs', function() {
    let C = function() {
      this.foo = 'bar';
      this.baz = 'bim';
    };

    C.prototype.bop = 'bip';

    let obj = new C();

    expect(iterate(obj)).toEqual([ 'foo: bar', 'baz: bim' ]);
  });
});
