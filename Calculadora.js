class Calculadora{
    #resultado;
    construtor(){
        this.#resultado=0;
    }
    get resultado(){
        return this.#resultado
    }
set resultado(numero){
    if(typeof numero == "string"){
        numero = numero-0
    }
    if(isNaN(numero) || typeof numero !== "number"){
        throw new typeError ("O argumento devi ser um numero Valido");
    }
this.#resultado = numero;
}
    

}
module.exports = Calculadora