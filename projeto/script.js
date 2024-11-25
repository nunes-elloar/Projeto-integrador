

function ValiCa(){

    const email = document.querySelector("#emailNumero")
    const nomeusu = document.querySelector("#nomeUsuario")
    const senha = document.querySelector("#senhaCadastro")
    const senha2 = document.querySelector("#senhaCadastro2")

    const emailValor = email.value;
    const nomeusuValor = nomeusu.value;
    const senhaValor = senha.value;
    const senha2Valor = senha2.value;

    if(emailValor === ""){
       email.addEventListener(".erro")
    }
}