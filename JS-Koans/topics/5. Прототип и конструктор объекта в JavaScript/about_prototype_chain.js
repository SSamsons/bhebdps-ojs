describe("About Prototype Chain (about_prototype_chain.js)", function() {
  let father = {
    b: 3,
    c: 4
  };
  
  let child = Object.create(father);
  child.a = 1;
  child.b = 2;
  
  it("Is there an 'a' and 'b' own property on child?", function () {
    // child.hasOwnProperty('a')?
    expect(true).toBe(child.hasOwnProperty('a'));
    // child.hasOwnProperty('b')?
    expect(true).toBe(child.hasOwnProperty('b'));
  });
  
  it("Is there an 'a' and 'b' property on child?", function () {
    // what is 'a' value?
    expect(1).toBe(child.a);
    // what is 'b' value?
    expect(2).toBe(child.b);
  });
  
  it("If 'b' was removed, whats b value?", function () {
    delete child.b;
    // what is 'b' value now?
    expect(3).toBe(child.b); // Наследуется от father
  });
  
  it("Is there a 'c' own property on child?", function () {
    // child.hasOwnProperty('c')?
    expect(false).toBe(child.hasOwnProperty('c'));
  });
  
  it("Is there a 'c' property on child?", function () {
    // what is the value of child.c?
    expect(4).toBe(child.c); // Наследуется от father
  });
  
  it("Is there an 'd' property on child?", function () {
    // what is the value of child.d?
    expect(undefined).toBe(child.d); // Свойства 'd' нигде нет
  });
});
