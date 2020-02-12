const axios = require("axios")


axios.get("https://viacep.com.br/ws/12411610/json/")
.then(function(ceps){

    const cep = ceps.data
    
    if(cep.logradouro){
        
        
    console.log(`------------`)
    console.log(`CEP: ${cep.cep}`)
    console.log(`------------`)
    console.log(`Logradouro: ${cep.logradouro}`)
    console.log(`------------`)
    console.log(`Bairro: ${cep.bairro}`)
    console.log(`------------`)
    console.log(`Localidade: ${cep.localidade}`)
    console.log(`------------`)
    console.log(`UF: ${cep.uf}`)
    console.log(`------------`)
    
}

})