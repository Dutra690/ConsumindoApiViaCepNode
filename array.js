// Esta é a maneira é a maneira antiga de se fazer uma função

a = [1, 1, 1, 1, 1],
soma = 0


function somar(a){

    for(i = 0; i <= 4; i++){

        soma = soma + a[i]
        
    }

    console.log(`${soma}`)
}

somar(a)

// aogra esta é a maneira mais facil e otimizada de se fazer uma função

arraysoma = (a) => {

    for(i = 0; i <= 4; i++){

        soma = soma + a[i]
    }

    return soma
}