const calcularIMC = (peso: number, altura:number): string =>{
    let imc: number = peso/(altura*altura);
    if(imc<18.5) return `Peso bajo`
    if(imc>18.5 || imc<30) return `Peso normal`
    if(imc>=30) return `Sobrepeso`
    return `Algo Salio mal`
}

console.log(calcularIMC(75, 1.78));
console.log(calcularIMC(55, 1.78));
console.log(calcularIMC(75, 1.58));