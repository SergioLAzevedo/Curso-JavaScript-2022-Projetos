//par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' // contexto 2
    return saudacao
}


// objetos são grupos de aninhados de pares/valor
const cliente = {
    Nome: 'Pedro',
    Idade: 32,
    Peso: 90,
    Endereço:{
        Logadouro:'Rua muito Legal',
        Numero:123
    }

}
console.log(saudacao)
console.log(exec())
console.log(cliente)
