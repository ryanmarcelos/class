class Calculadora {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }
}

const calc = new Calculadora();
//console.log("Soma:", calc.somar(69, 3));
//console.log("Subtração:", calc.subtrair(5, 3));
//console.log("Multiplicação:", calc.multiplicar(5, 3));
//console.log("Divisão:", calc.dividir(5, 3));
