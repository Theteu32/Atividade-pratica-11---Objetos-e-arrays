const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
    1290.00, 15000.00];

const valor = (salario) => salario > 7500;

console.log(`Primeiro valor acima de 7500 é o indice ${salarios.findIndex(valor)}`)

const result = salarios.filter(salario => salario > 8000)

console.log(`Valor maior que 8k ${result}`)