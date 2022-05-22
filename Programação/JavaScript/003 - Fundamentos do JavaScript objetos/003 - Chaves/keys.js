const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "23165498787",
    email: "asdfsdf@gmail.com",
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))