// Esta é a maneira é a maneira antiga de se fazer uma função

a = [1, 1, 1, 1, 1],
soma = 0


function somar(a){

    for(i = 0; i <= 4; i++){

        soma = soma + a[i]
        
    }

    console.log(`Maneira antiga: ${soma}`)
}

somar(a)

// aogra esta é a maneira mais facil e otimizada de se fazer uma função

b = [1, 1, 1, 1, 1]
somando = 0
arraysoma = (b) => {

    for(i = 0; i <= 4; i++){

        somando = somando + b[i]
    }

    return somando
}
const ArraySoma = arraysoma(b)
console.log(`Maneira otimizada: ${ArraySoma}`)