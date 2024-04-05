const desempregadas = []
const menoresDe2500 = []
const maioresDe2500 = []
let continuar = true

while (continuar) {
    let nome = prompt("Digite seu nome: ")
    let idade = Number(prompt("Sua idade: "))
    let trabalhando = confirm("Está trabalhando ?");

    if (trabalhando){
        salario = parseFloat(prompt("Digite seu sálario: "))
    }
    else if(trabalhando == false){
        salario = 0 
    }

    let cadastro = {
        nome : nome,
        idade : idade,
        trabalhando : trabalhando,
        salario : salario
    }

    if(salario <= 0){
        desempregadas.push(cadastro)
    }
    else if(salario > 0 && salario < 2500){
        menoresDe2500.push(cadastro)
    }
    else if(salario >= 2500){
        maioresDe2500.push(cadastro)
    }

    alert('cadastro concluido')
    continuar = confirm('Deseja continuar cadastrando ?')
}
console.log('Pessoas Desempregadas:')
for(i of desempregadas){
    console.log(`Nome: `,i.nome,`, Idade: `, i.idade)
}

console.log('\nPessoas com renda abaixo de 2500: ')
for(i of menoresDe2500){
    console.log(`Nome: `,i.nome,`, Idade: `, i.idade, `, Salario: `, i.salario)
}

console.log('\nPessoas com renda a cima de 2500: ')
for(i of maioresDe2500){
    console.log(`Nome: `,i.nome,`, Idade: `, i.idade, `, Salario: `, i.salario)
}