function apresentar(nome) {
    return `Meu nome é ${nome}`
}

const apresentarArrow = nome => `Meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2;



const somaNum = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente númeors de 1 à 9"

    }
    else {
        return num1 + num2
    }
}