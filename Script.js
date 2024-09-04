const form = document.getElementById("form")
const username = document.getElementById("username")
const telefone = document.getElementById("telefone")
const email = document.getElementById("email")
const setor = document.getElementById("setor")
const conta  = document.getElementById("conta")
const endereco  = document.getElementById("Endereço") // Ou troque no HTML para `endereco`
const nascimento = document.getElementById("data-nascimento")
const cpf = document.getElementById("cpf")
const rg = document.getElementById("rg")
const admissao  = document.getElementById("data-Admissão") // Ou troque no HTML para `data-admissao`
const funcao  = document.getElementById("Função") // Ou troque no HTML para `funcao`


alert("Prencha todos os campos corretamente")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm(); // Função para verificar todos os campos
    logFormData(); // Função para exibir os dados no console
    
    alert("cadastro feito com sucesso")

});

function checkForm() {
    const usernameValue = username.value.trim();
    const telefoneValue = telefone.value.trim();
    const emailValue = email.value.trim();
    const setorValue = setor.value.trim();
    const contaValue = conta.value.trim();
    const enderecoValue = endereco.value.trim();
    const nascimentoValue = nascimento.value.trim();
    const cpfValue = cpf.value.trim();
    const rgValue = rg.value.trim();
    const admissaoValue = admissao.value.trim();
    const funcaoValue = funcao.value.trim();

    


    if(usernameValue === ""){
        erroInput(username, "Preencha o nome do funcionário");
    } else {
        sucessoInput(username);
    }

    if(telefoneValue === ""){
        erroInput(telefone, "Preencha o telefone");
    } else {
        sucessoInput(telefone);
    }

    if(emailValue === ""){
        erroInput(email, "Preencha o email");
    } else {
        sucessoInput(email);
    }

    if(setorValue === ""){
        erroInput(setor, "Preencha o setor");
    } else {
        sucessoInput(setor);
    }

    if(contaValue === ""){
        erroInput(conta, "Preencha a conta corrente");
    } else {
        sucessoInput(conta);
    }

    if(enderecoValue === ""){
        erroInput(endereco, "Preencha o endereço");
    } else {
        sucessoInput(endereco);
    }

    if(nascimentoValue === ""){
        erroInput(nascimento, "Preencha a data de nascimento");
    } else {
        sucessoInput(nascimento);
    }

    if(cpfValue === ""){
        erroInput(cpf, "Preencha o CPF");
    } else {
        sucessoInput(cpf);
    }

    if(rgValue === ""){
        erroInput(rg, "Preencha o RG");
    } else {
        sucessoInput(rg);
    }

    if(admissaoValue === ""){
        erroInput(admissao, "Preencha a data de admissão");
    } else {
        sucessoInput(admissao);
    }

    if(funcaoValue === ""){
        erroInput(funcao, "Preencha a função");
    } else {
        sucessoInput(funcao);
    }
}

function logFormData() {
    console.log("Nome do funcionário cadastrado: ", username.value);
    console.log("Telefone do funcionário: ", telefone.value);
    console.log("Email do funcionário: ", email.value);
    console.log("Setor do funcionário: ", setor.value);
    console.log("Conta corrente do funcionário: ", conta.value);
    console.log("Endereço do funcionário: ", endereco.value);
    console.log("Data de nascimento do funcionário: ", nascimento.value);
    console.log("CPF do funcionário: ", cpf.value);
    console.log("RG do funcionário: ", rg.value);
    console.log("Data de admissão do funcionário: ", admissao.value);
    console.log("Função do funcionário: ", funcao.value);
}

function erroInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    formItem.className = "form-content error";
}

function sucessoInput(input){
    const formItem = input.parentElement;
    formItem.className = "form-content";
}
