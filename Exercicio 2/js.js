// result === ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo"];

const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

rainbow.splice(2, 1)

console.log(rainbow)

rainbow.splice(2, 0, 'amarelo', 'verde')

console.log(rainbow)

rainbow.splice(5, 0, 'roxo')

console.log(rainbow)