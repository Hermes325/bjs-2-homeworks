function parseCount(number) {
  if (Number.isNaN(Number.parseFloat(number))) {
    throw new Error("Невалидное значение");
  }
  return Number.parseFloat(number);
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

// Задача №2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimetr() {
    let perimetr = this.a + this.b + this.c;
    return perimetr;
  }

  get area() {
    let s = Math.sqrt(
      this.perimetr *
        (this.perimetr - this.a) *
        (this.perimetr - this.b) *
        (this.perimetr - this.c)
    );
    return Number(s.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return console.log("«Ошибка! Треугольник не существует»");
  } finally {
  }
}
