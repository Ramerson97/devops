const Calculadora = require("./calculadora");

describe("calculadora", () => {
    it("criar nova calculadora", () => {
        const calculadora = new Calculadora();
        expect(calculadora).toBeDefined();
        expect(calculadora.resultado).toBeDefined();

    });
    it("operação Soma", () => {
        const calculadora = new Calculadora();
        expect(calculadora.soma).toBeDefined;
        expect(calculadora.soma.length).toBe(1);
        expect(() =>)

    })

})


