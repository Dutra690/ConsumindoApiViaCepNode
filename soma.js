// Esta é a maneira é a maneira antiga de se fazer uma função

n1 = 5;
n2 = 5;
function soma(n1, n2) {
    return n1 + n2
}
adc = soma(n1, n2)
console.log(`Função Antiga: ${adc}`)

// aogra esta é a maneira mais facil e otimizada de se fazer uma função

soma = (n1, n2) => {

    return n1 + n2
}

console.log(`Função Arrow: ${soma(n1, n2)}`)