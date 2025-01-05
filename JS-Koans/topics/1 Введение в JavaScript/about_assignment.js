describe("About Assignment (about_assignment.js)", function() {
  it("local variables", function() {
    let temp = 1; // Присваиваем значение переменной temp
    expect(temp).toBe(1);
  });
  
  it("global variables", function() {
    temp = 1; // Глобальная переменная, присвоенное значение
    // Глобальные переменные становятся свойствами объекта window
    expect(window.temp).toBe(temp); // Указываем правильный путь
  });
});