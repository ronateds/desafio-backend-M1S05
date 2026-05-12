//Declaração dos objetos
const pessoa = {
    nome: "Davi",
    idade: 30,
    profissao: "Professor"
}

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2014,
    ligado: false
}

// Acessando os atributos do objeto
console.log(pessoa.nome)
console.log(carro.modelo)

console.log(pessoa["profissao"])
console.log(carro["marca"])

console.log("cpf" in pessoa)
console.log(Object.hasOwn(pessoa, "data_nascimento"))
console.log(Object.hasOwn(pessoa, "idade"))

pessoa.cpf = "000.000.000-01"

console.log("cpf" in pessoa)

pessoa.idade = 25

console.log(pessoa.idade)

delete pessoa.profissao

console.log("profissao" in pessoa)

Object.freeze(pessoa)

pessoa.idade = 28

console.log(pessoa.idade)

pessoa.rg = "N/A"

console.log(pessoa.rg)

Object.seal(carro)

carro.ligado = true

console.log(carro.ligado)

carro.velocidade = 150

console.log(carro.velocidade)


const pessoa = {}

Object.defineProperty(pessoa, "nome", {
    value: "João",
    writable: false
})

pessoa.nome = "Maria"

console.log(pessoa.nome)

const produto = {}

Object.defineProperty(produto, "codigoInterno", {
    value: 123,
    enumerable: false
})

console.log(Object.keys(produto))

const usuario = {}

Object.defineProperty(usuario, "cpf", {
    value: "123.456.789-00",
    configurable: false
})

delete usuario.cpf

console.log(usuario.cpf)

/* Exemplos de Situações */

// writable
const config= {}

Object.defineProperty(config, "API_URL", {
    value: "https://api.minhaapi.com",
    writable: false
})

// enumerable
const usuario = {
    nome: "João",
    email: "joao@email.com"
}

Object.defineProperty(usuario, "_idInterno", {
    value: 123,
    enumerable: false
})

Object.defineProperty(usuario, "email", {
    value: 123,
    enumerable: false   
})

console.log(Object.keys(usuario))
console.log(usuario._idInterno)

//configurable
const conta = {}

Object.defineProperty(conta, "saldo", {
    value: 1000,
    configurable: false
})

delete conta.salario